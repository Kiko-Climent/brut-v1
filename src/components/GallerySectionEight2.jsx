import React, { useEffect, useRef, useState } from "react";
import galleryeight1 from "../assets/images/pexels-dariabuntaria.jpg";

const GallerySectionEight2 = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const sectionRef = useRef(null);

  const words = ["rough surfaces", "massive forms", "and plenty of concrete"];
  
  // Configuración del observador para iniciar la animación al estar en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Activar el cambio a la imagen completa después de la animación del texto
  useEffect(() => {
    if (textVisible) {
      const timer = setTimeout(() => {
        setShowImage(true);
      }, words.length * 1000); // Cambiar a imagen completa después de 3 segundos (1 por palabra)
      return () => clearTimeout(timer);
    }
  }, [textVisible]);

  return (
    <section ref={sectionRef} className="lg:h-screen lg:w-screen px-2 pt-2 lg:pt-0 pb-0 lg:pb-2 overflow-hidden relative">
      <div className={`w-full h-full transition-opacity duration-1000 ${showImage ? 'opacity-100' : 'opacity-0'}`}>
        <img src={galleryeight1} className="h-full w-full object-contain lg:object-cover" alt="Gallery" />
      </div>

      {/* Texto superior izquierda */}
      <div className={`absolute w-full bottom-1 lg:bottom-3 pl-1 text-white text-left text-xs leading-none transition-opacity duration-1000 ${showImage ? 'opacity-100' : 'opacity-0'}`}>
        <ul>
          <li>Saburtalo District</li>
          <li>Tbilisi, Georgia</li>
          <li>1974</li>
        </ul>
      </div>

      {/* Animación de texto palabra por palabra */}
      <div className={`absolute w-full inset-0 flex items-center justify-center text-center text-xs leading-none transition-colors duration-1000 ${showImage ? 'text-[#0c130c]' : 'text-white'}`}>
        <h1 className="uppercase text-[10vw] lg:text-[10vw]">
          {words.map((word, index) => (
            <span
              key={index}
              className={`transition-opacity duration-1000 ${textVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${index}s` }}
            >
              {word}<br />
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
};

export default GallerySectionEight2;
