import { useEffect, useState } from "react";

export default function Contatti() {
  const [open, setOpen] = useState(false);

  // chiudi con ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const to = "segreteria.studioamedeo@gmail.com";
  const subject = encodeURIComponent("Richiesta informazioni");
  const body = encodeURIComponent(
    "Buongiorno,\n\navrei bisogno di informazioni su ________.\n\nNome e cognome:\nTelefono:\n\nGrazie."
  );

  const hrefGmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
  const hrefOutlookWeb = `https://outlook.live.com/owa/?path=/mail/action/compose&to=${to}&subject=${subject}&body=${body}`;
  const hrefMailto = `mailto:${to}?subject=${subject}&body=${body}`;

  return (
    <div className="text-center">
      <h2 className="section-title">Contatti</h2>

      <div style={{marginTop: 8}}>
        <p>📍 Via Terenzio 21 – Roma</p>
        <p>☎️ <a className="link" href="tel:+390637518763">06 37518763</a> / <a className="link" href="tel:+390645542099">06 45542099</a></p>
        <p>✉️ <a className="link" href="mailto:o.amedeo@associationline.it">o.amedeo@associationline.it</a></p>
        <p>✉️ <strong><a className="link" href="mailto:segreteria.studioamedeo@gmail.com">segreteria.studioamedeo@gmail.com</a></strong></p>
        <p>PEC: dott.ornella.amedeo@pecodcec.roma.it</p>
      </div>

      <div style={{marginTop: 20}}>
        <button className="btn btn-primary" onClick={() => setOpen(true)}>
          Invia una mail alla segreteria
          <span style={{fontWeight:400, marginLeft:8, opacity:.9}}>
            (per la <strong>mediazione</strong> usa la sezione <a className="link" href="#adr">ADR Europa</a>)
          </span>
        </button>

        {/* scelta provider */}
        <div className={`modal ${open ? "is-open" : ""}`} aria-hidden={!open}>
          <div className="modal__card" role="dialog" aria-modal="true" aria-labelledby="mailTitle">
            <div className="modal__head">
              <h3 id="mailTitle" className="modal__title">Scegli come inviare</h3>
              <button className="modal__close" aria-label="Chiudi" onClick={() => setOpen(false)}>✕</button>
            </div>

            <p className="subtle" style={{marginTop:0}}>
              Apri il tuo servizio preferito con destinatario/oggetto/testo già pronti.
            </p>

            <div className="mail-providers">
              <a href={hrefGmail} target="_blank" rel="noopener" aria-label="Apri Gmail">
                {/* icona Gmail */}
                <svg className="ico" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#EA4335" d="M12 13 3 6.75V18a2 2 0 0 0 2 2h3V11l4 3 4-3v9h3a2 2 0 0 0 2-2V6.75z"/>
                  <path fill="#FBBC05" d="M3 6.75 12 13l9-6.25-9-4.75z"/>
                </svg>
                Gmail
              </a>

              <a href={hrefOutlookWeb} target="_blank" rel="noopener" aria-label="Apri Outlook Web">
                {/* icona Outlook semplificata */}
                <svg className="ico" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="8" y="4" width="12" height="16" rx="2" fill="#0A66C2"/>
                  <rect x="2" y="7" width="10" height="10" rx="2" fill="#1E90FF"/>
                </svg>
                Outlook
              </a>

              <a href={hrefMailto} aria-label="Apri client di posta (Thunderbird/Outlook)">
                <span className="ico" aria-hidden="true">🐦</span>
                Client (Thunderbird/Outlook)
              </a>
            </div>
          </div>
          <button className="modal__backdrop" aria-label="Chiudi" onClick={() => setOpen(false)} />
        </div>
      </div>
    </div>
  );
}
