import Certificacoes from "./certificacoes";
import Model from "../components/model-page/index";
import Link from "next/link";

export const metadata = {
  title: "Certificação Profissional - JaboatãoPrev",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"Certificação Profissional"}
        subtitulo={
          <span>
            <Link
              href="../"
              className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all"
            >
              INÍCIO
            </Link>
            &nbsp;»{" "}
            <span className="brightness-125">
            Certificação Profissional
            </span>
          </span>
        }
      >
        <Certificacoes />
      </Model>
    </div>
  );
}
