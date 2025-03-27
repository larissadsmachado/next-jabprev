"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const API_SEARCH_URL = "https://jaboataoprev.jaboatao.pe.gov.br/wp-json/custom-api/v1/search/?query=";
  
const SearchComponent = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const searchInput = inputRef.current?.value;
      if (searchInput) {
        setIsLoading(true);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // Timeout de 5 segundos

        try {
          const response = await fetch(`${API_SEARCH_URL}${encodeURIComponent(searchInput)}`, {
            signal: controller.signal,
          });
          const data = await response.json();

          if (data.length === 0) {
            router.push("/404");
          } else {
            router.push(`/search/${encodeURIComponent(searchInput)}`);
          }
        } catch (error) {
          console.error("Erro na pesquisa:", error);
          router.push("/404");
        } finally {
          clearTimeout(timeoutId); // Limpa o timeout
          setIsLoading(false);
          setIsSearching(false);
        }
      }
    }
  };

  if (!isMounted) return null;

  return (
    <>
      {/* BOTÃO DE PESQUISA COM EFEITO AFTER */}
      <div className="relative">
        <button
          onClick={() => setIsSearching(true)}
          className="text-[#0037C1] text-xl focus:outline-none relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#0037C1] after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
          aria-label="Toggle Search"
        >
          <FaSearch />
        </button>

        {/* TELA DE PESQUISA */}
        {isSearching && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={() => setIsSearching(false)}
                className="absolute top-2 right-7 text-white hover:text-gray-400 text-xl"
                aria-label="Close Search"
              >
                &times;
              </button>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                className="text-white placeholder-gray-300 px-7 py-3 rounded-full border-2 border-blue-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent w-full text-2xl capitalize"
                onKeyDown={handleKeyPress}
              />
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* TELA DE CARREGAMENTO */}
      {isLoading && (
        <div className="fixed inset-0 bg-[#FDC300] flex flex-col items-center justify-center z-50">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0037C1]"></div>
          <p className="mt-4 text-lg text-[#0037C1]">Pesquisando: {inputRef.current?.value}</p>
        </div>
      )}
    </>
  );
};

export default SearchComponent;