import React from "react";
import { useEffect } from "react";

import GallerySectionFive from "../components/GallerySectionFive";
import GallerySectionNine from "../components/GallerySectionNine";
import GallerySectionOne from "../components/GallerySectionOne";
import GallerySectionSix from "../components/GallerySectionSix";
import GallerySectionThree from "../components/GallerySectionThree";
import GallerySectionTwo from "../components/GallerySectionTwo";
import GallerySectionSeven3 from "../components/GallerySectionSeven3";
import GallerySectionFour2 from "../components/GallerySectionFour2";
import GallerySectionEight2 from "../components/GallerySectionEight2";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <GallerySectionOne />
      <GallerySectionTwo />
      <GallerySectionThree />
      <GallerySectionEight2 />
      <GallerySectionFour2 />
      <GallerySectionFive />
      <GallerySectionSix />
      <GallerySectionNine />
      <GallerySectionSeven3 />
      
    </div>
  )
}

export default Gallery;