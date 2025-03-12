import React from "react";

interface Report {
  name: string;
  url: string;
}

interface ReportsByYear {
  [year: string]: {
    title: string;
    url: string;
  };
}

const reportsData: ReportsByYear = {
  "2025": { title: "2025", url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/CRP-2025_30.07.25.pdf" },
};

const FinancialReports: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc] pb-20 flex flex-wrap justify-center gap-10 py-20">

      {Object.keys(reportsData)
        .sort((a, b) => Number(b) - Number(a))
        .map((year) => {
          const { title, url } = reportsData[year];
          return (
            <div key={year} className="text-center">
              <h2 className="text-5xl font-bold text-blue-900 Montserrat-Bold">{title}</h2>
              <hr className="border-t-2 border-blue-900 w-20 my-2 mx-auto" />
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:underline text-2xl Montserrat-Medium"
              >
                CRP – Certificado de Regularidade Previdenciária 
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default FinancialReports;
