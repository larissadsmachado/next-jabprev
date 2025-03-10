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
        url: "#",
      },

      {
        name: "Março",
        url: "#",
      },

      {
        name: "Maio",
        url: "#",
      },

      {
        name: "Julho ",
        url: "#",
      },

      {
        name: "Setembro ",
        url: "#",
      },

      {
        name: "Novembro",
        url: "#",
      },
    ],
  },

  "2024": {
    title: "2024",
    reports: [
      {
        name: "Janeiro - FEVEREIRO",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/DIPR_JAN-E-FEV_2024.pdf",
      },

      {
        name: "Março - abril",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/DIPR_MAR-E-ABR_2024.pdf",
      },

      {
        name: "Maio - junho",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/DIPR_MAI-E-JUN_2024.pdf",
      },

      {
        name: "Julho - agosto",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/10/DIPR_JUL-E-AGO_2024.pdf",
      },

      {
        name: "Setembro - outubro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/12/DIPR_SET-E-OUT_2024.pdf",
      },

      {
        name: "Novembro - dezembro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/DIPR_20250213.pdf",
      },
    ],
  },

  "2023": {
    title: "2023",
    reports: [
      {
        name: "Janeiro - fevereiro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/DIPR_JAN_FEV_2023.pdf",
      },

      {
        name: "Março - abril",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/DIPR_MAR_ABR_2023.pdf",
      },

      {
        name: "Maio - junho",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/DIPR_MAI_JUN_2023.pdf",
      },

      {
        name: "Julho - agosto",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/11/DIPR_20231127-jul.pdf",
      },

      {
        name: "Setembro - outubro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/11/DIPR_20231127.pdf",
      },

      {
        name: "Novembro - dezembro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/07/DIPR_20240709.pdf",
      },
    ],
  },

  "2022": {
    title: "2022",
    reports: [
      {
        name: "Janeiro - fevereiro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/07/DIPR_20220714.pdf",
      },

      {
        name: "Março - abril",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/07/DIPR_20220714-1.pdf",
      },

      {
        name: "Maio - junho",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/09/DIPR_20220930.pdf",
      },

      {
        name: "Julho - agosto",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/09/DIPR_20220930-1.pdf",
      },

      {
        name: "Setembro - outubro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/DIPR_SET_OUT_2022.pdf",
      },

      {
        name: "Novembro - dezembro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/08/DIPR_NOV_DEZ_2022.pdf",
      },
    ],
  },

  "2021": {
    title: "2021",
    reports: [
      {
        name: "Janeiro - fevereiro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/06/DIPR_JAN-FEV.pdf",
      },

      {
        name: "Março - abril",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/06/DIPR_MAR-ABR.pdf",
      },

      {
        name: "Maio - junho",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/08/DIPR_MAI_JUN_2020.pdf",
      },

      {
        name: "Julho - agosto",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/10/DIPR-JUL-AGO-2020.pdf",
      },

      {
        name: "Setembro - outubro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/02/SET_OUT.pdf",
      },

      {
        name: "Novembro - dezembro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/02/NOV_DEZ.pdf",
      },
    ],
  },

  "2020": {
    title: "2020",
    reports: [
      {
        name: "Janeiro - fevereiro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/DIPR_2020_JAN-FEV.pdf",
      },

      {
        name: "Março - abril",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/MAR-ABR.pdf",
      },

      {
        name: "Maio - junho",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/08/DIPR_MAI_JUN_2020.pdf",
      },

      {
        name: "Julho - agosto",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/10/DIPR-JUL-AGO-2020.pdf",
      },

      {
        name: "Setembro - outubro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/11/DIPR-SET-OUT-2020.pdf",
      },

      {
        name: "Novembro - dezembro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/02/DIPR_NOV-DEZ_2020-1.pdf",
      },
    ],
  },

  "2019": {
    title: "2019",
    reports: [
      {
        name: "Janeiro - fevereiro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/Relat%C3%B3rio-de-dados-DIPR-JAN-FEV.pdf",
      },

      {
        name: "Março - abril",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/07/MAR-ABR-Ass.pdf",
      },

      {
        name: "Maio - junho",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/Relat%C3%B3rio-dados-MAI-JUN.pdf",
      },

      {
        name: "Julho - agosto",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/01/JUL-AGO-DIPR.pdf",
      },

      {
        name: "Setembro - outubro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/01/SET-OUT-DIPR.pdf",
      },

      {
        name: "Novembro - dezembro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/05/DIPR_20200526-NOV-DEZ.pdf",
      },
    ],
  },

  "2018": {
    title: "2018",
    reports: [
      {
        name: "Janeiro - fevereiro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/fevereiro-janeiro-2018.pdf",
      },

      {
        name: "Março - abril",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/abril-mar%C3%A7o-2018.pdf",
      },

      {
        name: "Maio - junho",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/junho-maio-2018.pdf",
      },

      {
        name: "Julho - agosto",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/10/DIPR-JUL-AGO-2020.pdf",
      },

      {
        name: "Setembro - outubro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/agosto-julho-2018.pdf",
      },

      {
        name: "Novembro - dezembro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/dezembro-novembro-2018.pdf",
      },
    ],
  },

  "2017": {
    title: "2017",
    reports: [
      {
        name: "Janeiro - fevereiro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/fevereiro-janeiro-2017.pdf",
      },

      {
        name: "Março - abril",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/abril-mar%C3%A7o-2017.pdf",
      },

      {
        name: "Maio - junho",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/junho-maio-2017.pdf",
      },

      {
        name: "Julho - agosto",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/agosto-julho-2017.pdf",
      },

      {
        name: "Setembro - outubro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/outubro-setembro-2017.pdf",
      },

      {
        name: "Novembro - dezembro",
        url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/08/novembro-dezembro-2017.pdf",
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
