import './MynterSection.css';
import { motion } from 'framer-motion';

export default function MynterSection() {
  return (
    <section className="mynter">
      <svg className="mynter-texture" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="dots" patternUnits="userSpaceOnUse" width="20" height="20">
            <circle cx="1" cy="1" r="1" fill="#CBFF00" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      <div className="mynter-content">
        <h2 className="mynter-title">TODO CENTRALIZADO EN UNA APP</h2>

        {/* Mueve el logo aquí */}
        <img src="/mynter-logo.png" alt="Mynter logo" className="mynter-logo" />

        <motion.p className="mynter-text" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Entrená con <span className="mynter-highlight">Mynter</span>, la app mobile que reúne tu plan de entrenamiento, nutrición,
          registros diarios y contacto directo conmigo, todo en un solo lugar.
        </motion.p>

        <div className="mynter-features">
          <motion.div className="mynter-feature-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p>📱 <span className="mynter-highlight">Plan de entrenamiento & nutrición</span> siempre a mano</p>
          </motion.div>
          <motion.div className="mynter-feature-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
            <p>📹 <span className="mynter-highlight">Registro diario</span> de peso, medidas y videos</p>
          </motion.div>
          <motion.div className="mynter-feature-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
            <p>📊 Seguimiento de tu progreso con <span className="mynter-highlight">gráficos y estadísticas</span></p>
          </motion.div>
        </div>

        <a href="https://mynter.app" target="_blank" rel="noopener noreferrer" className="mynter-button">
          Conocé Mynter
        </a>
      </div>
    </section>
  );
}
