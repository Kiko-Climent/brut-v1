import React from 'react';
import UrlFirebase from './firebase/urlFirebase';
import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { app } from '../firebase';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const db = getFirestore(app);

const GallerySectionFour2 = () => {
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
    <section className="h-screen w-screen flex flex-col lg:flex-row justify-between pr-2 lg:pr-[1.45rem] pl-2 lg:pl-[0.5rem] pt-2 lg:pt-0 py-0 lg:py-2 gap-2 lg:gap-2 overflow-hidden items-start">
      <div className="w-full lg:w-3/4 h-full relative group">    
        <UrlFirebase url={galleryData.main_pic} className="w-full h-full object-cover" />
        <div className="hidden lg:block absolute inset-0 flex justify-center items-center overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-2/5 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:-translate-y-full"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/5 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:translate-y-full"></div>
        </div>


        <div className='absolute w-full top-1 pr-1 text-right text-xs leading-none transition-colors duration-700 group-hover:text-[#0c130c] text-black lg:text-white'>
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
      </div>
      <div className="w-full lg:w-1/4 h-auto flex flex-row lg:flex-col gap-2 lg:gap-0">
      <Slider ref={sliderRef} {...settings} className="w-1/2 lg:w-full h-full object-cover">
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
        <div className='h-full lg:h-full flex w-full self-end pb-0 lg:pb-2'>
          <p className='text-justify text-xs lg:text-sm !leading-none tracking-wide transition-colors duration-700 group-hover:text-white text-white'>
          {galleryData ? galleryData.description : "Loading..."}
          </p>
        </div>
      </div>

      
    </section>
  );
}

export default GallerySectionFour2;