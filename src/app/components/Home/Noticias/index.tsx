"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

type Post = {
  id: number;
  title: { rendered: string };
  date: string;
  featured_media: number;
  categories: number[];
};

type Category = {
  id: number;
  name: string;
};

const POSTS_PER_PAGE = 8;

export const HoverImageLinks: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [media, setMedia] = useState<{ [key: number]: string }>({});
  const [categories, setCategories] = useState<{ [key: number]: string }>({});
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
        const data: Post[] = await res.json();

        if (!Array.isArray(data)) {
          console.error("Erro ao buscar notícias:", data);
          return;
        }

        setPosts(data);

        const totalPagesHeader = res.headers.get("X-WP-TotalPages");
        if (totalPagesHeader) {
          setTotalPages(parseInt(totalPagesHeader, 10));
        }

        const mediaResults = await Promise.all(
          data.map(async (post) => {
            if (post.featured_media) {
              try {
                const mediaRes = await fetch(
                  `https://jaboataoprev.jaboatao.pe.gov.br/wp-json/wp/v2/media/${post.featured_media}`
                );
                if (!mediaRes.ok) throw new Error("Erro ao buscar imagem");

                const mediaData = await mediaRes.json();
                return { id: post.featured_media, url: mediaData.source_url };
              } catch (error) {
                console.error(
                  `❌ Erro ao buscar imagem do post ${post.id}:`,
                  error
                );
                return null;
              }
            }
            return null;
          })
        );

        const mediaMap = mediaResults.reduce((acc, item) => {
          if (item) acc[item.id] = item.url;
          return acc;
        }, {} as { [key: number]: string });

        setMedia(mediaMap);

        const categoryIds = [
          ...new Set(data.flatMap((post) => post.categories)),
        ];
        if (categoryIds.length > 0) {
          const categoryRes = await fetch(
            `https://jaboataoprev.jaboatao.pe.gov.br/wp-json/wp/v2/categories?include=${categoryIds.join(
              ","
            )}`
          );
          const categoryData: Category[] = await categoryRes.json();
          const categoryMap = categoryData.reduce(
            (acc, cat) => ({ ...acc, [cat.id]: cat.name }),
            {} as { [key: number]: string }
          );
          setCategories(categoryMap);
        }
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

      <div className="bg-slate-300">
        <h1 className="flex justify-center text-5xl font-semibold text-[#146c33] uppercase pt-16">
          Notícias
        </h1>
      </div>
     

      {loading ? (
        <p className="flex text-center items-center justify-center text-gray-600 h-auto text-xl py-60">
          Carregando...
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 lg:px-36 px-10 py-20 bg-gradient-to-b from-[#CBD5E1] to-[#004619]">
            {posts.map((post) => {
              const imageUrl = media[post.featured_media];
              const finalUrl = imageUrl?.startsWith("/")
                ? `https://jaboataoprev.jaboatao.pe.gov.br${imageUrl}`
                : imageUrl;

              const postCategories = post.categories.map(
                (catId) => categories[catId] || "Sem categoria"
              );

              return (
                <div
                  key={post.id}
                  className="bg-white shadow-md rounded-lg relative "
                >
                  <Link
                    href={`/noticia/${post.id}`}
                    className="block group relative"
                  >
                    {/* Categoria em destaque */}
                    {postCategories.length > 0 && (
                      <div className="absolute top-0 left-0 bg-[#008C32] text-white text-xs font-bold px-3 py-1 rounded-tl-lg rounded-br-lg z-10">
                        {postCategories[0]}
                      </div>
                    )}

                    {/* Container da Imagem com overlay */}
                    <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                      {/* Imagem destacada */}
                      <Image
                        key={finalUrl}
                        src={`/api/image-proxy?url=${encodeURIComponent(
                          finalUrl
                        )}`}
                        alt={post.title.rendered}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        unoptimized
                      />

                      {/* Overlay escuro apenas na imagem */}
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </Link>

                  <div className="p-4">
                    <h2 className="text-lg font-bold">{post.title.rendered}</h2>
                    <p className="text-sm text-gray-500">
                      📅 {new Date(post.date).toLocaleDateString("pt-BR")}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      🏷 {postCategories.slice(1).join(", ")}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center items-center space-x-2 bg-[#004619] pb-20">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className={`px-4 py-2 rounded-lg ${
                page === 1
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              ← Anterior
            </button>

            {[...Array(totalPages)].map((_, i) => {
              const pageNumber = i + 1;

              if (
                pageNumber === 1 || // Primeiro número
                pageNumber === 2 || // Segundo número
                pageNumber === totalPages || // Último número
                pageNumber === page || // Página atual
                pageNumber === page - 1 || // Página anterior à atual
                pageNumber === page + 1 // Página posterior à atual
              ) {
                return (
                  <button
                    key={i}
                    onClick={() => setPage(pageNumber)}
                    className={`px-4 py-2 rounded-lg ${
                      page === pageNumber
                        ? "bg-green-700 text-white"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              }

              if (pageNumber === page - 2 || pageNumber === page + 2) {
                return (
                  <span key={i} className="px-4 py-2 rounded-lg bg-gray-300">
                    ...
                  </span>
                );
              }

              return null;
            })}

            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
              className={`px-4 py-2 rounded-lg ${
                page === totalPages
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
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
