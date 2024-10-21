import React from 'react';
import Slider from "react-slick";

import galleryimage7 from '../assets/images/kotryna-juskaite.jpg'
import galleryimage8 from '../assets/images/kotryna-juskaite2.jpg'
import galleryimage9 from '../assets/images/kotryna-juskaite3.jpg'
import galleryimage10 from '../assets/images/kotryna-juskaite4.jpg'
import galleryimage11 from '../assets/images/kotryna-juskaite5.jpg'

const GallerySectionFour = () => {
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
    <section className="h-screen flex justify-center gap-2 px-2 pt-2 overflow-hidden">
      <div className="w-1/2 h-full">
        <img
          src={galleryimage8}
          alt="Descripción de la imagen"
          className="w-full h-full object-cover object-bottom"
        />
      </div>
      <div className="w-1/3 h-full flex items-start">
        <Slider {...settings} className="w-full h-2/3 object-cover">
          <img src={galleryimage9} alt="Imagen 1" className="w-full h-3/4 object-cover" />
          <img src={galleryimage10} alt="Imagen 2" className="w-full h-3/4 object-cover" />
          <img src={galleryimage11} alt="Imagen 2" className="w-full h-3/4 object-cover" />
        </Slider>
      </div>
    </section>
  )
}

export default GallerySectionFour;