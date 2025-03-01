import { Box } from "@mui/material";

import logo from "../../../assets/rostram_logo-removebg-preview.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Marquee = () => {
    
   

    useGSAP(()=>{
        gsap.to(".marquee",{
            xPercent: -100,
            // repeatRefresh:true,
            repeat: -1,
            ease: "none",
            duration: 2,
        })
    })

  return (
    <Box>
      <Box
        className="move"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          gap:1 ,
        //   border:"1px solid red"
        }}
      >
        <Box className="marquee">
          <img width={200} src={logo} alt="" />
        </Box>
        <Box className="marquee">
          <img width={200} src={logo} alt="" />
        </Box>
        <Box className="marquee">
          <img width={200} src={logo} alt="" />
        </Box>
        <Box className="marquee">
          <img width={200} src={logo} alt="" />
        </Box>
        <Box className="marquee">
          <img width={200} src={logo} alt="" />
        </Box>
        <Box className="marquee">
          <img width={200} src={logo} alt="" />
        </Box>
        <Box className="marquee">
          <img width={200} src={logo} alt="" />
        </Box>
        <Box className="marquee">
          <img width={200} src={logo} alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default Marquee;
