"use client";
import { useEffect, useState } from "react";

export default function Navbar(){
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("nav-open", open);
    return () => document.documentElement.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="site" role="banner">
      <div className="inner container">
        <a href="#top" className="brand">
          <img src="/logo.png" alt="Studio Legale Amedeo" className="logo" height="48" />
        </a>

        {/* nav desktop */}
        <nav className="primary-nav" aria-label="Sezioni principali">
          <a href="#chi-sono">Chi Sono</a>
          <a href="#servizi">Servizi</a>
          <a href="#adr">ADR Europa</a>
          <a href="#pubblicazioni">Pubblicazioni</a>
          <a href="#modulistica">Modulistica</a>
          <a href="#contatti">Contatti</a>
        </nav>

        {/* hamburger */}
        <button
          className="nav-btn"
          aria-label="Apri menu"
          aria-controls="mobile-panel"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"} Menu
        </button>
      </div>

      {/* drawer mobile */}
      <div id="mobile-panel" className={`mobile-panel ${open ? "open" : ""}`}>
        <nav className="mobile-nav" onClick={() => setOpen(false)}>
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
