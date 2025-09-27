export default function Modulistica() {
  const to = "segreteria.studioamedeo@gmail.com";
  const subject = encodeURIComponent("Richiesta modulistica");
  const body = encodeURIComponent(
    "Buongiorno,\n\navrei bisogno della modulistica relativa a ________.\n\nNome e cognome:\nTelefono:\n\nGrazie."
  );

  const hrefGmail      = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
  const hrefOutlookWeb = `https://outlook.live.com/owa/?path=/mail/action/compose&to=${to}&subject=${subject}&body=${body}`;
  const hrefMailto     = `mailto:${to}?subject=${subject}&body=${body}`;

  return (
    <section className="mod-section">
      <div className="card surface surface--xl text-center">
        <h2 className="section-title">Modulistica</h2>

        <p className="k-lead">
          Invia una richiesta: ti risponderemo con i moduli corretti.
        </p>
        <p className="k-note">
          (per la <strong>mediazione</strong> usa la sezione dedicata&nbsp;
          <a className="link-quiet" href="#adr">ADR Europa</a>)
        </p>

        <div className="k-cta">
          <a href={hrefMailto} className="btn btn-primary btn-lg">
            Invia una mail alla segreteria
          </a>
        </div>

        <div className="k-providers" aria-label="Scegli il tuo servizio di posta">
          <a href={hrefGmail} target="_blank" rel="noopener" className="chip" aria-label="Scrivi con Gmail">
            <svg className="ico" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#EA4335" d="M12 13 3 6.75V18a2 2 0 0 0 2 2h3V11l4 3 4-3v9h3a2 2 0 0 0 2-2V6.75z"/>
              <path fill="#FBBC05" d="M3 6.75 12 13l9-6.25-9-4.75z"/>
            </svg>
            Gmail
          </a>

          <a href={hrefOutlookWeb} target="_blank" rel="noopener" className="chip" aria-label="Scrivi con Outlook Web">
            <svg className="ico" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="8" y="4" width="12" height="16" rx="2" fill="#0A66C2"/>
              <rect x="2" y="7" width="10" height="10" rx="2" fill="#1E90FF"/>
            </svg>
            Outlook
          </a>

          <a href={hrefMailto} className="chip" aria-label="Scrivi con un client di posta">
            <!-- icona 'client' stile Thunderbird semplificata -->
            <svg className="ico" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2Zm5.2 7.6-4.78 3.6a1.8 1.8 0 0 1-2.84 0L4.8 9.6a.7.7 0 0 1 .84-1.12l4.78 3.6a.4.4 0 0 0 .56 0l4.78-3.6a.7.7 0 1 1 .84 1.12Z" fill="currentColor"/>
            </svg>
            Client di posta
            <span className="chip-sub">Thunderbird • Outlook desktop • Apple Mail</span>
          </a>
        </div>
      </div>
    </section>
  );
}
