"use client";

import React from "react";

const Links = () => (
  <div className="h-auto bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc]">

    <div className="mx-auto max-w-6xl p-6 py-20">
      <h1 className="text-2xl font-bold mb-4 uppercase text-blue-950 leading-tight">
        CNPJ: 04.811.561/0001-21
      </h1>

      <ul className="pl-5 text-[#051f60] text-xl pb-20">
        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Relatorio-de-Governanca-Corporativa-2024_Dezembro.2024.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Certidão Negativa de Débitos Trabalhistas
          </a>
        </li>

        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/certidao-fgts.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Certidão de Regularidade do FGTS
          </a>
        </li>

        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/01/3.-Certidao-de-Regularidade-da-Divida-Ativa-da-Uniao-e-do-INSS-venc-14.04.25.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Certidão de Regularidade da Divida Ativa da União e do INSS
          </a>
        </li>

        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/COMPROVANTE-DO-CNPJ.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Consultar CNPJ
          </a>
        </li>

        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/12/5.-Certidao-Negativa-Estadual_Marco.2025.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Certidão Negativa Estadual
          </a>
        </li>

        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/10/6.-Certidao-Negativa-Municipal.OUT_.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Certidão Negativa Municipal
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
