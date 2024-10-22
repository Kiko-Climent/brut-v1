import React from 'react';
import Slider from 'react-slick';

import galleryimage1 from '../assets/images/goran-petkovic2.jpg';
import galleryimage2 from '../assets/images/goran-petkovic3.jpg';
import galleryimage3 from '../assets/images/goran-petkovic4.jpg';
import galleryimage4 from '../assets/images/ivan-aleksic.jpg';

const GallerySectionOne = () => {
  const settings = {
    infinite: true, 
    speed: 1000, 
    fade: true, 
    autoplay: true, 
    autoplaySpeed: 2000, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    arrows: false, 
    dots: false, 
  };

  return (
    <section className="h-screen flex justify-between px-2 pt-9 relative">

      {/* Contenedor con el slider e imagenes */}
      <div className="w-1/4 h-full flex flex-col">
        <div className="">
          <Slider {...settings} className="w-full h-full">
            <div className='flex h-full'>
              <img src={galleryimage2} alt="Imagen 1" className="w-full h-full object-cover object-bottom" />
            </div>
            <div className='flex h-full'>
              <img src={galleryimage3} alt="Imagen 2" className="w-full h-full object-cover object-center" />
            </div>
            <div className='flex h-full'>
              <img src={galleryimage1} alt="Imagen 3" className="w-full h-full object-cover object-center" />
            </div>
          </Slider>
        </div>

        {/* Texto debajo del Slider */}
        <div className='mt-0 flex-schrink'>
          <p className='text-justify text-sm leading-none tracking-wide text-white'>
            The building's vertical, block-like structure showcases both functionality and minimalism, 
            with large windows and balconies that break up the solid mass of concrete. Despite its stark appearance, the tower reflects the ethos of communal living and urban density, 
            blending practicality with a bold, sculptural form.
          </p>
        </div>
      </div>

      {/* Imagen de la derecha */}
      <div className="w-1/2 h-full relative group">
        <img
          src={galleryimage4}
          alt="Descripción de la imagen"
          className="w-full h-full object-cover object-bottom"
        />

        {/* Efectos sobre la imagen */}
        <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1/3 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:-translate-y-full"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:translate-y-full"></div>
        </div>

        {/* Descripción debajo de la imagen */}
        <div className='absolute w-full top-2 pl-2 text-left text-xs leading-none transition-colors duration-700 group-hover:text-[#0c130c] text-white'>
          <ul>
            <li>Karaburma Housing Tower Building.</li>
            <li>Belgrade, Serbia</li>
            <li>1963</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default GallerySectionOne;
