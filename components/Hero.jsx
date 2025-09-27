"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = ["/bg/img1.jpg", "/bg/img2.jpg", "/bg/img3.jpg"];

export default function Hero(){
  const [i, setI] = useState(0);
  const [theme, setTheme] = useState("light");
  const reduceMotion = useRef(false);

  // prefers-reduced-motion
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotion.current = m.matches;
    const onChange = e => (reduceMotion.current = e.matches);
    m.addEventListener?.("change", onChange);
    return () => m.removeEventListener?.("change", onChange);
  }, []);

  // slideshow, pausa quando tab non visibile
  useEffect(() => {
    if (reduceMotion.current) return;
    const tick = () => setI(x => (x + 1) % IMAGES.length);
    let id = setInterval(tick, 7000);
    const onVis = () => { clearInterval(id); if (!document.hidden) id = setInterval(tick, 7000); };
    document.addEventListener("visibilitychange", onVis);
    return () => { clearInterval(id); document.removeEventListener("visibilitychange", onVis); };
  }, []);

  // preload next
  useEffect(() => { const n = new Image(); n.src = IMAGES[(i + 1) % IMAGES.length]; }, [i]);

  // tema persistente (usa .dark su <html>)
  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const t = saved || (prefersDark ? "dark" : "light");
      setTheme(t);
      document.documentElement.classList.toggle("dark", t === "dark");
    } catch {}
  }, []);
  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    try { localStorage.setItem("theme", next); } catch {}
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <header className="relative hero-ctr isolate overflow-hidden" aria-label="Intro Ornella Amedeo">
      {/* background slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.18 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${IMAGES[i]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* aurora + overlay diverse tra temi */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(126,189,255,.28),transparent),radial-gradient(40%_30%_at_18%_10%,rgba(255,221,148,.22),transparent)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/10 dark:from-black/75 dark:via-slate-950/55 dark:to-black/75" />

      {/* toggle tema */}
      <button
        onClick={toggleTheme}
        className="absolute top-5 right-5 z-20 w-11 h-11 rounded-xl flex items-center justify-center
                   bg-white/85 dark:bg-gray-800/80 border border-black/10 dark:border-white/20
                   shadow-xl backdrop-blur-md transition-transform hover:scale-110"
        aria-label="Cambia tema"
        title="Tema chiaro/scuro"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>

      {/* card centrale */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .55, ease: "easeOut" }}
        className="relative z-10 w-full"
      >
        <div className="container">
          <div className="hero-card text-center">
            <img src="/logo.png" alt="Logo Ornella Amedeo" className="mx-auto h-20 md:h-24 w-auto rounded-xl ring-1 ring-black/5 dark:ring-white/20 shadow-xl" />
            <h1 className="hero-title">Ornella Amedeo</h1>
            <p className="hero-sub">
              Servizi professionali di mediazione, consulenza e formazione per clienti privati, professionisti e aziende.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="rounded-full border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/10 px-3 py-1 text-sm">Mediazione</span>
              <span className="rounded-full border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/10 px-3 py-1 text-sm">Consulenza</span>
              <span className="rounded-full border border-black/10 dark:border-white/20 bg-black/5 dark:bg-white/10 px-3 py-1 text-sm">Formazione</span>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a className="btn btn-primary" href="#contatti">Prenota un consulto</a>
              <a className="btn btn-ghost" href="#servizi">Scopri i servizi</a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* hint scroll */}
      <a href="#servizi" aria-label="Vai ai servizi"
         className="scroll-hint absolute bottom-6 left-1/2 -translate-x-1/2 transition-opacity hover:opacity-100">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 16a1 1 0 0 1-.7-.29l-5-5a1 1 0 0 1 1.4-1.42L12 13.59l4.3-4.3a1 1 0 1 1 1.4 1.42l-5 5A1 1 0 0 1 12 16z"/>
        </svg>
      </a>
    </header>
  );
}
