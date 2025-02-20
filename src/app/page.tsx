import Banner from "./components/Banner/index";
import Servicos from "./components/Servicos/index";
import Enquete from "./components/Enquete/index"
import FaleConosco from "./components/FaleConosco/inex";
import Noticia from "./components/Noticias/index";
export default function Home() {
  return (
    <main>
      <Banner/>
      <Noticia/>
      <Servicos/>
      {/* <Enquete/> */}
      <FaleConosco/>
    </main>
  );
}
