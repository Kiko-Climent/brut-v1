import React from 'react';
import Slider from "react-slick";
import galleryimage4 from '../assets/images/pavel-neznanov.jpg';
import galleryimage5 from '../assets/images/pavel-neznanov2.jpg';
import galleryimage6 from '../assets/images/pavel-neznanov3.jpg';
import galleryimage7 from '../assets/images/pavel-neznanov4.jpg';

const GallerySectionThree = () => {
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
    <section className="h-screen flex justify-between px-2 gap-2 overflow-hidden">
      <div className="w-1/4 h-full flex flex-col">
      <Slider {...settings} className="w-full h-3/4">
        <div className='flex h-full'>
          <img src={galleryimage4} alt="Imagen 1" className="w-full h-full object-cover" />
        </div>
        <div className='flex h-full'>
          <img src={galleryimage5} alt="Imagen 2" className="w-full h-full object-cover" />
        </div>
        <div className='flex h-full'>
          <img src={galleryimage7} alt="Imagen 3" className="w-full h-full object-cover" />
        </div>
      </Slider>
      <div className='h-1/4 flex items-start relative w-full'>
        <p className='absolute -top-12 text-start text-sm leading-none tracking-wide transition-colors duration-700 group-hover:text-white text-white'>
        Opened in 1967, the museum showcases a unique blend of modernist and futuristic architectural styles, reflecting the innovative spirit of space exploration. The building features sweeping lines and expansive glass facades that symbolize the vastness of space and the vision of humanity's journey beyond Earth.
        </p>
      </div>
</div>

      <div className="w-3/4 h-full relative group">
        <img
          src={galleryimage6}
          alt="Imagen derecha"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1/5 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:-translate-y-full"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/5 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:translate-y-full"></div>
        </div>


        <div className='absolute w-full top-2 pl-2 text-left text-xs leading-none transition-colors duration-700 group-hover:text-[#0c130c] text-white'>
          <ul>
            <li>Tsiolkovsky State Museum.</li>
            <li>Kaluga, Russia.</li>
            <li>1967</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GallerySectionThree;
