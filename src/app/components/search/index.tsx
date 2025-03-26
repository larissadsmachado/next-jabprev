"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Fuse from "fuse.js";
import React from "react";

type Post = {
  id: number;
  title: { rendered: string };
  date: string;
  featured_media: number;
  categories: number[];
};

type Category = { id: number; name: string };

interface SearchPageProps {
  searchTerm?: string;
}

const POSTS_PER_PAGE = 8;

export const SearchPage: React.FC<SearchPageProps> = ({ searchTerm }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [media, setMedia] = useState<{ [key: number]: string }>({});
  const [categories, setCategories] = useState<{ [key: number]: string }>({});
  const [filteredRoutes, setFilteredRoutes] = useState<any[]>([]);

  useEffect(() => {
    async function fetchNoticias() {

      if (!searchTerm) {
        setPosts([]);
        setFilteredRoutes([]);
        setLoading(false);
        return;
      }
  
      setLoading(true);
  
      try {
     
        const res = await fetch(
          `https://jaboataoprev.jaboatao.pe.gov.br/wp-json/wp/v2/posts?search=${encodeURIComponent(
            searchTerm
          )}&page=${page}&per_page=${POSTS_PER_PAGE}`
        );
        const data: Post[] = await res.json();
        if (!Array.isArray(data)) {
          console.error("Erro ao buscar notícias:", data);
          setPosts([]);
        } else {
          setPosts(data);
        }
  
        const totalPagesHeader = res.headers.get("X-WP-TotalPages");
        if (totalPagesHeader) {
          setTotalPages(parseInt(totalPagesHeader, 10));
        }
  
      
        const mediaResults = await Promise.all(
          data.map(async (post) => {
            if (!post.featured_media) return null;
            try {
              const mediaRes = await fetch(
                `https://jaboataoprev.jaboatao.pe.gov.br/wp-json/wp/v2/media/${post.featured_media}`
              );
              if (!mediaRes.ok) throw new Error("Erro ao buscar imagem");
              const mediaData = await mediaRes.json();
              return { id: post.featured_media, url: mediaData.source_url };
            } catch (error) {
              console.error(`Erro ao buscar imagem do post ${post.id}:`, error);
              return null;
            }
          })
        );
  
        const mediaMap = mediaResults.reduce((acc, item) => {
          if (item) acc[item.id] = item.url;
          return acc;
        }, {} as { [key: number]: string });
        setMedia(mediaMap);
  
        // 3) Buscar as categorias dos posts
        const categoryIds = [...new Set(data.flatMap((post) => post.categories))];
        if (categoryIds.length > 0) {
          const categoryRes = await fetch(
            `https://jaboataoprev.jaboatao.pe.gov.br/wp-json/wp/v2/categories?include=${categoryIds.join(",")}`
          );
          const categoryData: Category[] = await categoryRes.json();
          const categoryMap = categoryData.reduce((acc, cat) => {
            acc[cat.id] = cat.name;
            return acc;
          }, {} as { [key: number]: string });
          setCategories(categoryMap);
        }
  
        const routesRes = await fetch("/data/routes.json");
        if (!routesRes.ok) throw new Error("Erro ao buscar routes.json");
        const allRoutes = await routesRes.json();
  
      
        const normalizedSearchTerm = searchTerm
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
  
        
        const fuseOptions = {
          keys: ["title", "path", "description"],
          threshold: 0.3,   
          ignoreLocation: true,
        };
  
        const fuse = new Fuse(allRoutes, fuseOptions);
        const fuseResults = fuse.search(normalizedSearchTerm);
        const filtered = fuseResults.map((result) => result.item);
        setFilteredRoutes(filtered);
        
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    }
  
    fetchNoticias();
  }, [searchTerm, page]);

  // ------------------ Layout ------------------
  return (
    <section id="noticias">
      {loading ? (
        <p className="flex text-center items-center justify-center text-gray-600 h-auto text-xl py-60">
          Carregando...
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 px-36 py-20 bg-gradient-to-b from-[#ffffff] to-[#003470]">
            {posts.map((post) => {
              const imageUrl = media[post.featured_media];
              const finalUrl = imageUrl?.startsWith("/")
                ? `https://jaboataoprev.jaboatao.pe.gov.br${imageUrl}`
                : imageUrl;

              const postCategories = post.categories.map(
                (catId) => categories[catId] || "Sem categoria"
              );

              return (
                <div key={post.id} className="bg-white shadow-md rounded-lg relative">
                  <Link href={`/noticia/${post.id}`} className="block group relative">
                    {postCategories.length > 0 && (
                      <div className="absolute top-0 left-0 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-tl-lg rounded-br-lg z-10">
                        {postCategories[0]}
                      </div>
                    )}

                    <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                      <Image
                        key={finalUrl}
                        src={`/api/image-proxy?url=${encodeURIComponent(finalUrl || "")}`}
                        alt={post.title.rendered}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        unoptimized
                      />
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

          {/* Paginação das Notícias */}
          <div className="flex justify-center items-center space-x-2 bg-[#003470] pb-40">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className={`px-4 py-2 rounded-lg ${
                page === 1 ? "bg-gray-200 cursor-not-allowed" : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              ← Anterior
            </button>

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
                page === totalPages ? "bg-gray-200 cursor-not-allowed" : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              Próxima →
            </button>
          </div>

          <div className="bg-[#ffffff] px-36 py-8">
            <h2 className="text-xl font-bold mb-4">Páginas Encontradas</h2>
            {filteredRoutes.length === 0 ? (
              <p>Nenhuma página correspondente.</p>
            ) : (
              <ul className="list-disc list-inside space-y-2">
                {filteredRoutes.map((r) => (
                  <li key={r.path}>
                    <Link href={r.path} className="text-blue-600 underline">
                      {r.path} - {r.title}
                    </Link>
                    <p className="text-sm text-gray-600">{r.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default SearchPage;