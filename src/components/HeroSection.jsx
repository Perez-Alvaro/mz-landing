import { motion } from 'framer-motion';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero">

      <div className="hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ¿LISTO PARA <span className="highlight">DEJAR DE PONER EXCUSAS?</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Este no es un plan milagroso: es un sistema real con herramientas comprobadas.
        </motion.p>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Entrená con <strong>Mynter</strong>, la app que centraliza tu plan, registro diario y tu avance, todo en tu teléfono.
        </motion.p>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Vas a entrenar mejor, comer sin obsesiones y ganar constancia.
        </motion.p>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          ¿Seguimos perdiendo tiempo o arrancamos hoy?
        </motion.p>

        <motion.a
          href="#membership"
          className="hero-button"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          VER PLANES
        </motion.a>

      </div>

      <motion.img
        src="/trainer.png"
        alt="Entrenador personal"
        className="hero-image"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
    </section>
  );
}
