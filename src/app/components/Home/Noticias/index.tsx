"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DivisorDeForma from "../../DivisorDeForma/divisor";

type Post = {
  id: number;
  title: { rendered: string };
  date: string;
  featured_media: number;
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
  const [totalPages, setTotalPages] = useState(1);

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

        // Captura o total de páginas do cabeçalho da resposta
        const totalPagesHeader = res.headers.get("X-WP-TotalPages");
        if (totalPagesHeader) {
          setTotalPages(parseInt(totalPagesHeader, 10));
        }

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

  // Função para gerar os botões de paginação corretamente
  const renderPagination = () => {
    const maxPagesToShow = 5;
    let pages: (number | string)[] = [];

    if (totalPages <= maxPagesToShow) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      pages = [1];

      if (page > 3) pages.push("...");

      const middlePages = Array.from(
        { length: 3 },
        (_, i) => page - 1 + i
      ).filter((p) => p > 1 && p < totalPages);

      pages = [...pages, ...middlePages];

      if (page < totalPages - 2) pages.push("...");

      pages.push(totalPages);
    }

    return (
      <div className="flex justify-center items-center space-x-2 mt-6">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className={`px-4 py-2 rounded-lg ${page === 1 ? "bg-gray-200 cursor-not-allowed" : "bg-gray-300 hover:bg-gray-400"}`}
        >
          ← Anterior
        </button>

        {pages.map((p, index) =>
          p === "..." ? (
            <span key={index} className="px-3">...</span>
          ) : (
            <button
              key={index}
              onClick={() => setPage(Number(p))}
              className={`px-4 py-2 rounded-lg ${
                page === p ? "bg-blue-500 text-white" : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              {p}
            </button>
          )
        )}

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded-lg ${page === totalPages ? "bg-gray-200 cursor-not-allowed" : "bg-gray-300 hover:bg-gray-400"}`}
        >
          Próxima →
        </button>
      </div>
    );
  };

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

          {renderPagination()}
        </>
      )}
    </section>
  );
};

export default HoverImageLinks;
