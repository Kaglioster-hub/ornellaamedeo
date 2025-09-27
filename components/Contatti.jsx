export default function Contatti() {
  return (
    <section id="contatti" className="contacts-section stack-tight">
      <div className="card surface surface--xl">
        <h2 className="section-title text-center">Contatti</h2>
        <p className="k-lead text-center">
          Siamo a disposizione per informazioni e appuntamenti.
        </p>

        <div className="contacts-grid">
          {/* Studio Legale */}
          <div className="contacts-card">
            <h3 className="contacts-h">Studio legale</h3>
            <ul className="contact-list">
              <li className="row">
                <span className="dot" aria-hidden="true">📍</span>
                <div className="value">Via Grazia Deledda 75 – Roma</div>
              </li>
              <li className="row">
                <span className="dot" aria-hidden="true">📱</span>
                <div className="value">
                  <a className="link-quiet" href="tel:+393914212950">391&nbsp;421&nbsp;2950</a>
                </div>
              </li>
              <li className="row">
                <span className="dot" aria-hidden="true">✉️</span>
                <div className="value">
                  <a className="link-quiet" href="mailto:o.amedeo@associationline.it">o.amedeo@associationline.it</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Pannello con due sotto-card: Consulenza fiscale e Mediazione (ADR Europa) */}
          <div className="contacts-card">
            <div className="subgrid">
              {/* Consulenza fiscale */}
              <div className="subcard">
                <h4 className="subh">Consulenza fiscale</h4>
                <ul className="contact-list">
                  <li className="row">
                    <span className="dot" aria-hidden="true">📍</span>
                    <div className="value">Via Terenzio 21, int. 2 – sc. B – Roma</div>
                  </li>
                  <li className="row">
                    <span className="dot" aria-hidden="true">☎️</span>
                    <div className="value">
                      <a className="link-quiet" href="tel:+390637518763">06&nbsp;37518763</a>
                      <span className="sep"> · </span>
                      <a className="link-quiet" href="tel:+393914212950">391&nbsp;421&nbsp;2950</a>
                    </div>
                  </li>
                  <li className="row">
                    <span className="dot" aria-hidden="true">✉️</span>
                    <div className="value">
                      <a className="link-quiet" href="mailto:studio.amedeo@associationline.it">studio.amedeo@associationline.it</a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Mediazione (ADR Europa) */}
              <div className="subcard">
                <h4 className="subh">
                  Mediazione <span className="badge">ADR Europa</span>
                </h4>
                <ul className="contact-list">
                  <li className="row">
                    <span className="dot" aria-hidden="true">📍</span>
                    <div className="value">Via Terenzio 21, int. 2 – sc. B – Roma</div>
                  </li>
                  <li className="row">
                    <span className="dot" aria-hidden="true">☎️</span>
                    <div className="value">
                      <a className="link-quiet" href="tel:+390645542099">06&nbsp;45542099</a>
                    </div>
                  </li>
                  <li className="row">
                    <span className="dot" aria-hidden="true">✉️</span>
                    <div className="value">
                      <a className="link-quiet" href="mailto:segreteria@adreuropa.it">segreteria@adreuropa.it</a>
                      <div className="muted">
                        PEC: <a className="link-quiet" href="mailto:adr@pec.adreuropa.it">adr@pec.adreuropa.it</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center k-note mt-4">
          PEC personale: dott.ornella.amedeo@pecodcec.roma.it
        </div>
      </div>
    </section>
  );
}
