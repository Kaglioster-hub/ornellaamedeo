export default function Contatti() {
  return (
    <section className="contacts-section stack-tight">
      <div className="card surface surface--xl text-center">
        <h2 className="section-title">Contatti</h2>
        <p className="k-lead">Siamo a disposizione per informazioni e appuntamenti.</p>

        <ul className="contact-list">
          <li className="row"><span className="dot" aria-hidden="true">📍</span><div className="value">Via Terenzio 21 – Roma</div></li>
          <li className="row"><span className="dot" aria-hidden="true">☎️</span><div className="value">
            <a className="link-quiet" href="tel:+390637518763">06&nbsp;37518763</a><span className="sep">/</span>
            <a className="link-quiet" href="tel:+390645542099">06&nbsp;45542099</a></div></li>
          <li className="row"><span className="dot" aria-hidden="true">✉️</span><div className="value">
            <a className="link-quiet" href="mailto:o.amedeo@associationline.it">o.amedeo@associationline.it</a></div></li>
          <li className="row"><span className="dot" aria-hidden="true">✉️</span><div className="value">
            <strong><a className="link-quiet" href="mailto:segreteria.studioamedeo@gmail.com">segreteria.studioamedeo@gmail.com</a></strong></div></li>
          <li className="row"><span className="dot" aria-hidden="true">📮</span><div className="value">PEC: dott.ornella.amedeo@pecodcec.roma.it</div></li>
        </ul>
      </div>
    </section>
  );
}
