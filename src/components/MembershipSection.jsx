import './MembershipSection.css';
import { motion } from 'framer-motion';

export default function MembershipSection() {
  return (
    <section id="membership" className="membership">

      <div className="membership-content">
        <h2 className="membership-title">TENÉS MUCHAS OPCIONES PARA ELEGIR</h2>

        <div className="membership-plans">
          <motion.div className="plan-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="plan-card-title">PLAN BASE</h3>
            <p className="plan-price">$20.000</p>
            <ul className="plan-features">
              <li>Plan a medida 100% personalizado</li>
              <li>Acompañamiento y motivación</li>
              <li>Grupo de WhatsApp</li>
            </ul>
          </motion.div>

          <motion.div className="plan-card recommended" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
            <span className="plan-badge">RECOMENDADO</span>
            <h3 className="plan-card-title">PLAN COMPLETO</h3>
            <p className="plan-price">$35.000</p>
            <ul className="plan-features">
              <li>Más músculo, menos grasa</li>
              <li>Acceso a la app exclusiva</li>
              <li>Soporte diario por WhatsApp</li>
              <li>Control de progreso con fotos y medidas</li>
            </ul>
          </motion.div>

          <motion.div className="plan-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
            <h3 className="plan-card-title">PLAN VIP</h3>
            <p className="plan-price">$75.000</p>
            <ul className="plan-features">
              <li>Plan completo + videollamadas semanales</li>
              <li>Acceso a la app exclusiva</li>
              <li>Encuentro presencial cada 15 días</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
