import routes from '../../routes-front/routes.json';

interface Route {
  path: string;
}

export default function HandleSearch(searchTerm: string): string {
  if (!searchTerm) {
    return ''; // Retorna uma string vazia caso não haja termo de busca
  }

  // Filtra as rotas que incluem o termo de busca (substituindo espaços por hífens)
  const filteredRoutes = (routes as Route[]).filter(route =>
    route.path.includes(searchTerm.replace(/\s+/g, '-'))
  );

  if (filteredRoutes.length === 0) {
    return ''; // Se não encontrar nenhuma rota, retorna uma string vazia
  }

  // Ajuste para remover '/page' se presente
  const finalRoute = filteredRoutes[0].path.includes("page")
    ? filteredRoutes[0].path.replace("/page", "")
    : filteredRoutes[0].path;

  return finalRoute; // Retorna a rota filtrada
}
