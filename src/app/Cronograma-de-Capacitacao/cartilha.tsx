"use client";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { GlobalWorkerOptions } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.0.279/pdf.worker.min.js`;


const pdfFiles = [
  { local: "/Pdf/capacitacao1.pdf", link: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Relacao-de-Cursos-para-Servidores-JaboataoPrev-2025.pdf" },
  { local: "/Pdf/capacitacao2.pdf", link: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/03/CRONOGRAMA-DE-CAPACITACAO-2023.pdf" },
  { local: "/Pdf/capacitacao3.pdf", link: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/07/CRONOGRAMA-DE-CURSOS-2022.pdf" },
  { local: "/Pdf/capacitacao4.pdf", link: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/07/CRONOGRAMA-DE-CURSOS-2021.pdf" },
  { local: "/Pdf/capacitacao5.pdf", link: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/03/CAPACITA%C3%87%C3%95ES-2020-1.pdf" },
  { local: "/Pdf/capacitacao6.pdf", link: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/03/REALIZADAS-17-19.pdf" },
];

const Certificacoes = () => {
  return (
    <div className="flex flex-col items-center h-auto space-y-10">
      {pdfFiles.map((pdf, index) => (
        <div key={index} className="mx-auto max-w-6xl bg-white rounded-lg p-5">
          <h2 className="text-2xl text-slate-500 text-center pb-5">
            O documento publicado está em formato PDF. Caso não consiga abrir o
            arquivo, {" "}
            <a
              href={pdf.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              clique aqui para fazer o download do arquivo em PDF.
            </a>
          </h2>

          <div className="flex items-center justify-center w-full max-w-6xl mx-auto h-[600px] border rounded-lg shadow-lg bg-gray-100">
            <Viewer fileUrl={pdf.local} />
          </div>
        </div>
      ))}
    </div>
  );
};

const Certificacao = () => {
  return (
    <div className="flex flex-col py-14">
      <Certificacoes />
    </div>
  );
};

export default Certificacao;
