import React from 'react';
import Slider from 'react-slick';

import galleryseven1 from '../assets/images/kajetan-powolny.jpg';
import galleryseven2 from '../assets/images/kajetan-powolny2.jpg';
import galleryseven3 from '../assets/images/kajetan-powolny3.jpg';

import galleryseven4 from '../assets/images/pavel-neznanov8.jpg';
// import galleryseven3 from '../assets/images/pexels-jakubzerdzicki.jpg';
// import galleryseven2 from '../assets/images/pexels-alex-buretz.jpg';
// import galleryseven1 from '../assets/images/pavel-neznanov8.jpg';


const GallerySectionSeven = () => {
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
    <section className="h-screen flex justify-start lg:justify-around px-2 py-2 relative gap-2 lg:gap-0">

      
      <div className="w-1/4 h-full flex flex-col">
        <div className="flex">
          <Slider {...settings} className="w-full h-full">
            <div className='h-full'>
              <img src={galleryseven1} alt="Imagen 1" className="w-full h-full object-cover object-bottom" />
            </div>
            <div className='h-full'>
              <img src={galleryseven2} alt="Imagen 2" className="w-full h-full object-cover object-center" />
            </div>
            <div className='h-full'>
              <img src={galleryseven3} alt="Imagen 3" className="w-full h-full object-cover object-center" />
            </div>
          </Slider>
        </div>

        
        <div className='mt-0 flex-schrink'>
          <p className='text-justify text-xs lg:text-sm leading-none tracking-wide text-white'>
            The building's vertical, block-like structure showcases both functionality and minimalism, 
            with large windows and balconies that break up the solid mass of concrete. Despite its stark appearance, the tower reflects the ethos of communal living and urban density, 
            blending practicality with a bold, sculptural form.
          </p>
        </div>
      </div>

      
      <div className="w-1/2 h-full relative group">
        <img
          src={galleryseven4}
          alt="Descripción de la imagen"
          className="w-full h-full object-cover"
        />

        
        <div className="hidden lg:block absolute inset-0 flex justify-center items-center overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1/3 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:-translate-y-full"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:translate-y-full"></div>
        </div>

       
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



export default GallerySectionSeven;

