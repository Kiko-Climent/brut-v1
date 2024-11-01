import React from 'react';
import UrlFirebase from './firebase/urlFirebase';
import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { app } from '../firebase';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const db = getFirestore(app);

const GallerySectionFour = () => {
  const [galleryData, setGalleryData] = useState(null); 

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

  const fetchGalleryData = async () => {
    const docRef = doc(db, 'gallery', 'q6HWDtz1cfevVsxHg2CI');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setGalleryData(docSnap.data()); 

    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    fetchGalleryData();
  }, []);

  if (!galleryData) {
    return <p>Loading...</p>;
  }

  return (
    <section className="h-screen flex justify-center gap-2 px-2 py-2 overflow-hidden">
      <div className="w-1/2 h-full relative group">
        <UrlFirebase url={galleryData.main_pic} className="w-full h-full object-cover object-bottom"/>
         <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1/3 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:-translate-y-full"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:translate-y-full"></div>
        </div>
        <div className='absolute w-full top-2 pr-2 text-right text-xs leading-none transition-colors duration-700 group-hover:text-[#0c130c] text-white'>
          <ul>
          {galleryData ? (
              <>
                <li>{galleryData.title}</li>
                <li>{galleryData.location}</li>
                <li>{galleryData.year}</li>
              </>
            ) : (
              <li>Loading...</li>
            )}
          </ul>
        </div>
        <div className='absolute w-1/3 bottom-2 pl-2 text-justify text-sm leading-none tracking-wide transition-colors duration-700 group-hover:text-white text-white'>
          {galleryData ? galleryData.description : "Loading..."}
        </div>
      </div>
      <div className="w-1/3 h-full flex items-start relative">
        <Slider ref={sliderRef} {...settings} className="w-full h-2/3 object-cover">
          {/* Imagen 1 */}
          <div className="relative">
            
            <UrlFirebase url={galleryData.carousel_pics[0]} className="w-full h-3/4 object-cover"/>
            {/* Botón "Next" */}
            <div className="absolute -bottom-1 w-full text-center">
              <button className="text-base text-white" onClick={() => sliderRef.current.slickNext()}>next</button>
            </div>
          </div>
          {/* Imagen 2 */}
          <div className="relative">
            
            <UrlFirebase url={galleryData.carousel_pics[1]} className="w-full h-3/4 object-cover"/>
            <div className="absolute -bottom-1  w-full text-center">
              <button className="text-base text-white" onClick={() => sliderRef.current.slickNext()}>next</button>
            </div>
          </div>
          {/* Imagen 3 */}
          <div className="relative">
            
            <UrlFirebase url={galleryData.carousel_pics[2]} className="w-full h-3/4 object-cover"/>
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
