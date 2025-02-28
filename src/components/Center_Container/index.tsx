import { useGSAP } from "@gsap/react";
import { Box } from "@mui/material"
import gsap from "gsap";

export const Center_Container = () => {
    useGSAP(() => {
    gsap.from(".animated-line", {
        delay: 2,
        duration: 5,
        strokeDasharray: 500,
        strokeDashoffset: 500,
        ease: "power2.inOut",
      });
    });
  return (
   <Box>
      <svg
        width="100%"
        
        height="400"
        viewBox="0 0 1000 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{border:"1px solid red" }}
      >
        <path
          className="animated-line"
        //   d="M50,250 C10,10 10,20 3,100 L50,100 L50,100 L100,100 L100,50 L150,50 L150,100 L200,100 L200,250    C700,300 200,20 0,200  C100,200 20,0 700 C100,200 20,0 700,-20 C700,300 200,20 0,200 Z"
//           d="M1000,300  
// C950,250 920,150 880,200  
// L880,20 L840,50 L840,200  
// C800,100 750,350 700,200  
// L700,200 L660,100 L660,200  
// C600,200 550,150 500,300  
// C450,150 400,100 350,150  
// C300,100 250,300 200,250  
// C150,50 100,100 50,300"
          d="M1300,5 C900,300 -300,-80 500,-50 800,-50 500,300 200,100 20,1000"
          stroke="#E73A3C"
          strokeWidth="5"
          fill="none"
        />
        {/* <circle cx="200" cy="50" r="5" fill="#E73A3C" />
        <circle cx="300" cy="50" r="5" fill="#E73A3C" />
        <circle cx="100" cy="50" r="5" fill="#E73A3C" /> */}
      </svg>
   </Box>
  )
}
