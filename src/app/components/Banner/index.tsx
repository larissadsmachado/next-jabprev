"use client"; // <-- Adicione esta linha no topo do arquivo

import React from "react";

const Banner = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative h-screen w-full flex justify-center items-center text-white">
      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay escuro para melhorar a legibilidade */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Conteúdo do banner */}
      <div className="relative text-center px-4 w-full">
        <img
          src="/images/Logo/logo-jabprev.png"
          alt="Logo Jaboatão Prev"
          className="mx-auto h-20 sm:h-24 md:h-32 lg:h-52 w-auto"
        />

        {/* Botões */}
        <div className="flex justify-center gap-10 my-10 flex-wrap px-2">
          <button
            className="border-2 border-white py-2 px-6 sm:py-3 sm:px-10 lg:py-4 lg:px-14 rounded-full hover:text-yellow-400 hover:border-yellow-400 transition text-sm sm:text-base"
            onClick={() => scrollToSection("servicos")}
          >
            SERVIÇOS
          </button>

          <button
            className="border-2 border-white py-2 px-6 sm:py-3 sm:px-10 lg:py-4 lg:px-14 rounded-full hover:text-yellow-400 hover:border-yellow-400 transition text-sm sm:text-base"
            onClick={() => scrollToSection("enquete")}
          >
            ENQUETE
          </button>

          <button
            className="border-2 border-white py-2 px-6 sm:py-3 sm:px-10 lg:py-4 lg:px-14 rounded-full hover:text-yellow-400 hover:border-yellow-400 transition text-sm sm:text-base"
            onClick={() => scrollToSection("fale-conosco")}
          >
            FALE CONOSCO
          </button>

          <button
            className="border-2 border-white py-2 px-6 sm:py-3 sm:px-10 lg:py-4 lg:px-14 rounded-full hover:text-yellow-400 hover:border-yellow-400 transition text-sm sm:text-base"
            onClick={() => scrollToSection("noticias")}
          >
            NOTÍCIAS
          </button>
        </div>

        {/* Ícones de premiação */}
        <div className="flex justify-center gap-4 sm:gap-6 mt-6 flex-wrap">
          <img
            src="/images/Medalha/premio1.png"
            alt="Prêmio 1"
            className="h-16 sm:h-20 md:h-24 lg:h-52"
          />
          <img
            src="/images/Medalha/premio2.png"
            alt="Prêmio 2"
            className="h-16 sm:h-20 md:h-24 lg:h-52"
          />
          <img
            src="/images/Medalha/premio3.png"
            alt="Prêmio 3"
            className="h-16 sm:h-20 md:h-24 lg:h-52"
          />
          <img
            src="/images/Medalha/premio4.png"
            alt="Prêmio 4"
            className="h-16 sm:h-20 md:h-24 lg:h-52"
          />
          <img
            src="/images/Medalha/premio5.png"
            alt="Prêmio 5"
            className="h-16 sm:h-20 md:h-24 lg:h-52"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
