import { useState, useEffect } from 'react';
import splashimage from '../assets/images/joel-filipe.jpg';

const SplashScreen = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Mostrar el texto después de 2 segundos
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000);

    // Limpiar el timer cuando el componente se desmonte
    return () => clearTimeout(timer);
  }, []);

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

      {/* Texto "brut*" aparece después de 2 segundos */}
      {showText && (
        <div className="absolute inset-0 flex flex-col justify-center">
          {/* Primer texto "brut*" */}
          <div className="flex justify-center">
            <h1 className="text-[15vw] text-[#0c130c] custom-line-height2">brut*</h1>
          </div>

          {/* Segundo texto "brut*" con efecto espejo */}
          <div className="flex justify-center mt-4">
            <h1 className="text-[15vw] text-[#ccd7d7] transform rotate-180 scale-x-[-1] custom-line-height2">brut*</h1>
          </div>
        </div>
      )}
    </section>
  );
};

export default SplashScreen;
