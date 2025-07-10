import { useEffect, useRef, useState } from 'react';

export default function useFadeInOnScroll() {
  const ref = useRef();              // Ref: sirve para "marcar" un elemento HTML
  const [isVisible, setIsVisible] = useState(false); // Estado: visible o no

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),  // Cuando el elemento cruza el viewport → true
      { threshold: 0.3 }                                // Se activa cuando un 30% del elemento es visible
    );

    if (ref.current) observer.observe(ref.current);    // Le decimos al observer qué tiene que mirar

    return () => observer.disconnect();                // Cuando se destruye el componente, se limpia
  }, []);

  return [ref, isVisible];                             // Devuelve el ref y el estado
}
