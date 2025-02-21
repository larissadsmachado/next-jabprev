"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import DivisorDeForma from "../../DivisorDeForma/divisor";

type Post = {
  id: number;
  title: { rendered: string };
  date: string;
  featured_media: number; // ID da imagem destacada
};

type Media = {
  id: number;
  source_url: string;
};

const POSTS_PER_PAGE = 8;

export const HoverImageLinks: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [media, setMedia] = useState<{ [key: number]: string }>({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://jaboataoprev.jaboatao.pe.gov.br/wp-json/wp/v2/posts?per_page=${POSTS_PER_PAGE}&page=${page}`
        );
        const data = await res.json();

        if (!Array.isArray(data)) {
          console.error("Erro ao buscar notícias:", data);
          return;
        }

        setPosts(data);

        // Buscar imagens destacadas
        const mediaPromises = data.map(async (post) => {
          if (post.featured_media) {
            const mediaRes = await fetch(
              `https://jaboataoprev.jaboatao.pe.gov.br/wp-json/wp/v2/media/${post.featured_media}`
            );
            const mediaData: Media = await mediaRes.json();
            return { id: post.featured_media, url: mediaData.source_url };
          }
          return null;
        });

        const mediaResults = await Promise.all(mediaPromises);
        const mediaMap = mediaResults.reduce((acc, item) => {
          if (item) acc[item.id] = item.url;
          return acc;
        }, {} as { [key: number]: string });

        setMedia(mediaMap);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, [page]);

  return (
    <section id="noticias">
      <div className="bg-[#003470] p-4 md:p-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white flex text-center items-center justify-center uppercase">
          Notícias
        </h1>
      </div>
      <DivisorDeForma />

      {loading ? (
        <p className="text-center text-gray-500 my-4">Carregando...</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 px-36 py-20">
            {posts.map((post) => (
              <div key={post.id} className="bg-white shadow-md rounded-lg">
                <img
                  src={media[post.featured_media] || "/placeholder.jpg"}
                  alt={post.title.rendered}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold">{post.title.rendered}</h2>
                  <p className="text-sm text-gray-500">
                    📅 {new Date(post.date).toLocaleDateString("pt-BR")}
                  </p>
                  <Link href={`/noticia/${post.id}`} className="text-blue-600 font-bold mt-2 block">
                    Leia mais →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Paginação */}
          <div className="flex justify-center space-x-4 mt-6">
            {page > 1 && (
              <button
                onClick={() => setPage(page - 1)}
                className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                ← Anterior
              </button>
            )}
            <button
              onClick={() => setPage(page + 1)}
              className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
            >
              Próxima →
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default HoverImageLinks;
