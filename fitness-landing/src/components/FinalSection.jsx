import './FinalSection.css';

export default function FinalSection() {
  return (
    <section className="final">
      <div className="final-content">
        <h2 className="final-title">¡LISTO PARA CAMBIAR TU VIDA?</h2>

        <p className="final-text">
          Esto no es magia, es trabajo y constancia. Pero no vas a estar solo: te acompaño en el proceso para que logres el cuerpo y la mentalidad que siempre buscaste.
        </p>

        <p className="final-text">
          ¿Empezamos hoy o seguís esperando el "momento perfecto"?
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
