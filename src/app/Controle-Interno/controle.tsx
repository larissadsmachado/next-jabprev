"use client";

import React from "react";

const Links = () => (
  <div className="h-auto bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc]">

    <div className="mx-auto max-w-6xl p-6 py-20">
      <h1 className="text-5xl font-bold mb-4 uppercase text-blue-900 leading-tight">
        2024
      </h1>

      <ul className="list-disc pl-5 text-[#051f60] text-xl pb-20">
        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/09/Relatorio-de-Controle-Interno-1o-Trimestre-2024.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Relatório Mensal Controle – 1º Trimestre
          </a>
        </li>

        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/09/Relatorio-de-Controle-Interno-2o-Trimestre-2024-2.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Relatório Mensal Controle – 2º Trimestre
          </a>
        </li>

        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/12/Relatorio-de-Controle-Interno-3o-Trimestre-2024.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Relatório Mensal Controle – 3º Trimestre
          </a>
        </li>
      </ul>

      <h1 className="text-5xl font-bold mb-4 uppercase text-blue-900 leading-tight">
        2023
      </h1>

      <ul className="list-disc pl-5 text-[#051f60] text-xl pb-20">
        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/09/Relatorio-Mensal-Controle-Marco-2023-1.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Relatório do Controle Interno – 1° Trimestre
          </a>
        </li>

        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/09/Relatorio-Mensal-Controle-Junho-2023.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Relatório do Controle Interno – 2° Trimestre
          </a>
        </li>

        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/12/Relatorio-Mensal-Controle-Setembro-2023.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Relatório do Controle Interno – 3° Trimestre
          </a>
        </li>

        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/01/Relatorio-Trimestral-Controle-Dezembro-2023.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Relatório do Controle Interno – 4° Trimestre
          </a>
        </li>
      </ul>

      <h1 className="text-5xl font-bold mb-4 uppercase text-blue-900 leading-tight">
        2022
      </h1>

      <ul className="list-disc pl-5 text-[#051f60] text-xl pb-20">
        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/09/Relatorio-Mensal-Controle-Marco-de-2022-2.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Relatório Mensal Controle – 1º Trimestre
          </a>
        </li>

        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/11/Relatorio-Trimestral-Controle-Junho-de-2022.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Relatório Mensal Controle – 2º Trimestre
          </a>
        </li>

        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/03/Relatorio-Mensal-Controle-Setembro-de-2022-Word.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Relatório Mensal Controle – 3º Trimestre
          </a>
        </li>

        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/03/Relatorio-Mensal-Controle-Dezembro-de-2022-Word.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Relatório Mensal Controle – 4º Trimestre
          </a>
        </li>

      </ul> 

      <h1 className="text-5xl font-bold mb-4 uppercase text-blue-900 leading-tight">
        2021
      </h1>

      <ul className="list-disc pl-5 text-[#051f60] text-xl pb-20">
        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/09/Relatorio-Mensal-Controle-Dezembro-de-2021.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Relatório de Controle Interno
          </a>
        </li> 
      </ul> 
    </div>
  </div>
);

const Legislacao = () => {
  return (
    <div className="flex flex-col">
      <Links />
    </div>
  );
};

export default Legislacao;
