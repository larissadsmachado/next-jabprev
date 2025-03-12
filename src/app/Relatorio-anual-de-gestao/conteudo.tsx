"use client";

const Links = () => (
  <div className="h-auto bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc]">

    <div className="mx-auto max-w-6xl p-6 py-20">
      <h1 className="text-5xl font-bold mb-4 uppercase text-blue-900 leading-tight">
        2024
      </h1>

      <ul className="list-disc pl-5 text-[#051f60] text-xl pb-20">
        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Relatorio-de-Governanca-Corporativa-2024_Dezembro.2024.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
            Relatório de Governança Corporativa
          </a>
        </li>
      </ul>

      <h1 className="text-5xl font-bold mb-4 uppercase text-blue-900 leading-tight">
        2023
      </h1>

      <ul className="list-disc pl-5 text-[#051f60] text-xl pb-20 grid grid-cols-2">
        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/02/Relatorio-de-Governanca-Corporativa-2023_atualizada.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
           Relatório de Governança Corporativa
          </a>
        </li>

      </ul>


      <h1 className="text-5xl font-bold mb-4 uppercase text-blue-900 leading-tight">
        2022
      </h1>

      <ul className="list-disc pl-5 text-[#051f60] text-xl pb-20 grid grid-cols-2">
        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/05/Relatorio-de-Governanca-Corporativa-2022-18.04.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
           Relatório de Governança Corporativa
          </a>
        </li>

      </ul>


      <h1 className="text-5xl font-bold mb-4 uppercase text-blue-900 leading-tight">
        2021
      </h1>

      <ul className="list-disc pl-5 text-[#051f60] text-xl pb-20 grid grid-cols-2">
        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/02/Relatorio-Anual-Gestao-2021.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
          Relatório anual de gestão
          </a>
        </li>

      </ul>


      <h1 className="text-5xl font-bold mb-4 uppercase text-blue-900 leading-tight">
        2020
      </h1>

      <ul className="list-disc pl-5 text-[#051f60] text-xl pb-20 grid grid-cols-2">
        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/06/Relatorio-Anual-Gestao-2020.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
          Relatório anual de gestão
          </a>
        </li>

      </ul>



      <h1 className="text-5xl font-bold mb-4 uppercase text-blue-900 leading-tight">
        2019
      </h1>

      <ul className="list-disc pl-5 text-[#051f60] text-xl pb-20 grid grid-cols-2">
        <li className="py-2">
          <a
            href="https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/06/Relatorio-Anual-Gestao-2019.pdf"
            target="_blank"
            className="text-blue-800 hover:underline"
          >
           Relatório anual de gestão
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
