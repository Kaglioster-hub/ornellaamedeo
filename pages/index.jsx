import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Servizi from "../components/Servizi";
import AdrEuropa from "../components/AdrEuropa";
import Pubblicazioni from "../components/Pubblicazioni";
import Modulistica from "../components/Modulistica";
import Contatti from "../components/Contatti";
import Footer from "../components/Footer";

export default function Home(){
  return (
    <>
      <Navbar />
      <Hero />
      <main className="container">
        <section id="servizi" className="section"><Servizi /></section>
        <section id="adr" className="band band--dark"><AdrEuropa /></section>
        <section id="pubblicazioni" className="band band--light"><Pubblicazioni /></section>
        <section id="modulistica" className="section"><Modulistica /></section>
        <section id="contatti" className="section"><Contatti /></section>
      </main>
      <Footer />
    </>
  );
}
