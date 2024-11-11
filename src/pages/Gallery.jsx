import React from "react";
import { useEffect } from "react";

import GallerySectionEight from "../components/GallerySectionEight";
import GallerySectionFive from "../components/GallerySectionFive";
import GallerySectionFour from "../components/GallerySectionFour";
import GallerySectionNine from "../components/GallerySectionNine";
import GallerySectionOne from "../components/GallerySectionOne";
import GallerySectionSeven from "../components/GallerySectionSeven";
import GallerySectionSix from "../components/GallerySectionSix";
import GallerySectionThree from "../components/GallerySectionThree";
import GallerySectionTwo from "../components/GallerySectionTwo";
import GallerySectionSeven2 from "../components/GallerySectionSeven2";
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
      <GallerySectionFour2 />
      <GallerySectionFive />
      <GallerySectionSix />
      <GallerySectionEight2 />
      <GallerySectionNine />
      <GallerySectionSeven3 />
      
    </div>
  )
}

export default Gallery;