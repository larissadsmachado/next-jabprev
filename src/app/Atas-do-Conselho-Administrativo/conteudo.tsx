"use client";

import React from "react";

const data: Record<string, { date: string; url: string }[]> = {
  "2025": [
    {
      date: "30 de Janeiro de 2025",
      url: "/Pdf/atas/deliberativo/01-ATA-30.01.2025-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "20 de Fevereiro de 2025",
      url: "/Pdf/atas/deliberativo/02-ATA-CONSELHO-DELIBERATIVO-20.02.2025.pdf",
    },
    {
      date: "25 de Fevereiro de 2025 (Reunição Extraordinária)",
      url: "/Pdf/atas/deliberativo/03-ATA-25.02.2025-CONJUNTA-CONSELHO-FISCAL-E-DELIBERATIVO-ATUARIO.pdf",
    },
  ],
  "2024": [
    {
      date: "25 de Janeiro de 2024",
      url: "/Pdf/atas/deliberativo/01-ATA-25.01.2024-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "22 de Julho 2024",
      url: "/Pdf/atas/deliberativo/07_-_ATA_22.07.2024_-_CONSELHO_DELIBERATIVO_assinado_assinado_assinado_assinado-assinado_assinado_assinado.pdf",
    },
    {
      date: "19 de Fevereiro de 2024",
      url: "/Pdf/atas/deliberativo/02-ATA-19.02.2024-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "15 de Agosto de 2024",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/09/08-ATA-15.08.2024-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "25 de Março de 2024",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/09/03-ATA-25.03.2024-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "19 de Setembro de 2024",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/12/Conselho-Deliberativo-09-ATA-19.09.2024-1.pdf",
    },
    {
      date: "19 de Abril de 2024",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/09/04-ATA-19.04.2024-CONJUNTA-CONSELHO-FISCAL-E-DELIBERATIVO.pdf",
    },
    {
      date: "17 de Outubro de 2024",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/12/10-ATA-17.10.2024-CONJUNTA-CONSELHO-FISCAL-E-DELIBERATIVO.pdf",
    },
    {
      date: "16 de Maio de 2024",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/12/05-ATA-16.05.2024-CONJUNTA-CONSELHO-FISCAL-E-DELIBERATIVO.pdf",
    },
    {
      date: "21 de Novembro de 2024",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/12/11-ATA-21.11.2024-CONJUNTA-CONSELHO-FISCAL-E-DELIBERATIVO.pdf",
    },
    {
      date: "20 de Junho de 2024",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/12/06-ATA-20.06.2024-CONJUNTA-CONSELHO-FISCAL-E-DELIBERATIVO.pdf",
    },
    {
      date: "21 de Dezembro de 2024",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/01/12-ATA-21.12.2024-CONSELHO-DELIBERATIVO.pdf",
    },
  ],
  "2023": [
    {
      date: "30 de Janeiro de 2023",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/03/ATA_30-01-2023_assinado1.pdf",
    },
    {
      date: "28 de Julho de 2023",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/10/07-ATA-28.07.2023-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "28 de Fevereiro de 2023",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/03/ATA_28-02-2023_assinado1.pdf",
    },
    {
      date: "10 de Agosto de 2023",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/10/06-ATA-CONJUNTA-CONSELHO-FISCAL-E-DELIBERATIVO-10.08.2023.pdf",
    },
    {
      date: "16 de Março de 2023",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/06/03.ATA_16-03-2023-ass.pdf",
    },
    {
      date: "21 de Setembro de 2023",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/10/09-ATA-21.09.2023-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "28 de Abril de 2023",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/06/04.ATA_28-04-2023-ass.pdf",
    },
    {
      date: "19 de Outubro de 2023",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/11/10-ATA-19.10.2023-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "18 de Maio de 2023",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/09/05-ATA-18.05.2023-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "14 de Novembro de 2023",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/02/11-ATA-14.11.2023-CONJUNTA-CONSELHO-FISCAL-E-DELIBERATIVO.pdf",
    },
    {
      date: "28 de Junho de 2023",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/09/06-ATA-28.06.2023-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "21 de Dezembro de 2023",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/02/12-ATA-21.12.2023-CONSELHO-DELIBERATIVO.pdf",
    },
  ],
  "2022": [
    {
      date: "17 de Janeiro de 2022",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/02/01-17-de-janeiro-2022.pdf",
    },
    {
      date: "25 de Agosto de 2022",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/01/09-ATA-25.08.2022-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "17 de Fevereiro de 2022",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/08/02-ATA-17.02.2022-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "15 de Setembro de 2022",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/01/10-ATA-15.09.2022-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "17 de Março de 2022",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/08/03-ATA-17.03.2022-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "20 de Setembro de 2022 (Extraordinária)",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/01/11-ATA-20.09.2022-CONSELHO-DELIBERATIVO-EXTRAORDINARIA.pdf",
    },
    {
      date: "28 de Abril de 2022",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/08/04-ATA-28.04.2022-CONSELHO-DELIBERATIVO-E-FISCAL.pdf",
    },
    {
      date: "20 de Outubro de 2022",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/01/12-ATA-20.10.2022-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "19 de Maio de 2022",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/08/05-ATA-19.05.2022-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "17 de Novembro de 2022",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/01/13-ATA-17.11.2022-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "28 de Junho de 2022",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/08/07-ATA-28.06.2022-CONSELHO-DELIBERATIVO.pdf",
    },
    {
      date: "20 de Dezembro de 2022 (Reunião conjunta)",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/01/14-ATA-20.12.2022-CONSELHO-DELIBERATIVO-FISCAL-E-COMITE-DE-INVEST.pdf",
    },
    {
      date: "21 de Julho 2022",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/08/08-ATA-21.07.2022-CONSELHO-DELIBERATIVO.pdf",
    },
  ], 
  "2021": [
    {
      date: "22 de Abril de 2021",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/02/01-22-DE-ABRIL-2021.pdf",
    },
    {
      date: "25 de Maio de 2021",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/02/02-25-de-maio-2021.pdf",
    },
    {
      date: "09 de Junho de 2021",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/02/03-09-de-junho-de-2021.pdf",
    },
    {
      date: "03 de Agosto de 2021",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/02/04-03-de-agosto-de-2021.pdf",
    },
    {
      date: "19 de Agosto de 2021",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/02/05-19-de-agosto-de-2021.pdf",
    },
    {
      date: "31 de Agosto de 2021",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/02/06-31-de-agosto-de-2021.pdf",
    },
    {
      date: "21 de Setembro de 2021",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/02/07-21-de-setembro-de-2021.pdf",
    },
    {
      date: "16 de Dezembro de 2021",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/02/08-16-de-dezembro-2021.pdf",
    },
  ],
  "2020": [
    {
      date: "10 de Setembro de 2020",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/12/ATA-10.09.2020-CONSELHO-ADM.pdf",
    },
    {
      date: "17 de Setembro de 2020",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/08/ATA-17.09.2020-CONSELHO-ADM.pdf",
    },
    {
      date: "16 de Dezembro 2020 (Política de Investimentos)",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/08/ATA-16.12.2020-CONSELHO-ADM.pdf",
    },
  ],
  "2019": [
    {
      date: "14 de Maio de 2019",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/05/ATA-14.05.2019-ADM.pdf",
    },
    {
      date: "04 de Junho de 2019",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/12/02-ATA-ADM-04-06-19.pdf",
    },
    {
      date: "02 de Julho de 2019",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/12/03-ATA-ADM-02-07-19.pdf",
    },
    {
      date: "08 de Agosto de 2019",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/12/04-ATA-ADM-08-08-19.pdf",
    },
    {
      date: "23 de Outubro de 2019",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/12/05-ATA-ADM-23-10-19.pdf",
    },
    {
      date: "14 de Novembro de 2019",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/12/06-ATA-ADM-14-11-19.pdf",
    },
    {
      date: "04 de Dezembro de 2019",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/12/07-ATA-ADM-04-12-19.pdf",
    },
  ],
  "2018": [
    {
      date: "26 de Janeiro 2018",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/02/ATA-26-01-2018-ADM-E-FISC.pdf",
    },
    {
      date: "27 de Abril de 2018",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/05/ATA-27-04-2018-ADM.pdf",
    },
    {
      date: "10 de maio de 2018 (Ratificação Política de Investimento)",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/05/ATA-ADM-10-05-2018.pdf",
    },
    {
      date: "27 de julho de 2018",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/08/ATA-27-07-2018-ADM.pdf",
    },
    {
      date: "26 de Setembro de 2018",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/10/ATA-26.09.2018-ADM-N-merged.pdf",
    },
    {
      date: "18 de Outubro de 2018 (Política de Investimento 2019)",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2019/03/CONSELHO-DE-ADM-ATA-DA-REUNIAO-18_10_2018-p%C3%A1ginas-1-7.pdf",
    },
    {
      date: "28 de Novembro de 2018",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/12/SCAN_20181203_091948304.pdf",
    },
  ],
  "2017": [
    {
      date: "Atas de 2017 – Conselho de Administração (Aprovação Política de Investimento 2018)",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2018/01/ATA-REUNI%C3%83O-15-12-2017-APROVA%C3%87%C3%83O-POLITICA.pdf",
    },
    {
      date: "Atas de 2017 – Conselho de Administração e Fiscal",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/ATAS-2017.pdf",
    },
  ],
  "2016": [
    {
      date: "Atas de 2016 – Conselho de Administração e Fiscal",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/06/Item-m-Ata-reuni%C3%A3o-conselho-2016.pdf",
    },
  ],
  "2015": [
    {
      date: "Atas de 2015 – Conselho de Administração e Fiscal",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/01/merged.pdf",
    },
  ],
  "2014": [
    {
      date: "Atas de 2014 – Conselho de Administração e Fiscal",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/01/Atas-de-2014-Conselho-de-Administracao-e-Fiscal.pdf",
    },
  ],
  "2013": [
    {
      date: "Atas de 2013",
      url: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2016/01/Atas-de-2013-Conselho-de-Administracao.pdf",
    },
  ],
};

const Links = () => (
  <div className="h-auto bg-gradient-to-b from-[#ffffff] via-[#dcecff] to-[#cbe1fc]">
    <div className="mx-auto max-w-6xl p-6 py-20">
      {Object.entries(data)
        .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA)) // Ordena os anos em ordem decrescente
        .map(([year, entries]) => (
          <div key={year}>
            <h1 className="text-5xl font-bold mb-4 uppercase text-blue-900 leading-tight">
              {year}
            </h1>
            <ul className="list-disc pl-5 text-[#051f60] text-xl pb-20 grid grid-cols-2">
              {entries.map((entry, idx) => (
                <li key={idx} className="py-2">
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 hover:underline"
                  >
                    {entry.date}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  </div>
);


const Legislacao = () => (
  <div className="flex flex-col">
    <Links />
  </div>
);

export default Legislacao;
