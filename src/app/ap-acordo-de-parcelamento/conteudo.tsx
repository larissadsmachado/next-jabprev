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
  "2017": { title: "2017", url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/02/ACORDO-CADPREV-01757-2017.pdf" },
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
              <hr className="border-t-2 border-blue-900 w-20 my-2 mx-auto" />
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 hover:underline text-2xl Montserrat-Medium"
              >
                ACORDO CADPREV 01757/2017
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default FinancialReports;
