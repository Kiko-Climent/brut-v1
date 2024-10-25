import React from "react";
import { useState, useEffect } from "react"

const QuoteSectionTwo = () => {
  const [offsetY,setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.scrollY)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Agrega el evento de scroll

    // Limpieza: remueve el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return(
    <section className="w-screen h-screen flex items-center justify-center overflow-hidden">
        <p className="text-2xl font-normal text-white transition-transform duration-300 ease-out"
        style={{
          transform: `translateY(${offsetY * 1.0}px)`, // Ajusta la velocidad del parallax
        }}
        >Brutalism is an architecture of honesty. It is raw, unapologetic, and challenges the norms of beauty by embracing function, materiality, and structure.
        </p>
    </section>
  )
}

export default QuoteSectionTwo;