import './ProgramsSection.css';
import { motion } from 'framer-motion';

export default function ProgramsSection() {
  return (
    <section className="programs">
      <svg className="programs-texture" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="grid" patternUnits="userSpaceOnUse" width="30" height="30">
            <path d="M0 0 L0 30 M0 0 L30 0" stroke="#D7FB00" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="programs-content">
        <h2 className="programs-title">¿QUÉ INCLUYE EL PLAN?</h2>

        <div className="programs-list">
          <motion.div className="program-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="program-card-title">¿SOLO PARA EL GYM?</h3>
            <p className="program-card-text">En tu living o en el gym. Lo importante es que te muevas y disfrutes cada entrenamiento a tu manera.</p>
          </motion.div>

          <motion.div className="program-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
            <h3 className="program-card-title">¿TENGO SOPORTE?</h3>
            <p className="program-card-text">¿Te surgió un imprevisto o una duda? Contactate conmigo en cualquier momento, hay soporte 24/7.</p>
          </motion.div>

          <motion.div className="program-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
            <h3 className="program-card-title">REGISTRÁ TODO</h3>
            <p className="program-card-text">Llevá un registro fotográfico y de tus entrenamientos para siempre ir por más y ver tus avances.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
