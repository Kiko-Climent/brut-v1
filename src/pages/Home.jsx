import React from "react";
import { useEffect } from "react";

import Intro from "../components/Intro";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
import QuoteSectionOne from "../components/QuoteSectionOne";


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <QuoteSectionOne />
      <SectionThree />
      <SectionFour />
      <Intro />
    </>
  );
};

export default Home;
