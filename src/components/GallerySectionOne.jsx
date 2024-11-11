import React from 'react';
import UrlFirebase from './firebase/urlFirebase';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { app } from '../firebase';
import { getFirestore, doc, getDoc } from 'firebase/firestore';


const db = getFirestore(app);

const GallerySectionOne = () => {
  const [galleryData, setGalleryData] = useState(null); // Storage data

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

  // function to get data from Firestore
  const fetchGalleryData = async () => {
    const docRef = doc(db, 'gallery', 'u3vNVmgjIPOxteN067ww');
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
    <section className="h-screen flex flex-col lg:flex-row justify-between px-2 pt-5 lg:pt-6 relative overflow-hidden">

      <div className="hidden lg:block w-2/5 lg:w-1/4 h-full flex flex-col">
        <div className="">
          <Slider {...settings} className="w-full h-full">
            <div className='flex h-full'>              
              <UrlFirebase url={galleryData.carousel_pics[0]} className="w-full h-full object-cover object-bottom" />
            </div>
            <div className='flex h-full'>
              
              <UrlFirebase url={galleryData.carousel_pics[1]} className="w-full h-full object-cover object-center" />
            </div>
            <div className='flex h-full'>
              
              <UrlFirebase url={galleryData.carousel_pics[2]} className="w-full h-full object-cover object-center" />
            </div>
          </Slider>
        </div>

        <div className='mt-0 flex-schrink'>
          <p className='text-justify text-xs lg:text-sm !leading-none tracking-wide text-white'>
          {galleryData ? galleryData.description : "Loading..."} {/* Muestra la descripción o un mensaje de carga */}
          </p>
        </div>
      </div>
      {/* contenido sm */}
      <div className="block lg:hidden w-full lg:w-1/4 flex items-end gap-2">
      <div className="w-7/12 h-full">
        <Slider {...settings}>
          <div className='flex h-full'>              
            <UrlFirebase url={galleryData.carousel_pics[0]} className="w-full h-full object-cover object-bottom" />
          </div>
          <div className='flex h-full'>
            
            <UrlFirebase url={galleryData.carousel_pics[1]} className="w-full h-full object-cover object-center" />
          </div>
          <div className='flex h-full'>
            
            <UrlFirebase url={galleryData.carousel_pics[2]} className="w-full h-full object-cover object-center" />
          </div>
        </Slider>
      </div>

      <div className='mt-0 flex-schrink'>
        <p className='text-justify text-xs lg:text-sm !leading-none tracking-wide text-white py-2'>
        {galleryData ? galleryData.description : "Loading..."} {/* Muestra la descripción o un mensaje de carga */}
        </p>
      </div>
    </div>

      <div className="hidden lg:block w-7/12 lg:w-1/2 h-1/2 lg:h-full relative group">
        <UrlFirebase url={galleryData.main_pic} className="w-full h-full object-cover object-bottom" />

        {/* Efx */}
        <div className="hidden lg:block absolute inset-0 flex justify-center items-center overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1/3 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:-translate-y-full"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:translate-y-full"></div>
        </div>

        <div className='absolute w-full top-2 pl-2 text-left text-xs leading-none transition-colors duration-700 group-hover:text-[#0c130c] text-white'>
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
      {/* contenido sm */}
      <div className=" block lg:hidden w-full lg:w-1/2 h-full relative group">
      <UrlFirebase url={galleryData.main_pic} className="w-full h-full object-cover object-bottom" />

      {/* Efx */}
      <div className="hidden lg:block absolute inset-0 flex justify-center items-center overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1/3 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:-translate-y-full"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:translate-y-full"></div>
      </div>

      <div className='absolute w-full top-1 pl-1 text-left text-xs leading-none transition-colors duration-700 group-hover:text-[#0c130c] text-white'>
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

    </section>
  );
}

export default GallerySectionOne;
