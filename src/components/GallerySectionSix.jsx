import React from 'react';
import UrlFirebase from './firebase/urlFirebase';
import { useState, useEffect } from 'react';
import { app } from '../firebase';
import { getFirestore, doc, getDoc } from 'firebase/firestore';




const GallerySectionSix = () => {
  const db = getFirestore(app);
  const [galleryData, setGalleryData] = useState(null);
  
  const fetchGalleryData = async () => {
    const docRef = doc(db, 'gallery', '7l7zM6Xyy1kWEKQH2rUV');
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
    <section className='h-screen flex justify-start gap-2 px-2 pb-2 overflow-hidden'>
        <div className='w-2/5 h-full flex flex-col'>
          <div className='flex h-full'>
            <UrlFirebase url={galleryData.main_pic2} className="w-full h-full object-cover object-bottom"/>
          </div>
            
      </div>
      <div className="w-2/3 h-full relative group pt-2">
        <UrlFirebase url={galleryData.main_pic} className="w-full h-full object-cover object-center"/>
         <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1/3 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:-translate-y-full"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:translate-y-full"></div>
        </div>
        <div className='absolute w-full top-4 pl-2 text-left text-xs leading-none transition-colors duration-700 group-hover:text-[#0c130c] text-white'>
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
        <div className='absolute w-1/3 bottom-2 right-2 text-justify text-sm leading-none tracking-wide transition-colors duration-700 group-hover:text-white text-white'>
          <p>
          {galleryData ? galleryData.description : "Loading..."}
          </p>
        </div>
      </div>
    </section>
  )
}

export default GallerySectionSix;