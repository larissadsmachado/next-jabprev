import React from "react";
import DivisorDeForma from "../DivisorDeForma/divisor";

interface ModelProps {
  children: React.ReactNode;
  caminhoImagem?: string;
  titulo: string;
  subtitulo: React.ReactNode; // Alterado para aceitar JSX
}

export default function Model({ children, titulo, subtitulo }: ModelProps) {
  return (
    <div>
      <div className="relative w-full h-[250px] flex items-end justify-center bg-[#051f60]">
         <div className="z-10 text-center text-white pb-4">
          <h1 className="lg:text-[40px] text-xl leading-[40px] pb-[5px] Montserrat-Bold drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)] uppercase">
            {titulo}
          </h1>
          {/* Aumenta o subtítulo */}
          <p className="text-[14px] font-bold">{subtitulo}</p>
        </div>
      </div> 
      <DivisorDeForma />
      {children}
    </div>
  );
}
