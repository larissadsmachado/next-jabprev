import Acessibilidade from "./requerimento";
import Model from "../../components/model-page/";
import Link from "next/link";

export const metadata = {
  title: "Informações de Acessibilidade - Prefeitura do Jaboatão dos Guararapes",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"INFORMAÇÕES DE ACESSIBILIDADE"}
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
              INFORMAÇÕES DE ACESSIBILIDADE
            </span>
          </span>
        }
      >
        <Acessibilidade />
      </Model>
    </div>
  );
}
