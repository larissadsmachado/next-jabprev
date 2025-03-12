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
  "2024": { title: "2024", url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/02/DPIN_2021_CADPREV.pdf" },
  "2023": { title: "2023", url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/02/DPIN_2021_CADPREV.pdf" },
  "2022": { title: "2022", url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/02/DPIN_2021_CADPREV.pdf" },
  "2021": { title: "2021", url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/02/DPIN_2021_CADPREV.pdf" },
  "2020": { title: "2020", url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/01/DPIN_2020.pdf" },
  "2019": { title: "2019", url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/12/updated_DECLARACAO_VERACIDADE_DPIN_2019.pdf" },
  "2018": { title: "2018", url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2017/12/dpin-2018.pdf" },
};

const FinancialReports: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc] py-20 flex flex-wrap justify-center gap-10">

      {Object.keys(reportsData)
        .sort((a, b) => Number(b) - Number(a))
        .map((year) => {
          const { title, url } = reportsData[year];
          return (
            <div key={year} className="text-center">
              <h2 className="text-5xl font-bold text-blue-900 Montserrat-Bold">{title}</h2>
              <hr className="border-t-2 border-blue-900 w-16 my-2 mx-auto" />
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:underline text-2xl Montserrat-Medium"
              >
                DPIN – {title}
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default FinancialReports;
