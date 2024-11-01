import React, { useState, useEffect } from "react";
import Intro from "../components/Intro";
// import SectionOne from "../components/SectionOne";
import SectionOneParallax from "../components/SectionOneParallax";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
import QuoteSectionOne from "../components/QuoteSectionOne";
import QuoteSectionThree from "../components/QuoteSectionThree";

const Home = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Función that is called once the img is charged
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      {/* Render SectionOneParallax first and pass handleImageLoad */}
      <SectionOneParallax onImageLoad={handleImageLoad} />

      {/* Show the rest of the content only when the img is charged */}
      {isImageLoaded && (
        <>
          <QuoteSectionThree />
          <SectionTwo />
          <QuoteSectionOne />
          <SectionThree />
          <SectionFour />
          <Intro />
        </>
      )}
    </>
  );
};

export default Home;
