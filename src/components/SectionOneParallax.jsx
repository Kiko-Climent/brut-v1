import { useState, useEffect } from 'react';
import img1 from '../assets/images/pexels-connor-steinert1.jpg';

const SectionOne = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="h-screen overflow-hidden fixed">
      <div className="h-full w-full relative">
        <img
          src={img1}
          alt="description"
          className="object-cover w-full h-full lg:h-auto lg:object-cover"
          style={{
            transform: `translateY(${offsetY * 1.0}px)`, // Ajusta el factor para controlar la velocidad del parallax
            transition: 'transform 0.1s ease-out', // Suaviza el efecto
          }}
        />
      </div>
    </section>
  );
};

export default SectionOne;
