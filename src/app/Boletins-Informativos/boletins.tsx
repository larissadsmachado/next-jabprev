"use client";

import React from "react";

const Links = () => (
  <div className="h-auto bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc]">

    <div className="mx-auto max-w-6xl p-6 py-20">
      <h1 className="text-5xl font-bold mb-4 uppercase text-blue-900 leading-tight">
        2025
      </h1>

      <ul className="list-disc pl-5 text-[#122162] text-xl pb-20">
        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Informativo-no-002-2025-PROVA-DE-VIDA-1.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Informativo nº 02.2025 – Prova de Vida
          </a>
        </li>

        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Informativo-no-01.2025-Pensao-por-morte-1.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Informativo nº 01.2025 – Pensão por Morte
          </a>
        </li>
      </ul>

      <h1 className="text-5xl font-bold mb-4 uppercase text-blue-900 leading-tight">
        2024
      </h1>

      <ul className="list-disc pl-5 text-[#122162] text-xl pb-20">
        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/Boletim-Informativo-no-04.2024-Aposentadoria-Especial-de-Magisterio-1.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Boletim Informativo nº 04.2024 – Aposentadoria Especial de
            Magistério
          </a>
        </li>

        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/04/Boletim-Informativo-no-03.2024-Emissao-de-CTC.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Boletim Informativo nº 03.2024 – Emissão de CTC
          </a>
        </li>

        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/03/Boletim-Informativo-no-02.2024-Documentos-Para-pensao.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Boletim Informativo nº 02.2024 – Documentos Para pensão
          </a>
        </li>

        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/03/Boletim-Informativo-no-01.2024-Documentos-Para-Aposentadoria.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Boletim Informativo nº 01.2024 – Documentos Para Aposentadoria
          </a>
        </li>
      </ul>

      <h1 className="text-5xl font-bold mb-4 uppercase text-blue-900 leading-tight">
        2022
      </h1>

      <ul className="list-disc pl-5 text-[#122162] text-xl pb-20">
        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/08/Boletim-previdenciario-03-22-CTC.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Boletim n° 03 – Apresentação de CTC na instrução do processo de aposentadoria
          </a>
        </li>

        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/08/Boletim-previdenciario-Investimentos2022.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Boletim n° 02 – Nova norma de investimentos
          </a>
        </li>

        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/Boletim%20previdenci%C3%A1rio%20-%2001-22%20-%20censo.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Boletim n° 01- Censo previdenciário
          </a>
        </li>

      </ul> 

      <h1 className="text-5xl font-bold mb-4 uppercase text-blue-900 leading-tight">
        2022
      </h1>

      <ul className="list-disc pl-5 text-[#122162] text-xl pb-20">
        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/01/Boletim-previdenciario-01-2021-responsabilidades-1.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Boletim n° 02 – Taxa de juros parâmetro (Avaliações atuariais)
          </a>
        </li>

        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/01/Boletim-previdenciario-01-2021-responsabilidades-1.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Boletim n° 01 – Requisitos mínimos exigidos para gestores do RPPS-JG
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
