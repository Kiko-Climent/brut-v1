import React from "react";
import { useEffect } from "react";

import AboutOne from "../components/AboutOne";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutOne />
    </div>
  )
}

export default About;