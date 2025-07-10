import './TestimoniosSection.css';
import { motion } from 'framer-motion';

export default function TestimoniosSection() {
  return (
    <section className="testimonios">
      <div className="testimonios-content">
        <h2 className="testimonios-title">EXPERIENCIAS REALES</h2>

        <div className="testimonios-list">
          <motion.div className="testimonio-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <img src="/user1.jpg" alt="Perfil de Nicolás" className="testimonio-avatar" />
            <p className="testimonio-text">"Me siento re bien organizado desde que comencé el plan. Entreno mejor y siento que estoy más cerca de mis objetivos."</p>
            <p className="testimonio-author">NICOLÁS MIRANDA</p>
          </motion.div>

          <motion.div className="testimonio-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
            <img src="/user2.jpg" alt="Perfil de Florencia" className="testimonio-avatar" />
            <p className="testimonio-text">"Con el programa pude cumplir mis objetivos y desafiarme a seguir mejorando cada día."</p>
            <p className="testimonio-author">FLORENCIA STORK</p>
          </motion.div>

          <motion.div className="testimonio-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
            <img src="/user3.jpg" alt="Perfil de David" className="testimonio-avatar" />
            <p className="testimonio-text">"Logré sentirme fuerte, ágil y mejorar mi técnica. Ahora entreno mejor y con más eficacia."</p>
            <p className="testimonio-author">DAVID SVETLIZA</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
