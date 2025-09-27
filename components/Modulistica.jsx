export default function Modulistica() {
  const to = "segreteria.studioamedeo@gmail.com";
  const subject = encodeURIComponent("Richiesta modulistica");
  const body = encodeURIComponent(
    "Buongiorno,\n\navrei bisogno della modulistica relativa a ________.\n\nNome e cognome:\nTelefono:\n\nGrazie."
  );

  const hrefGmail =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
  const hrefOutlookWeb =
    `https://outlook.live.com/owa/?path=/mail/action/compose&to=${to}&subject=${subject}&body=${body}`;
  const hrefMailto =
    `mailto:${to}?subject=${subject}&body=${body}`;

  return (
    <div className="text-center">
      <h2 className="section-title">Modulistica</h2>

      <p className="subtle" style={{marginBottom: 18}}>
        Invia una richiesta: ti risponderemo con i moduli corretti
        <br />
        <small style={{opacity:.9}}>
          (per le <strong>procedure di mediazione</strong> c’è la sezione dedicata <a className="link" href="#adr">ADR Europa</a>)
        </small>
      </p>

      <a href={hrefMailto} className="btn btn-primary">
        Invia una mail alla segreteria
      </a>

      <div className="mail-providers" aria-label="Scegli il tuo servizio di posta">
        <a href={hrefGmail} target="_blank" rel="noopener" aria-label="Apri Gmail">
          <span className="ico">📧</span> Gmail
        </a>
        <a href={hrefOutlookWeb} target="_blank" rel="noopener" aria-label="Apri Outlook Web">
          <span className="ico">🟦</span> Outlook
        </a>
        <a href={hrefMailto} aria-label="Apri client di posta (Outlook/Thunderbird)">
          <span className="ico">🐦</span> Client (Thunderbird/Outlook)
        </a>
      </div>
    </div>
  );
}
