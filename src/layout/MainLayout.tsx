import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useRef } from "react";
import { SectionRefs } from "../pages/Home";

export const MainLayout = () => {
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
      <Navbar sectionRefs={sectionRefs} />
      <Outlet />
      <Footer />
    </>
  );
};
