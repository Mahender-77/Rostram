

import DesignCard from "../components/Cards/DesignCard";
import OurServices from "../components/Cards/OurSevices";
import AboutCard from "../components/Cards/AboutCard";
import Marquee from "../components/Cards/Marquee";
import Squad from "../components/Cards/Squad";
import ContactUs from "../components/ContactUs";
import { ImageCarousel } from "../components/ImageCarousel";
// import ImageCarousel from "../components/ImageCarousel";



export const Home = () => {
  
  return (
    <>
    {/* <ImageCarousel/> */}
      <ImageCarousel/>
      <DesignCard />
      <OurServices/>
      <AboutCard />
      <Marquee />
      <Squad />
      <ContactUs/>
    </>
  );
};
