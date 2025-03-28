"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
      <div className="pt-20">
        <h1 className="relative flex justify-center text-5xl font-semibold text-[#146c33] uppercase">
          <span className="px-4">Notícias</span>
          <div className="absolute top-1/2 left-0 w-full flex items-center">
            {/* Gradiente da esquerda indo do verde até o branco e continuando branco */}
            <div
              className="flex-1 border-t-4"
              style={{
                borderImage:
                  "linear-gradient(to right, white, white,  #146c33) 1",
                borderImageSlice: 1,
              }}
            ></div>

            <div className="w-64"></div>

            {/* Gradiente da direita indo do branco até o verde e começando branco */}
            <div
              className="flex-1 border-t-4"
              style={{
                borderImage:
                  "linear-gradient(to left, white, white,  #146c33) 1",
                borderImageSlice: 1,
              }}
            ></div>
          </div>
        </h1>
      </div>

      {loading ? (
        <p className="bg-gradient-to-b flex text-center items-center justify-center h-auto text-xl py-60 text-green-800">
          Carregando...
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 lg:px-36 px-10 py-20 ">
            {posts.map((post) => {
              const imageUrl = media[post.featured_media];
              const finalUrl = imageUrl?.startsWith("/")
                ? `https://jaboataoprev.jaboatao.pe.gov.br${imageUrl}`
                : imageUrl;

              const postCategories = post.categories.map(
                (catId) => categories[catId] || "Sem categoria"
              );

              return (
                <motion.div
                  key={post.id}
                  className="bg-slate-100 shadow-md rounded-xl relative border-8 border-[#dee1f2] hover:border-[#0d7c34] p-2 hover:shadow-2xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Link
                    href={`/noticia/${post.id}`}
                    className="block group relative transition-transform duration-300"
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

                    <div className="p-4">
                      <h2 className="text-lg font-bold">
                        {post.title.rendered}
                      </h2>
                      <p className="text-sm text-gray-500">
                        📅 {new Date(post.date).toLocaleDateString("pt-BR")}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        🏷 {postCategories.slice(1).join(", ")}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-center pb-20">
            <div className="flex flex-wrap justify-center items-center space-x-1 sm:space-x-2 bg-slate-200 p-3 sm:p-5 rounded-lg shadow-lg">
              {/* Números das páginas */}
              {[...Array(totalPages)].map((_, i) => {
                const pageNumber = i + 1;

                if (
                  pageNumber === 1 ||
                  pageNumber === 2 ||
                  pageNumber === totalPages ||
                  pageNumber === page ||
                  pageNumber === page - 1 ||
                  pageNumber === page + 1
                ) {
                  return (
                    <button
                      key={i}
                      onClick={() => setPage(pageNumber)}
                      className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base ${
                        page === pageNumber
                          ? "bg-blue-700 text-white font-bold"
                          : "bg-gray-300 text-black hover:bg-gray-400"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                }

                if (pageNumber === page - 2 || pageNumber === page + 2) {
                  return (
                    <span
                      key={i}
                      className="px-3 py-1 sm:px-4 sm:py-2 rounded-lg bg-gray-300 text-sm sm:text-base"
                    >
                      ...
                    </span>
                  );
                }

                return null;
              })}

              {/* Botão Próxima */}
              <button
                onClick={() =>
                  setPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={page === totalPages}
                className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-bold text-sm sm:text-base ${
                  page === totalPages
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-green-700 text-white hover:bg-green-800"
                }`}
              >
                Próxima
              </button>

              {/* Botão -10 páginas */}
              <button
                onClick={() => setPage((prev) => Math.max(prev - 10, 1))}
                disabled={page <= 10}
                className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-bold text-sm sm:text-base ${
                  page <= 10
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-yellow-500 text-black hover:bg-yellow-600"
                }`}
              >
                -10
              </button>

              {/* Botão +10 páginas */}
              <button
                onClick={() =>
                  setPage((prev) => Math.min(prev + 10, totalPages))
                }
                disabled={page >= totalPages - 10}
                className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-bold text-sm sm:text-base ${
                  page >= totalPages - 10
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-yellow-500 text-black hover:bg-yellow-600"
                }`}
              >
                +10
              </button>

              {/* Botão Final */}
              <button
                onClick={() => setPage(totalPages)}
                disabled={page === totalPages}
                className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-bold text-sm sm:text-base ${
                  page === totalPages
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-blue-700 text-white hover:bg-blue-500"
                }`}
              >
                Final
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default HoverImageLinks;
