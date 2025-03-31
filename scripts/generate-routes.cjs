const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../src/app');
const routes = [];

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      walkDir(filePath); // Recursão para subdiretórios
    } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.tsx')) {
      const route = filePath
        .replace(pagesDir, '')
        .replace(/\.(js|jsx|tsx)$/, '')
        .replace(/\\/g, '/') // Normaliza caminhos para Unix
        .replace(/\/page$/, ''); // Remove o "/page" no final

      // Se a pasta for encontrada, vamos considerar o nome dela como a rota
      const folderName = path.basename(path.dirname(filePath)); // Nome da pasta

      // Agora, usamos o nome da pasta como o título
      routes.push({
        path: `/${folderName}`, // Usa o nome da pasta
        title: folderName,      // Usa o nome da pasta como o título
        description: `Descrição da página ${folderName}`,
      });

    }
  });
}

walkDir(pagesDir);

// Salva as rotas em um arquivo JSON
fs.writeFileSync(path.join(__dirname, '../routes-front-end/routes.json'), JSON.stringify(routes, null, 2));
console.log('Rotas geradas com sucesso!');