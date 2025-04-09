import { useRef } from "react";

import DesignCard from "../components/Cards/DesignCard";
import OurServices from "../components/Cards/OurSevices";
import AboutCard from "../components/Cards/AboutCard";
import Marquee from "../components/Cards/Marquee";
import Squad from "../components/Cards/Squad";
import ContactUs from "../components/ContactUs";

export type SectionRefs = {
    aboutRef: React.RefObject<HTMLDivElement | null>;
    servicesRef: React.RefObject<HTMLDivElement | null>;
    contactRef: React.RefObject<HTMLDivElement | null>;
    // design: React.RefObject<HTMLDivElement | null>;
    // marquee: React.RefObject<HTMLDivElement | null>;
    // center: React.RefObject<HTMLDivElement | null>;
  };

export const Home = () => {
  const sectionRefs: SectionRefs = {
    aboutRef: useRef<HTMLDivElement | null>(null),
    servicesRef: useRef<HTMLDivElement | null>(null),
    contactRef: useRef<HTMLDivElement | null>(null),
    // design: useRef<HTMLDivElement | null>(null),
    // marquee: useRef<HTMLDivElement | null>(null),
    // center: useRef<HTMLDivElement | null>(null),
  };
  return (
    <>
      <DesignCard />
      <OurServices ref={sectionRefs.servicesRef} />
      <AboutCard ref={sectionRefs.aboutRef} />
      <Marquee />
      <Squad />
      <ContactUs ref={sectionRefs.contactRef} />
    </>
  );
};
