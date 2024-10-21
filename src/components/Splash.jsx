import splashimage from '../assets/images/kotryna-juskaite2.jpg';

const SplashScreen = () => {
  return (
    <section className="flex flex-col overflow-hidden h-screen">
      {/* Sección de la imagen (2/3 de la pantalla) */}
      <div className="h-2/3">
        <img
          src={splashimage}
          className="h-full w-full object-cover"
          alt="Splash"
        />
      </div>
      
      {/* Sección del texto (1/3 de la pantalla) */}
      <div className="h-1/3">
        <div className="h-1/2 bg-white flex items-end justify-center">
          <h1 className="text-9xl text-[#0c130c] custom-line-height">brut*</h1>
        </div>
        <div className="h-1/2 bg-[#0c130c] flex items-start justify-center">
          <h1 className="text-9xl text-white transform rotate-180 scale-x-[-1] custom-line-height">brut*</h1>
        </div>
      </div>
    </section>
  );
}

export default SplashScreen;
