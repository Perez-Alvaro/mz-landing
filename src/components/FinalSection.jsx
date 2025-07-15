import './FinalSection.css';

export default function FinalSection() {
  return (
    <section className="final">
      <svg className="final-texture" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="finalGrid" patternUnits="userSpaceOnUse" width="30" height="30">
            <path d="M0 0 L0 30 M0 0 L30 0" stroke="#D7FB00" strokeWidth="0.8" />
            <path d="M0 30 L30 0 M0 0 L30 30" stroke="#D7FB00" strokeWidth="0.8" />

          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#finalGrid)" />
      </svg>
      <div className="final-content">
        <h2 className="final-title">TRANSFORMÁ TU CUERPO HOY</h2>

        <p className="final-text">
          Sin promesas vacías: con mi guía vas a entrenar mejor, comer bien y mantener la constancia que siempre te faltó.
        </p>

        <p className="final-text">
          Dejá la espera y empezá a cambiar ahora mismo.
        </p>

        <div className="final-icons">
          <img src="/dumbell.png" alt="Dumbell icon" className="final-icon" />
          <a href="https://wa.me/5493512800414" target="_blank" rel="noopener noreferrer" className="final-button">
            Quiero mi plan
          </a>
          <img src="/plate.png" alt="Weight plate icon" className="final-icon" />
        </div>
      </div>
    </section>
  );
}
