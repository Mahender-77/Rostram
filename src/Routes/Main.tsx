import { Box } from "@mui/material";

import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { Home } from "../pages/Home";

export const Main = () => {
 
  return (
    <Box>
      <Routes>
        <Route  element={<MainLayout/>}>
           <Route path="/" element={<Home/>}/>
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
