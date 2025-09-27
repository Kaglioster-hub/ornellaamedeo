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
    <div className="mod-section">
      <div className="mod-panel card">
        <h2 className="section-title">Modulistica</h2>

        <p className="mod-lead">
          Invia una richiesta: ti risponderemo con i moduli corretti.
        </p>
        <p className="mod-note">
          (per la <strong>mediazione</strong> usa la sezione dedicata&nbsp;
          <a className="link" href="#adr">ADR Europa</a>)
        </p>

        <div className="mod-cta">
          <a href={hrefMailto} className="btn btn-primary btn-lg">
            Invia una mail alla segreteria
          </a>
        </div>

        <div className="mod-providers" aria-label="Scegli il tuo servizio di posta">
          <a href={hrefGmail} target="_blank" rel="noopener" className="chip">
            <svg className="ico" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#EA4335" d="M12 13 3 6.75V18a2 2 0 0 0 2 2h3V11l4 3 4-3v9h3a2 2 0 0 0 2-2V6.75z"/>
              <path fill="#FBBC05" d="M3 6.75 12 13l9-6.25-9-4.75z"/>
            </svg>
            Gmail
          </a>

          <a href={hrefOutlookWeb} target="_blank" rel="noopener" className="chip">
            <svg className="ico" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="8" y="4" width="12" height="16" rx="2" fill="#0A66C2"/>
              <rect x="2" y="7" width="10" height="10" rx="2" fill="#1E90FF"/>
            </svg>
            Outlook
          </a>

          <a href={hrefMailto} className="chip">
            <span className="ico" aria-hidden="true">🐦</span>
            Client (Thunderbird/Outlook)
          </a>
        </div>
      </div>
    </div>
  );
}
