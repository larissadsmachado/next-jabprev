"use client";
import React from "react";

interface Report {
  name: string;
  url: string;
}

interface ReportsByYear {
  [year: string]: {
    title: string;
    reports: Report[];
  };
}

const reportsData: ReportsByYear = {
  "2025": {
    title: "2025",
    reports: [
      {
        name: "Janeiro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Jaboatao-dos-Guararapes-PE-provisoes-matematica_11_2024-JANEIRO_2025.pdf",
      },

      {
        name: "Fevereiro",
        url: "#",
      },

      {
        name: "Março",
        url: "#",
      },

      {
        name: "Abril",
        url: "#",
      },

      {
        name: "Maio",
        url: "#",
      },

      {
        name: "Junho",
        url: "#",
      },

      {
        name: "Julho ",
        url: "#",
      },

      {
        name: "Agosto",
        url: "#",
      },

      {
        name: "Setembro ",
        url: "#",
      },

      {
        name: "Outubro",
        url: "#",
      },

      {
        name: "Novembro",
        url: "#",
      },

      {
        name: "Dezembro",
        url: "#",
      },
    ],
  },

  "2024": {
    title: "2024",
    reports: [
      {
        name: "Janeiro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/01-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Fevereiro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/02-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Março",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/03-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Abril",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/04-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Maio",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/05-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Junho",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/08/Jaboatao-dos-Guararapes-PE-provisoes-matematica_06_2024.pdf",
      },

      {
        name: "Julho ",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/08/Jaboatao-dos-Guararapes-PE-provisoes-matematica_07_2024.pdf",
      },

      {
        name: "Agosto",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/09/08-provisoes-matematica.pdf",
      },

      {
        name: "Setembro ",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/10/09-PROVISAO-MATEMATICA-Set.24.pdf",
      },

      {
        name: "Outubro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/11/10-PROVISAO-MATEMATICA-Out.24.pdf",
      },

      {
        name: "Novembro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/12/11-NOVEMBRO-DESPESAS-ADM-2024.pdf",
      },

      {
        name: "Dezembro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/12-PROVISAO-MATEMATICA.pdf",
      },
    ],
  },

  "2023": {
    title: "2023",
    reports: [
      {
        name: "Janeiro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/04/01-JANEIRO-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Fevereiro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/04/02-FEVEREIRO-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Março",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/04/03-MARCO-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Abril",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/07/04-ABRIL-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Maio",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/11/05-AGOSTO-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Junho",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/11/06-JUNHO-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Julho ",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/11/07-AGOSTO-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Agosto",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/11/08-AGOSTO-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Setembro ",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/11/09-AGOSTO-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Outubro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/11/10-AGOSTO-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Novembro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/02/11-NOVEMBRO-PROVISAO-MATEMATICA.pdf",
      },

      {
        name: "Dezembro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/12-DEZEMBRO-PROVISAO-MATEMATICA.pdf",
      },
    ],
  },

  "2022": {
    title: "2022",
    reports: [
      {
        name: "Janeiro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/10/01-Provisoes-Matematicas.pdf",
      },

      {
        name: "Fevereiro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/10/02-Provisoes-Matematicas.pdf",
      },

      {
        name: "Março",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/10/03-Provisoes-Matematicas.pdf",
      },

      {
        name: "Abril",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/10/04-Provisoes-Matematicas.pdf",
      },

      {
        name: "Maio",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/10/05-Provisoes-Matematicas.pdf",
      },

      {
        name: "Junho",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/10/06-Provisoes-Matematicas.pdf",
      },

      {
        name: "Julho ",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/10/07-Provisoes-Matematicas.pdf",
      },

      {
        name: "Agosto",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/10/08-Provisoes-Matematicas.pdf",
      },

      {
        name: "Setembro ",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/10/09-Provisoes-Matematicas.pdf",
      },

      {
        name: "Outubro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/02/10-Provisoes-Matematicas.pdf",
      },

      {
        name: "Novembro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/03/CONSOLIDADO_JABOATAODOSGUARARAPESPE_PROVISAOMATEMATICA_11_2022.pdf",
      },

      {
        name: "Dezembro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/02/12-Provisoes-Matematicas.pdf",
      },
    ],
  },
};

const FinancialReports: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#dcecff] to-[#fef9e0] min-h-screen pb-10">
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

      {Object.keys(reportsData)
        .sort((a, b) => Number(b) - Number(a))
        .map((year) => {
          const { title, reports } = reportsData[year];
          return (
            <div key={year} className="max-w-5xl mx-auto px-4 uppercase">
              <h2 className="text-5xl font-bold text-blue-900 mt-14">
                {title}
              </h2>
              <hr className="border-t-2 border-blue-900 w-16 mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {reports.map((report, index) => (
                  <a
                    key={`${year}-${index}`}
                    href={report.url}
                    target={report.url === "#" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className={`text-xl flex justify-between p-2 rounded-lg transition ${
                      report.url === "#"
                        ? "text-gray-500 cursor-default pointer-events-none"
                        : "text-[#051f60] hover:underline"
                    }`}
                  >
                    <span>{report.name}</span>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default FinancialReports;
