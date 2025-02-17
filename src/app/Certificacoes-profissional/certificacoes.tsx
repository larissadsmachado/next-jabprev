"use client";
import { useState } from "react";

const Certificacoes = () => (
  <div className="flex flex-col items-center h-auto">
    <div className="mx-auto max-w-6xl bg-white rounded-lg">
      <h2 className="text-2xl text-slate-500 text-center pb-10">
        O documento publicado está em formato PDF. Caso não consiga abrir o
        arquivo,{" "}
        <a
          href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/04/CERTIFICACOES-GERAIS-Atualizado.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          clique aqui para fazer o download do arquivo em PDF.
        </a>
      </h2>
    </div>

    <div className="flex items-center justify-center w-full max-w-4xl mx-auto">
      <iframe
        src="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/04/CERTIFICACOES-GERAIS-Atualizado.pdf"
        className="w-full h-[600px] border rounded-lg shadow-lg"
      ></iframe>
    </div>
  </div>
);

const Certificacao = () => {
  return (
    <div className="flex flex-col py-14">
      <Certificacoes />
    </div>
  );
};

export default Certificacao;
