"use client";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { GlobalWorkerOptions } from 'pdfjs-dist';

// Set the workerSrc globally
GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js`;

const Certificacoes = () => {
  const pdfUrl = "/Pdf/CARTILHA-JABOATAOPREV-NEW.pdf"; // Caminho local

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="flex flex-col items-center h-auto">
      <div className="mx-auto max-w-6xl bg-white rounded-lg">
        <h2 className="text-2xl text-slate-500 text-center pb-10">
          O documento publicado está em formato PDF. Caso não consiga abrir o
          arquivo,{" "}
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            clique aqui para fazer o download do arquivo em PDF.
          </a>
        </h2>
      </div>

      <div className="flex items-center justify-center w-full max-w-6xl mx-auto h-[600px] border rounded-lg shadow-lg bg-gray-100">
        <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
      </div>
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
