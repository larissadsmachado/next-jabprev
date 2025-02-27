"use client";

import React from "react";

const planos = [
  {
    ano: 2025,
    link: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Plano-de-acao-2025-edit_site.pdf",
  },
  {
    ano: 2024,
    link: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/06/Plano-de-Acao-JaboataoPrev-2024_Editado.pdf",
  },
  {
    ano: 2023,
    link: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/09/Plano-de-Acao-JaboataoPrev-2023.pdf",
  },
  {
    ano: 2022,
    link: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/10/Plano-de-Acao-2022.pdf",
  },
  {
    ano: 2021,
    link: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/10/Plano-de-acao-2021.pdf ",
  },
];

const PlanosAcao: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#00BDFF] to-[#008C32] text-white">
      <div className="relative w-full">
        <svg
          width="100%"
          viewBox="0 0 2000 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.33"
            d="M946 62.22C538.2 152.254 419.8 27.5523 305.4 62.22C132 115.037 0 54.4708 0 54.4708V-6.40161H2000V54.4708C2000 54.4708 1875.8 81.0833 1810.2 84.3462C1744.6 87.711 1684.6 71.8046 1658.6 61.8122C1612 44.1724 1490.6 2.46924 1389.8 -1.60931C1289 -5.68786 984.8 53.757 946 62.22Z"
            fill="#051f60"
          />
          <path
            opacity="0.66"
            d="M1468 62.22C1377 62.22 1313.6 38.5644 1209.8 22.3522C1152.6 13.4813 909.2 12.0538 701.8 62.22C494.4 112.386 518.4 27.1445 403.4 62.22C231.4 114.222 0 34.18 0 34.18V-6.40161H2000V30.8152C2000 30.8152 1943.6 11.9519 1815.8 11.9519C1620.4 12.0538 1551.4 62.22 1468 62.22Z"
            fill="#051f60"
          />
          <path
            d="M1532.2 23.0659C1132.2 -35.5633 1000.2 89.8522 742 42.9489C484 -4.56626 484 -0.895566 369.6 14.6029C256 30.1014 264.6 39.3801 179.8 47.1294C57.2 58.5493 0 -6.40161 0 -6.40161H2000C2000 -6.40161 1980.2 35.3016 1832.8 42.643C1685.4 49.9844 1659.2 41.5214 1532.2 23.0659Z"
            fill="#051f60"
          />
        </svg>
      </div>

      <div className="text-center px-4 max-w-4xl py-32">
        <h2 className="text-xl md:text-2xl font-light mb-10 uppercase">
          Os documentos publicados estão em formato PDF. Clique nos botões
          abaixo para visualizar os arquivos em PDF.
        </h2>
        <div className="w-full max-w-lg space-y-4 mx-auto">
          {planos.map((plano) => (
            <a
              key={plano.ano}
              href={plano.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-900 border border-transparent hover:bg-[#3062B3] hover:border-2 hover:border-yellow-500 hover:text-yellow-500 transition-colors text-center py-3 rounded-lg shadow-md text-lg font-semibold"
            >
              PLANO DE AÇÃO {plano.ano}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanosAcao;
