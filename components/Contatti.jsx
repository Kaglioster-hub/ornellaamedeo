function PinIcon(){return (<svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" fill="currentColor"/></svg>)}
function PhoneIcon(){return (<svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8c1.2 2.3 3.3 4.4 5.6 5.6l1.9-1.9a1 1 0 0 1 1.1-.23c1.2.48 2.5.75 3.8.79a1 1 0 0 1 1 1v3.2a1 1 0 0 1-1 1C10.9 21.3 2.7 13.1 2.7 2.9a1 1 0 0 1 1-1h3.2a1 1 0 0 1 1 1c.04 1.3.31 2.6.79 3.8a1 1 0 0 1-.23 1.1l-1.9 1.9Z" fill="currentColor"/></svg>)}
function MobileIcon(){return (<svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm0 4h10v12H7V6Z" fill="currentColor"/></svg>)}
function MailIcon(){return (<svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2 .5 8 5 8-5V6H4v.5Z" fill="currentColor"/></svg>)}
function PecIcon(){return (<svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7Zm3 .8 6 3.8 6-3.8V7H6v.8Z" fill="currentColor"/><path d="M12 12.5 6 8.7v7.6A1.7 1.7 0 0 0 7.7 18h8.6a1.7 1.7 0 0 0 1.7-1.7V8.7l-6 3.8Z" fill="currentColor" opacity=".55"/></svg>)}
function WaIcon(){return (<svg className="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.6c1.7.9 3.6 1.4 5.7 1.4 6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.3zM12 22c-1.8 0-3.4-.5-4.8-1.3l-.3-.2-3.7 1 .9-3.6-.2-.3C3.1 16.2 2.6 14.2 2.6 12 2.6 6.9 6.9 2.6 12 2.6c2.8 0 5.3 1.1 7.1 2.9 1.8 1.8 2.9 4.3 2.9 7.1C22 17.1 17.1 22 12 22zm6-6.8c-.3-.2-1.7-.8-1.9-.9s-.4-.1-.6.1c-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5s0-.4-.1-.5c-.1-.2-.6-1.4-.9-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.8.3-.3.3-1.1 1.1-1.1 2.6 0 1.5 1.1 3 1.3 3.2.1.2 2.3 3.6 5.6 4.9.8.3 1.4.5 1.8.6.8.2 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.6.2-1.7-.1-.1-.3-.1-.6-.3z" fill="currentColor"/></svg>)}

export default function Contatti(){
  const wa = (num) => `https://wa.me/${num}?text=` + encodeURIComponent("Buongiorno, avrei bisogno di informazioni. Grazie.");

  return (
    <section id="contatti" className="contacts-section stack-tight">
      <div className="card surface surface--xl c-surface">
        <h2 className="section-title text-center c-title-xl">Contatti</h2>
        <p className="k-lead text-center">Siamo a disposizione per informazioni e appuntamenti.</p>

        <div className="cards-3 c-equal">
          {/* Studio legale */}
          <div className="c-card">
            <h3 className="c-title">Studio legale</h3>
            <ul className="c-list">
              <li className="c-row"><span className="pill"><PinIcon/></span><div>Via Grazia Deledda 75 – Roma</div></li>
              <li className="c-row"><span className="pill"><MobileIcon/></span><div><a className="chip-link" href="tel:+393914212950">391&nbsp;421&nbsp;2950</a></div></li>
              <li className="c-row"><span className="pill"><MailIcon/></span><div><a className="chip-link" href="mailto:o.amedeo@associationline.it">o.amedeo@associationline.it</a></div></li>
            </ul>
          </div>

          {/* Consulenza fiscale */}
          <div className="c-card">
            <h3 className="c-title">Consulenza fiscale</h3>
            <ul className="c-list">
              <li className="c-row"><span className="pill"><PinIcon/></span><div>Via Terenzio 21, int. 2 – sc. B – Roma</div></li>
              <li className="c-row"><span className="pill"><PhoneIcon/></span><div><a className="chip-link" href="tel:+390637518763">06&nbsp;37518763</a></div></li>
              <li className="c-row"><span className="pill"><MobileIcon/></span><div><a className="chip-link" href="tel:+393914212950">391&nbsp;421&nbsp;2950</a></div></li>
              <li className="c-row"><span className="pill"><MailIcon/></span><div><a className="chip-link" href="mailto:studio.amedeo@associationline.it">studio.amedeo@associationline.it</a></div></li>
            </ul>
          </div>

          {/* Mediazione (ADR Europa) */}
          <div className="c-card">
            <h3 className="c-title">Mediazione <span className="c-badge">ADR Europa</span></h3>
            <ul className="c-list">
              <li className="c-row"><span className="pill"><PinIcon/></span><div>Via Terenzio 21, int. 2 – sc. B – Roma</div></li>
              <li className="c-row"><span className="pill"><PhoneIcon/></span><div><a className="chip-link" href="tel:+390645542099">06&nbsp;45542099</a></div></li>
              <li className="c-row"><span className="pill"><MailIcon/></span><div><a className="chip-link" href="mailto:segreteria@adreuropa.it">segreteria@adreuropa.it</a></div></li>
              <li className="c-row"><span className="pill"><PecIcon/></span><div>PEC: <a className="chip-link" href="mailto:adr@pec.adreuropa.it">adr@pec.adreuropa.it</a></div></li>
              <li className="c-row"><span className="pill pill--wa"><WaIcon/></span><div><a className="chip-link chip-link--wa" href={wa("393927662201")} target="_blank" rel="noopener">WhatsApp&nbsp;392&nbsp;766&nbsp;2201</a></div></li>
            </ul>
          </div>
        </div>

        <div className="text-center k-note mt-4">PEC personale: dott.ornella.amedeo@pecodcec.roma.it</div>
      </div>
    </section>
  );
}
