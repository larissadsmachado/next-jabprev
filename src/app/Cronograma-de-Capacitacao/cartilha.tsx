"use client";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { GlobalWorkerOptions } from "pdfjs-dist";

GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.0.279/pdf.worker.min.js`;


const pdfFiles = [
  { local: "/Pdf/Cronograma-de-Capacitacao/capacitacao1.pdf" },
  { local: "/Pdf/Cronograma-de-Capacitacao/capacitacao2.pdf" },
  { local: "/Pdf/Cronograma-de-Capacitacao/capacitacao3.pdf"},
  { local: "/Pdf/Cronograma-de-Capacitacao/capacitacao4.pdf" },
  { local: "/Pdf/Cronograma-de-Capacitacao/capacitacao5.pdf" },
  { local: "/Pdf/Cronograma-de-Capacitacao/capacitacao6.pdf" },
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
              href={pdf.local}
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
