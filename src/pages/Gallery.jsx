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

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <GallerySectionOne />
      <GallerySectionTwo />
      <GallerySectionThree />
      <GallerySectionFour />
      <GallerySectionFive />
      <GallerySectionSix />
      <GallerySectionEight />
      <GallerySectionNine />
      <GallerySectionSeven2 />
      
    </div>
  )
}

export default Gallery;