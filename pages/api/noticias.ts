import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await fetch('https://jaboataoprev.jaboatao.pe.gov.br/wp-json/wp/v2/posts');
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar notícias' });
  }
}
