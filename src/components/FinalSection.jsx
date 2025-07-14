import './FinalSection.css';

export default function FinalSection() {
  return (
    <section className="final">
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
