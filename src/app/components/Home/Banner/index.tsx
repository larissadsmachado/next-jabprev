"use client";
import React from "react";
import Image from "next/image";

const Banner = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const buttons = [
    { label: "SERVIÇOS", section: "servicos" },
    { label: "ENQUETE", section: "enquete" },
    { label: "FALE CONOSCO", section: "fale-conosco" },
    { label: "NOTÍCIAS", section: "noticias" },
  ];

  const awards = [1, 2, 3, 4, 5];

  return (
    <div className="relative h-screen w-full flex justify-center items-center text-white">
      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay escuro para melhorar a legibilidade */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Conteúdo do banner */}
      <div className="relative text-center px-4 w-full">
      <Image
  src="/images/Logo/logo-jabprev.png"
  alt="Logo Jaboatão Prev"
  width={300} // Ajuste conforme necessário
  height={208} // Ajuste conforme necessário
  className="mx-auto h-20 sm:h-24 md:h-32 lg:h-52 w-auto"
/>

        {/* Botões */}
        <div className="flex justify-center gap-6 my-6 flex-wrap px-2">
          {buttons.map(({ label, section }) => (
            <button
              key={section}
              className="border-2 border-white py-2 px-6 sm:py-3 sm:px-10 lg:py-4 lg:px-14 rounded-full hover:text-yellow-400 hover:border-yellow-400 transition text-sm sm:text-base w-full lg:max-w-64 max-w-xs"
              onClick={() => scrollToSection(section)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Ícones de premiação */}
        <div className="flex justify-center gap-4 sm:gap-6 mt-6 flex-wrap">
          {awards.map((num) => (
            <Image
            key={num}
            src={`/images/Medalha/premio${num}.png`}
            alt={`Prêmio ${num}`}
            className="h-32 w-28 lg:w-auto sm:h-20 md:h-20 lg:h-52"
            width={150}  
            height={100} 
          />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
