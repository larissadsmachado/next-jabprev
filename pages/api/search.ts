import routes from '../../routes-front-end/routes.json';

interface Route {
  path: string;
}

export default function handler(req, res) {
  const { searchTerm } = req.query; // Obtém o parâmetro searchTerm da URL

  if (!searchTerm) {
    return res.status(400).json({ message: 'No search term provided' }); // Retorna um erro caso não haja termo
  }

  // Transforma o searchTerm em minúsculas para garantir a busca insensível a maiúsculas/minúsculas
  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  // Filtra as rotas que incluem o termo de busca (também converte as rotas para minúsculas)
  const filteredRoutes = (routes as Route[]).filter(route =>
    route.path.toLowerCase().includes(lowerCaseSearchTerm.replace(/\s+/g, '-'))
  );

  if (filteredRoutes.length === 0) {
    return res.status(404).json({ route: null }); // Retorna erro se não encontrar nenhuma rota
  }

  // Ajusta a rota
  let finalRoute = filteredRoutes[0].path;

  // Remove '/page' ou outras subpastas, deixando apenas o nome da pasta principal
  const pathParts = finalRoute.split('/'); // Divide a rota pelo separador '/'
  finalRoute = pathParts.slice(0, 2).join('/'); // Usa as duas primeiras partes (por exemplo: "Boletins-Informativos")

  return res.status(200).json({ route: finalRoute }); // Retorna a rota sem as subpastas extras
}
