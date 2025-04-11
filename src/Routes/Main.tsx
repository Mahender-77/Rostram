import { Box } from "@mui/material";

import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { Home } from "../pages/Home";

import { VFX } from "../components/VFX";
import { ITService } from "../components/ITService";
import { Support } from "../components/Support";

export const Main = () => {
 
  return (
    <Box>
      <Routes>
        <Route  element={<MainLayout/>}>
           <Route path="/" element={<Home/>}/>
           <Route path="/VFX/:idx" element={<VFX/>}/>
           <Route path="/ITServices/:idx" element={<ITService/>} />
           <Route path="/Support/:idx" element={<Support/>} />
         </Route>
      </Routes>
     
    </Box>
  );
};
