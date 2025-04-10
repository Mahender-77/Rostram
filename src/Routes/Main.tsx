import { Box } from "@mui/material";

import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { Home } from "../pages/Home";
import { ServicesPage } from "../pages/ServicesPage";
import { VFX } from "../components/VFX";
import { ITService } from "../components/ITService";
import { Support } from "../components/Support";

export const Main = () => {
 
  return (
    <Box>
      <Routes>
        <Route  element={<MainLayout/>}>
           <Route path="/" element={<Home/>}/>
           <Route path="/VFX" element={<VFX/>}/>
           <Route path="/ITServices" element={<ITService/>} />
           <Route path="/Support" element={<Support/>} />
         </Route>
      </Routes>
      {/* <Navbar sectionRefs={sectionRefs} />
      <DesignCard />
      <OurServices ref={sectionRefs.servicesRef} />
      <AboutCard ref={sectionRefs.aboutRef} />
      <Marquee />
      <Squad />
      <ContactUs ref={sectionRefs.contactRef} />
      <Footer /> */}
      {/* <OurTeam /> */}
      {/* <Services ref={sectionRefs.servicesRef} /> */}
    </Box>
  );
};
