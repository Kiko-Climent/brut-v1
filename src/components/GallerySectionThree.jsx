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
      <div className="w-1/4 h-full flex items-start">
        <Slider {...settings} className="w-full h-3/4 object-cover">
          <img src={galleryimage4} alt="Imagen 1" className="w-full h-full object-cover" />
          <img src={galleryimage5} alt="Imagen 2" className="w-full h-full object-cover object-center" />
          <img src={galleryimage7} alt="Imagen 2" className="w-full h-full object-cover object-center" />
        </Slider>
      </div>
      <div className="w-3/4 h-full">
        <img
          src={galleryimage6}
          alt="Imagen derecha"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default GallerySectionThree;
