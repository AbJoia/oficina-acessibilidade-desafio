import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { FormHotel } from "../../components/FormHotel";
import { Secao } from "../../components/Secao";
import { FormNewsletter } from "../../components/FormNewsletter";
import { Footer } from "../../components/Footer";
import { Acessibilidade } from "../../components/Acessibilidade";

import pontosTuristicos from "../../assets/pontosTuristicos.json";
import gastronomiaLocal from "../../assets/gastronomiaLocal.json";

export function Home() {
  return (
    <>
      <Acessibilidade />
      <header role="banner" id="banner">
        <Header />
      </header>
      <Banner />
      <FormHotel />
      <main id="main" accessKey="1" tabIndex={0}>
        <Secao
          id="pontos-turisticos"
          titulo="Descubra os pontos turísticos da região."
          descricao="Conheça a história que levou a região ser o que é hoje."
          backgroundColor="var(--backgroud-section-color)"
          dados={pontosTuristicos}
        />
        <Secao
          id="gastronomia"
          titulo="Descubra a gastronomia da região."
          descricao="Sabores tradicionais com influências de imigrantes europeus e da cultura local."
          backgroundColor="var(--backgroud-section-color-variant)"
          dados={gastronomiaLocal}
        />
      </main>
      <FormNewsletter />
      <footer id="footer" accessKey="3" tabIndex={0}>
        <Footer />
      </footer>
    </>
  );
}
