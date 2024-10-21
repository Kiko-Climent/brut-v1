import React, { useRef } from 'react';
import Slider from "react-slick";

import galleryimage7 from '../assets/images/kotryna-juskaite.jpg';
import galleryimage8 from '../assets/images/kotryna-juskaite2.jpg';
import galleryimage9 from '../assets/images/kotryna-juskaite3.jpg';
import galleryimage10 from '../assets/images/kotryna-juskaite4.jpg';
import galleryimage11 from '../assets/images/kotryna-juskaite5.jpg';

const GallerySectionFour = () => {
  const sliderRef = useRef(null); // Slider Ref.

  const settings = {
    infinite: true,
    speed: 1000,
    fade: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, 
    dots: false, 
  };

  return (
    <section className="h-screen flex justify-center gap-2 px-2 pt-2 overflow-hidden">
      <div className="w-1/2 h-full relative group">
        <img
          src={galleryimage8}
          alt="Descripción de la imagen"
          className="w-full h-full object-cover object-bottom"
        />
         <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1/3 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:-translate-y-full"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:translate-y-full"></div>
        </div>
        <div className='absolute w-full top-2 pr-2 text-right text-xs leading-none transition-colors duration-700 group-hover:text-[#0c130c] text-white'>
          <ul>
            <li>Barbican State.</li>
            <li>London, UK.</li>
            <li>1982</li>
          </ul>
        </div>
        <div className='absolute w-full bottom-2 pl-2 text-left text-sm leading-none tracking-wide transition-colors duration-700 group-hover:text-white text-white'>
          <p>Well renowed for its bold, concrete forms and geometric lines.<br/>The design, led by architects Chamberlin, Powell, and Bon,<br/>embraces the ethos of Brutalism, emphasizing raw materials<br/>and functionality while creating a unique urban landscape</p>
        </div>
      </div>
      <div className="w-1/3 h-full flex items-start relative">
        <Slider ref={sliderRef} {...settings} className="w-full h-2/3 object-cover">
          {/* Imagen 1 */}
          <div className="relative">
            <img src={galleryimage9} alt="Imagen 1" className="w-full h-3/4 object-cover" />
            {/* Botón "Next" */}
            <div className="absolute -bottom-1 w-full text-center">
              <button className="text-base text-white" onClick={() => sliderRef.current.slickNext()}>next</button>
            </div>
          </div>
          {/* Imagen 2 */}
          <div className="relative">
            <img src={galleryimage10} alt="Imagen 2" className="w-full h-3/4 object-cover" />
            <div className="absolute -bottom-1  w-full text-center">
              <button className="text-base text-white" onClick={() => sliderRef.current.slickNext()}>next</button>
            </div>
          </div>
          {/* Imagen 3 */}
          <div className="relative">
            <img src={galleryimage11} alt="Imagen 3" className="w-full h-3/4 object-cover" />
            <div className="absolute -bottom-1 w-full text-center">
              <button className="text-base text-white" onClick={() => sliderRef.current.slickNext()}>next</button>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default GallerySectionFour;
