export default function Navbar() {
  return (
    <header className="site">
      <div className="inner container">
        <img src="/logo.png" alt="Dott.ssa Ornella Amedeo" className="logo" height={48} />
        <nav>
          <a href="#chi-sono">Chi Sono</a>
          <a href="#servizi">Servizi</a>
          <a href="#adr">ADR Europa</a>
          <a href="#pubblicazioni">Pubblicazioni</a>
          <a href="#modulistica">Modulistica</a>
          <a href="#contatti">Contatti</a>
        </nav>
      </div>
    </header>
  );
}
