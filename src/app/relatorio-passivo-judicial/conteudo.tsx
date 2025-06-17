"use client";
import React from "react";

interface ProcessoData {
  processo: string;
  juizo: string;
  assunto: string;
}

const processos: ProcessoData[] = [
  {
    processo: "0029010-16.2024.8.17.2810",
    juizo: "2ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "DESCONTOS PREVIDENCIÁRIOS",
  },
  {
    processo: "0009958-34.2024.8.17.2810",
    juizo: "2ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "PENSÃO POR MORTE",
  },
  {
    processo: "0011415-43.2020.8.17.2810",
    juizo: "2ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "TERÇO DE FÉRIAS",
  },
  {
    processo: "0031571-13.2024.8.17.2810",
    juizo: "2ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "PENSÃO POR MORTE",
  },
  {
    processo: "0031779-94.2024.8.17.2810",
    juizo: "1ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "LICENÇA PRÊMIO",
  },
  {
    processo: "0027683-36.2024.8.17.2810",
    juizo: "2ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "PENSÃO POR MORTE",
  },
  {
    processo: "0031042-91.2024.8.17.2810",
    juizo: "1ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "LICENÇA PRÊMIO",
  },
  {
    processo: "0000589-79.2025.8.17.2810",
    juizo: "1ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "LICENÇA PRÊMIO",
  },
  {
    processo: "0005845-03.2025.8.17.2810",
    juizo: "2ª VARA DA FAZENDA PÚBLICA DA COMARCA DE JABOATÃO DOS GUARARAPES",
    assunto: "MANDADO DE SEGURANÇA",
  },
];

const JudicialReportTable: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-center mb-6 text-[#003B73]">
        RELATÓRIO DO PASSIVO JUDICIAL DO JABOATÃOPREV
      </h2>

      <div className="overflow-x-auto max-w-7xl mx-auto">
        <table className="min-w-full border border-gray-400">
          <thead className="bg-[#3498db] text-white text-sm uppercase">
            <tr>
              <th className="border border-gray-400 px-4 py-2">Processo</th>
              <th className="border border-gray-400 px-4 py-2">Juízo</th>
              <th className="border border-gray-400 px-4 py-2">Assunto</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {processos.map((item, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="border border-gray-400 px-4 py-2">{item.processo}</td>
                <td className="border border-gray-400 px-4 py-2">{item.juizo}</td>
                <td className="border border-gray-400 px-4 py-2">{item.assunto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JudicialReportTable;
