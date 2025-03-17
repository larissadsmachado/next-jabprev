import React from "react";

interface Credenciamento {
  ano: string;
  tipo: string;
  instituicao: string;
  tipoInstituicao: string;
  dataCredenciamento: string;
  dataValidade: string;
  downloadLink: string;
}


const dados: Credenciamento[] = [
  {
    ano: "2023.2",
    tipo: "Inciso I, do § 2º, do art. 21 da Res CMN nº 4.963/2021",
    instituicao: "BB GESTÃO DE RECURSOS - DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS",
    tipoInstituicao: "ADMINISTRADOR",
    dataCredenciamento: "01/08/2023",
    dataValidade: "01/08/2025",
    downloadLink: "#",
  },
  {
    ano: "2023.2",
    tipo: "-",
    instituicao: "BNY MELLON SERVIÇOS FINANCEIROS DTVM S.A.",
    tipoInstituicao: "ADMINISTRADOR",
    dataCredenciamento: "30/09/2020",
    dataValidade: "30/09/2026",
    downloadLink: "#",
  },
  {
    ano: "2023.2",
    tipo: "Inciso I, do § 2º, do art. 21 da Res CMN nº 4.963/2021",
    instituicao: "INTRAG DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA",
    tipoInstituicao: "ADMINISTRADOR",
    dataCredenciamento: "15/11/2023",
    dataValidade: "15/11/2025",
    downloadLink: "#",
  },
  {
    ano: "2023.2",
    tipo: "Inciso I, do § 2º, do art. 21 da Res CMN nº 4.963/2021",
    instituicao: "CAIXA ECONÔMICA FEDERAL",
    tipoInstituicao: "ADMINISTRADOR",
    dataCredenciamento: "01/08/2023",
    dataValidade: "01/08/2025",
    downloadLink: "#",
  },
  {
    ano: "2021.2",
    tipo: "Inciso I, do § 2º, do art. 21 da Res CMN nº 4.963/2021",
    instituicao: "CAIXA DISTRIBUIDOR DE VALORES MOBILIÁRIOS",
    tipoInstituicao: "DISTRIBUIDOR",
    dataCredenciamento: "07/08/2023",
    dataValidade: "07/08/2025",
    downloadLink: "#",
  },
  {
    ano: "2021.2",
    tipo: "-",
    instituicao: "RJI CTVM LTDA",
    tipoInstituicao: "ADMINISTRADOR",
    dataCredenciamento: "07/08/2023",
    dataValidade: "07/08/2025",
    downloadLink: "#",
  },
  {
    ano: "2021.2",
    tipo: "-",
    instituicao: "BRPP GESTÃO DE PRODUTOS ESTRUTURADOS LTDA",
    tipoInstituicao: "GESTOR",
    dataCredenciamento: "30/09/2021",
    dataValidade: "30/09/2026",
    downloadLink: "#",
  },
  {
    ano: "2023.2",
    tipo: "-",
    instituicao: "GRAPHEN INVESTIMENTOS LTDA",
    tipoInstituicao: "GESTOR",
    dataCredenciamento: "01/08/2023",
    dataValidade: "01/08/2025",
    downloadLink: "#",
  },
  {
    ano: "2023.2",
    tipo: "-",
    instituicao: "FINACAP INVESTIMENTOS LTDA",
    tipoInstituicao: "GESTOR",
    dataCredenciamento: "07/08/2023",
    dataValidade: "07/08/2025",
    downloadLink: "#",
  },
  {
    ano: "2023.2",
    tipo: "-",
    instituicao: "ARRECIFE AGENTE AUTÔNOMO DE INVESTIMENTOS S/S LTDA",
    tipoInstituicao: "DISTRIBUIDOR",
    dataCredenciamento: "07/08/2023",
    dataValidade: "07/08/2025",
    downloadLink: "#",
  },
  {
    ano: "2023.2",
    tipo: "Inciso I, do § 2º, do art. 21 da Res CMN nº 4.963/2021",
    instituicao: "SANTANDER CACEIS BRASIL DTVM",
    tipoInstituicao: "ADMINISTRADOR",
    dataCredenciamento: "09/08/2023",
    dataValidade: "09/08/2025",
    downloadLink: "#",
  },
  {
    ano: "2021.2",
    tipo: "Inciso I, do § 2º, do art. 21 da Res CMN nº 4.963/2021",
    instituicao: "BANCO DO BRASIL S.A.",
    tipoInstituicao: "DISTRIBUIDOR",
    dataCredenciamento: "07/08/2023",
    dataValidade: "07/08/2025",
    downloadLink: "#",
  },
];


const TabelaCredenciamento: React.FC = () => {
  return (
    <div className="overflow-x-auto p-10">
      <table className="w-full border-collapse border border-gray-300 text-sm text-left ">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="border border-gray-300 p-2">ANO</th>
            <th className="border border-gray-300 p-2">TIPO</th>
            <th className="border border-gray-300 p-2">INSTITUIÇÕES CREDENCIADAS</th>
            <th className="border border-gray-300 p-2">TIPO DE INSTITUIÇÃO</th>
            <th className="border border-gray-300 p-2">DATA DO CREDENCIAMENTO</th>
            <th className="border border-gray-300 p-2">DATA DE VALIDADE</th>
            <th className="border border-gray-300 p-2">DOWNLOAD</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index} className="odd:bg-gray-100 even:bg-white">
              <td className="border border-gray-300 p-2">{item.ano}</td>
              <td className="border border-gray-300 p-2">{item.tipo}</td>
              <td className="border border-gray-300 p-2">{item.instituicao}</td>
              <td className="border border-gray-300 p-2">{item.tipoInstituicao}</td>
              <td className="border border-gray-300 p-2">{item.dataCredenciamento}</td>
              <td className="border border-gray-300 p-2">{item.dataValidade}</td>
              <td className="border border-gray-300 p-2">
                <a href={item.downloadLink} className="text-blue-500 hover:underline">
                  TERMO DE CREDENCIAMENTO
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaCredenciamento;
