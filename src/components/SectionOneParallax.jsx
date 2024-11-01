import { useState, useEffect } from "react";
import img1_1 from "../assets/images/pexels-apasaric.jpg";

const SectionOneParallax = ({ onImageLoad }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="h-screen overflow-hidden fixed">
      <div className="h-full w-full relative">
        <img
          src={img1_1}
          alt="description"
          className="object-cover w-full h-full lg:h-auto lg:object-cover"
          style={{
            transform: `translateY(${offsetY * 1.0}px)`,
            transition: "transform 0.1s ease-out", // Suaviza el efecto
          }}
          onLoad={onImageLoad} // Llama a la función pasada como prop cuando la imagen se carga
        />
      </div>
    </section>
  );
};

export default SectionOneParallax;
