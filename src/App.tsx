import { useRef } from "react";
import AboutCard from "./components/Cards/AboutCard";
import DesignCard from "./components/Cards/DesignCard";
import Marquee from "./components/Cards/Marquee";
import Navbar from "./components/Navbar";
// import Services from "./components/Services";
import Squad from "./components/Cards/Squad";
// import OurTeam from "./components/Cards/OurTeam";
import Footer from "./components/Footer";
// import OurServices from "./components/Cards/OurSevices";
import { ServiceCards } from "./components/Cards/ServicesCard";
import ContactUs from "./components/ContactUs";
import OurTeam from "./components/Cards/OurTeam";
import OurServices from "./components/Cards/OurSevices";
// import OurTeam from "./components/Cards/OurTeam";

export type SectionRefs = {
  aboutRef: React.RefObject<HTMLDivElement | null>;
  servicesRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
  // design: React.RefObject<HTMLDivElement | null>;
  // marquee: React.RefObject<HTMLDivElement | null>;
  // center: React.RefObject<HTMLDivElement | null>;
};

function App() {
  const sectionRefs: SectionRefs = {
    aboutRef: useRef<HTMLDivElement | null>(null),
    servicesRef: useRef<HTMLDivElement | null>(null),
    contactRef: useRef<HTMLDivElement | null>(null),
    // design: useRef<HTMLDivElement | null>(null),
    // marquee: useRef<HTMLDivElement | null>(null),
    // center: useRef<HTMLDivElement | null>(null),
  };
  // const aboutRef = useRef(null);

  return (
    <>
      <Navbar sectionRefs={sectionRefs} />
      <DesignCard />
      {/* <Services ref={sectionRefs.servicesRef} /> */}
      <OurServices />
      <ServiceCards />
      <AboutCard ref={sectionRefs.aboutRef} />
      <Marquee />
      {/* <OurTeam /> */}
      <Squad />
      <ContactUs ref={sectionRefs.contactRef} />
      <Footer />
      {/* <Center_Container ref={sectionRefs.center}/> */}
    </>
    //   <>
    //   <Navbar aboutRef={aboutRef} /> {/* Pass ref to Navbar */}
    //   <DesignCard />
    //   <Services />
    //   <AboutCard ref={aboutRef} /> {/* Attach ref to AboutCard */}
    //   <Marquee />
    //   {/* <Center_Container /> */}
    // </>
  );
}
export default App;
