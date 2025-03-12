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

type Media = {
  id: number;
  source_url: string;
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
      <div className="bg-[#003470] p-4 md:p-10">
        <h1 className="text-3xl md:text-5xl font-bold text-white flex text-center items-center justify-center uppercase">
          Notícias
        </h1>
      </div>
      <div className="relative w-full">
      <svg
        width="100%"
        viewBox="0 0 2000 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.33"
          d="M946 62.22C538.2 152.254 419.8 27.5523 305.4 62.22C132 115.037 0 54.4708 0 54.4708V-6.40161H2000V54.4708C2000 54.4708 1875.8 81.0833 1810.2 84.3462C1744.6 87.711 1684.6 71.8046 1658.6 61.8122C1612 44.1724 1490.6 2.46924 1389.8 -1.60931C1289 -5.68786 984.8 53.757 946 62.22Z"
          fill="#003470"
        />
        <path
          opacity="0.66"
          d="M1468 62.22C1377 62.22 1313.6 38.5644 1209.8 22.3522C1152.6 13.4813 909.2 12.0538 701.8 62.22C494.4 112.386 518.4 27.1445 403.4 62.22C231.4 114.222 0 34.18 0 34.18V-6.40161H2000V30.8152C2000 30.8152 1943.6 11.9519 1815.8 11.9519C1620.4 12.0538 1551.4 62.22 1468 62.22Z"
          fill="#003470"
        />
        <path
          d="M1532.2 23.0659C1132.2 -35.5633 1000.2 89.8522 742 42.9489C484 -4.56626 484 -0.895566 369.6 14.6029C256 30.1014 264.6 39.3801 179.8 47.1294C57.2 58.5493 0 -6.40161 0 -6.40161H2000C2000 -6.40161 1980.2 35.3016 1832.8 42.643C1685.4 49.9844 1659.2 41.5214 1532.2 23.0659Z"
          fill="#003470"
        />
      </svg>
    </div> 

      {loading ? (
        <p className="flex text-center items-center justify-center text-gray-600 h-auto text-xl py-60">
          Carregando...
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 lg:px-36 px-10 py-20 bg-gradient-to-b from-[#ffffff] to-[#003470]">
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
                      <div className="absolute top-0 left-0 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-tl-lg rounded-br-lg z-10">
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

          <div className="flex justify-center items-center space-x-2 bg-[#003470] pb-20">
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
