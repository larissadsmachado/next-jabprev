import fetch from 'node-fetch';

export default async function handler(req: { query: { url: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): void; new(): any; }; }; setHeader: (arg0: string, arg1: string | null) => void; send: (arg0: Buffer<ArrayBufferLike>) => void; }) {
  const { url } = req.query; // A URL da imagem passada como parâmetro
  if (!url) {
    return res.status(400).json({ error: 'URL é necessária' });
  }

  try {
    // Fazendo o fetch da imagem
    const response = await fetch(decodeURIComponent(url));

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Erro ao buscar a imagem' });
    }

    // Obtendo os dados binários da imagem como arrayBuffer
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Definindo o tipo de conteúdo com base nos headers da resposta original
    res.setHeader("Content-Type", response.headers.get("content-type"));
    res.send(buffer); // Enviando os dados binários da imagem
  } catch (error) {
    console.error('Erro ao buscar a imagem:', error);
    res.status(500).json({ error: 'Erro interno ao buscar a imagem' });
  }
}
