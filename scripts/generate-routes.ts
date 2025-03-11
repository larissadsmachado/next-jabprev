import fs from 'fs';
import path from 'path';

const pagesDir = path.join(__dirname, '../src/app');
const routesDir = path.join(__dirname, '../routes-front-end');
const routesFile = path.join(routesDir, 'routes.json');

const routes: { path: string; title: string; description: string }[] = [];

function walkDir(dir: string): void {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.tsx')) {
      const route = filePath
        .replace(pagesDir, '')
        .replace(/\.(js|jsx|tsx)$/, '')
        .replace(/\\/g, '/');

      routes.push({
        path: route === '/page' ? '/' : route,
        title: file.replace(/\.(js|jsx|tsx)$/, ''),
        description: `Descrição da página ${route}`,
      });
    }
  });
}

// Cria o diretório se não existir
if (!fs.existsSync(routesDir)) {
  fs.mkdirSync(routesDir, { recursive: true });
}

// Gera as rotas
walkDir(pagesDir);

// Escreve o JSON no arquivo
fs.writeFileSync(routesFile, JSON.stringify(routes, null, 2));

console.log('Rotas geradas com sucesso!');
