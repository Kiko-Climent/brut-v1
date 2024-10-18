import Intro from "../components/Intro";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import SectionThree from "../components/SectionThree";
import SectionFour from "../components/SectionFour";
import QuoteSectionOne from "../components/QuoteSectionOne";


const Home = () => {
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
