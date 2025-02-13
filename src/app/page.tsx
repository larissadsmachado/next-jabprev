import Banner from "./components/Banner/index";
import Servicos from "./components/Servicos/index";
import Enquete from "./components/Enquete/index"
import FaleConosco from "./components/FaleConosco/inex";

export default function Home() {
  return (
    <main>
      <Banner/>
      <Servicos/>
      <Enquete/>
      <FaleConosco/>
    </main>
  );
}
