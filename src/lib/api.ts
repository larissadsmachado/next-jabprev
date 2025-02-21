export async function fetchPostById(id: string) {
  const res = await fetch(`https://jaboataoprev.jaboatao.pe.gov.br/wp-json/wp/v2/posts/${id}`);
  if (!res.ok) throw new Error("Erro ao buscar post");

  const post = await res.json();

  // Se o post tiver uma imagem destacada
  if (post.featured_media) {
    const mediaRes = await fetch(`https://jaboataoprev.jaboatao.pe.gov.br/wp-json/wp/v2/media/${post.featured_media}`);
    if (mediaRes.ok) {
      const media = await mediaRes.json();
      post.featured_image_url = media.source_url; // Adiciona a URL da imagem ao post
    }
  }

  return post;
}
