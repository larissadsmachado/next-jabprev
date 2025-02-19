import Cartilha from "./cartilha";
import Model from "../components/model-page/index";
import Link from "next/link";

export const metadata = {
  title: "Cartilha Previdenciária - JaboatãoPrev",
};

export default function config() {
  return (
    <div>
      <Model
        caminhoImagem={"/images/"}
        titulo={"Cartilha Previdenciária"}
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
            Cartilha Previdenciária
            </span>
          </span>
        }
      >
        <Cartilha />
      </Model>
    </div>
  );
}
