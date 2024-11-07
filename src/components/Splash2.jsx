import { useState, useEffect } from 'react';
import splashimage from '../assets/images/joel-filipe.jpg';
import splashimage2 from '../assets/images/low-angle-view-skylight-hong-kong-residential-old-architecture.jpg';

const SplashScreen = () => {
  const [activeLetterIndex, setActiveLetterIndex] = useState(-1); 
  const [startAnimation, setStartAnimation] = useState(false);
  const letters = ['b', 'r', 'u', 't', '*'];

  useEffect(() => {
    
    const initialDelay = setTimeout(() => {
      setStartAnimation(true); // 
    }, 2000);

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (startAnimation && activeLetterIndex < letters.length) {
      const timer = setTimeout(() => {
        setActiveLetterIndex((prevIndex) => prevIndex + 1);
      }, 1000); 

      return () => clearTimeout(timer);
    }
  }, [startAnimation, activeLetterIndex]);

  return (
    <section className="flex flex-col overflow-hidden h-screen relative">
      {/* Imagen ocupando toda la pantalla */}
      <div className="absolute inset-0">
        <img
          src={splashimage}
          className="h-full w-full object-cover"
          alt="Splash"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="flex justify-center">
          {letters.map((letter, index) => (
            <span
              key={index}
              className={`text-[35vw] font-bold text-[#0c130c] custom-line-height2 transition-opacity duration-700 ease-in-out ${
                index <= activeLetterIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {letter}
            </span>
          ))}
        </div>
        <div className="flex justify-center mt-2 lg:mt-8">
          {letters.map((letter, index) => (
            <span
              key={index}
              className={`text-[35vw] font-bold text-[#ccd7d7] transform rotate-180 scale-x-[-1] custom-line-height2 transition-opacity duration-700 ease-in-out ${
                index <= activeLetterIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }} // Retraso en las letras reflejadas
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SplashScreen;
