import { useState } from "react";

const servizi = [
  {
    icon: "📑",
    titolo: "Consulenza legale",
    telefono: "3914212950",
    email: "legale@associationline.it", // aggiornato
  },
  {
    icon: "📊",
    titolo: "Consulenza fiscale e contabile",
    telefono: "0637518763",
    telefono2: "3914212950", // anche il cell del legale
    email: "studio.amedeo@associationline.it",
  },
  {
    icon: "⚖️",
    titolo: "Mediazione e arbitrato",
    telefono: "0645542099",
    whatsapp: "393927662201", // +39 392 766 2201 per wa.me
    email: "segreteria@adreuropa.it",
    email2: "adr@pec.adreuropa.it",
  },
  {
    icon: "🎓",
    titolo: "Formazione ADR",
    telefono: "0645542099",
    whatsapp: "393927662201", // +39 392 766 2201 per wa.me
    email: "formazione@adreuropa.it",
  },
];

const WhatsappIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="inline-block -mt-[2px] mr-1">
    <path fill="currentColor" d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.6c1.7.9 3.6 1.4 5.7 1.4 6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.3zM12 22c-1.8 0-3.4-.5-4.8-1.3l-.3-.2-3.7 1 .9-3.6-.2-.3C3.1 16.2 2.6 14.2 2.6 12 2.6 6.9 6.9 2.6 12 2.6c2.8 0 5.3 1.1 7.1 2.9 1.8 1.8 2.9 4.3 2.9 7.1C22 17.1 17.1 22 12 22zm6-6.8c-.3-.2-1.7-.8-1.9-.9s-.4-.1-.6.1c-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5s0-.4-.1-.5c-.1-.2-.6-1.4-.9-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.8.3-.3.3-1.1 1.1-1.1 2.6 0 1.5 1.1 3 1.3 3.2.1.2 2.3 3.6 5.6 4.9.8.3 1.4.5 1.8.6.8.2 1.6.2 2.2.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.6.2-1.7-.1-.1-.3-.1-.6-.3z"/>
  </svg>
);

export default function Servizi() {
  const [popup, setPopup] = useState(null);

  const waLink = (num) =>
    `https://wa.me/${num}?text=` +
    encodeURIComponent("Buongiorno, avrei bisogno di informazioni. Grazie.");

  return (
    <section id="servizi" className="py-16 bg-brandCream">
      <h2 className="text-3xl font-title font-bold text-center text-brandBlack">
        Servizi
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
        {servizi.map((s, i) => (
          <button
            key={i}
            onClick={() => setPopup(s)}
            className="group block p-6 rounded-2xl shadow-lg bg-brandWhite text-brandBlack transition-all duration-500 cursor-pointer select-none hover:bg-gold-gradient hover:shadow-2xl text-left"
          >
            <div className="text-4xl">{s.icon}</div>
            <h3 className="mt-4 text-xl font-semibold group-hover:text-brandBlack">
              {s.titolo}
            </h3>
            <div className="mt-2 text-sm text-brandGray">
              {s.telefono && <>Tel. {s.telefono}</>}
              {s.telefono2 && <> · Cell. {s.telefono2}</>}
              {s.whatsapp && (
                <>
                  {" "}
                  · <span className="inline-flex items-center text-[#25D366] font-semibold"><WhatsappIcon/>WhatsApp</span>
                </>
              )}
            </div>
          </button>
        ))}
      </div>

      {popup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onClick={() => setPopup(null)}>
          <div className="bg-brandWhite rounded-2xl shadow-2xl p-8 max-w-sm w-[92vw] text-center" onClick={(e)=>e.stopPropagation()}>
            <h3 className="text-2xl font-title text-brandBlack mb-4">{popup.titolo}</h3>

            {/* Telefono primario */}
            {popup.telefono && (
              <a href={`tel:${popup.telefono}`} className="block bg-brandGold text-brandBlack font-semibold py-2 px-4 rounded-lg mb-3 hover:opacity-90 transition">
                📞 Chiama {popup.telefono}
              </a>
            )}

            {/* Telefono secondario (cell) */}
            {popup.telefono2 && (
              <a href={`tel:${popup.telefono2}`} className="block bg-brandGold text-brandBlack font-semibold py-2 px-4 rounded-lg mb-3 hover:opacity-90 transition">
                📱 Chiama {popup.telefono2}
              </a>
            )}

            {/* WhatsApp */}
            {popup.whatsapp && (
              <a href={waLink(popup.whatsapp)} target="_blank" rel="noopener" className="block btn-whatsapp font-semibold py-2 px-4 rounded-lg mb-3">
                <span className="inline-flex items-center"><WhatsappIcon/> Apri chat WhatsApp</span>
              </a>
            )}

            {/* Mail */}
            {popup.email && (
              <a href={`mailto:${popup.email}`} className="block bg-brandBlack text-brandWhite font-semibold py-2 px-4 rounded-lg mb-3 hover:opacity-80 transition">
                ✉️ {popup.email}
              </a>
            )}
            {popup.email2 && (
              <a href={`mailto:${popup.email2}`} className="block bg-brandBlack text-brandWhite font-semibold py-2 px-4 rounded-lg mb-3 hover:opacity-80 transition">
                ✉️ {popup.email2}
              </a>
            )}

            <button onClick={() => setPopup(null)} className="mt-2 text-sm text-brandGray underline hover:text-brandBlack">
              Chiudi
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
