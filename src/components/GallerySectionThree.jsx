import React from 'react';
import UrlFirebase from './firebase/urlFirebase';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { app } from '../firebase';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const db = getFirestore(app);

const GallerySectionThree = () => {
  const [galleryData, setGalleryData] = useState(null); 

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

  const fetchGalleryData = async () => {
    const docRef = doc(db, 'gallery', 'S2cP6lbaJ2U8obQZk5Uw');
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
    <section className="h-screen w-screen flex flex-col lg:flex-row justify-between px-2 gap-0 lg:gap-2 overflow-hidden items-start">
      <div className="w-full lg:w-1/4 h-auto flex flex-row lg:flex-col gap-2 lg:gap-0">
        <Slider {...settings} className="w-7/12 lg:w-full h-auto lg:h-3/4">
          <div className='flex h-full'>
            <UrlFirebase url={galleryData.carousel_pics[0]} className="w-full h-full object-cover" />
          </div>
          <div className='flex h-full'>
            <UrlFirebase url={galleryData.carousel_pics[1]} className="w-full h-full object-cover" />
          </div>
          <div className='flex h-full'>
            <UrlFirebase url={galleryData.carousel_pics[2]} className="w-full h-full object-cover" />
          </div>
        </Slider>
        <div className='h-auto lg:h-full flex w-full self-end pb-2'>
          <p className='flex-schrink text-justify text-xs lg:text-sm !leading-none tracking-wide transition-colors duration-700 group-hover:text-white text-white'>
          {galleryData ? galleryData.description : "Loading..."}
          </p>
        </div>
      </div>

      <div className="w-full lg:w-3/4 h-full relative group">    
        <UrlFirebase url={galleryData.main_pic} className="w-full h-full object-cover" />
        <div className="hidden lg:block absolute inset-0 flex justify-center items-center overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1/5 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:-translate-y-full"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/5 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:translate-y-full"></div>
        </div>


        <div className='absolute w-full top-1 pl-1 text-left text-xs leading-none transition-colors duration-700 group-hover:text-[#0c130c] text-black lg:text-white'>
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
};
// return (
//   <section className="h-full lg:h-screen w-full lg:w-screen flex flex-col lg:flex-row px-2 gap-2 overflow-hidden">
//     <div className="flex items-end gap-2">
//       <Slider {...settings} className="w-8/12">
//         <div className='h-full'>
//           <UrlFirebase url={galleryData.carousel_pics[0]} className="w-full h-full object-cover" />
//         </div>
//         <div className='h-full'>
//           <UrlFirebase url={galleryData.carousel_pics[1]} className="w-full h-full object-cover" />
//         </div>
//         <div className='h-full'>
//           <UrlFirebase url={galleryData.carousel_pics[2]} className="w-full h-full object-cover" />
//         </div>
//       </Slider>
//       <div className='w-full pb-2'>
//         <p className='text-justify text-xs lg:text-sm leading-none tracking-wide transition-colors duration-700 group-hover:text-white text-white'>
//         {galleryData ? galleryData.description : "Loading..."}
//         </p>
//       </div>
//     </div>

//     <div className="w-full h-full relative group">    
//       <UrlFirebase url={galleryData.main_pic} className="w-full h-full object-cover" />
//       <div className="hidden lg:block absolute inset-0 flex justify-center items-center overflow-hidden">
//         <div className="absolute inset-x-0 top-0 h-1/5 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:-translate-y-full"></div>
//         <div className="absolute inset-x-0 bottom-0 h-1/5 bg-[#0c130c] transition-all duration-700 ease-in-out group-hover:translate-y-full"></div>
//       </div>


//       <div className='absolute w-full top-2 pl-2 text-left text-xs leading-none transition-colors duration-700 group-hover:text-[#0c130c] text-white'>
//         <ul>
//         {galleryData ? (
//             <>
//               <li>{galleryData.title}</li>
//               <li>{galleryData.location}</li>
//               <li>{galleryData.year}</li>
//             </>
//           ) : (
//             <li>Loading...</li>
//           )}
//         </ul>
//       </div>
//     </div>
//   </section>
// );
// };

export default GallerySectionThree;
