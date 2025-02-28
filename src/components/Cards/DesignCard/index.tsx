import React, { useEffect, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import designimg from "../../../assets/Circles-cuate.png";
import developimg from "../../../assets/Mobile development-bro.png";
import growimg from "../../../assets/Growth curve-cuate.png"
import gsap from "gsap";

const DesignCard = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(carouselRef.current, { x: "-100vw", duration: 2,delay:5, ease: "power2.inOut" }) // Slide 1 → Slide 2
      .to(carouselRef.current, { x: "-100vw", duration: 3 }) // Stay on Slide 2
      .to(carouselRef.current, { x: "-200vw", duration: 2, ease: "power2.inOut" }) // Slide 2 → Slide 3
      .to(carouselRef.current, { x: "-200vw", duration: 5 }) // Stay on Slide 3
      .to(carouselRef.current, { x: "-100vw", duration: 2, ease: "power2.inOut" }) // Slide 3 → Slide 1
      .to(carouselRef.current, { x: "-100vw", duration: 5 }) // Stay on Slide 2
      .to(carouselRef.current, { x: "0vw", duration: 2, ease: "power2.inOut" }) // Slide 3 → Slide 1
      .to(carouselRef.current, { x: "0vw", duration: 5 }); // Stay on Slide 1
  }, []);

  return (
    <Box sx={{ display: "flex", width: "100%", overflow: "hidden" }}>
      <Box
        ref={carouselRef}
        sx={{
          display: "flex",
          width: "300vw", // Ensures all three slides fit
        }}
      >
        {/* First Slide */}
        <Box sx={{ minWidth: "100vw", display: "flex", justifyContent: "center", position: "relative" }}>
  {/* SVG Background */}
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 1440 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -10, // Ensures the SVG stays in the background
    }}
  >
    <path
      d="M1 220C1 220 500.5 -100.5 353.5 100.5C206.5 301.5 647.5 161.5 647.5 161.5V133L761.5 19.0002C795.5 19.0002 792 31 792 49L678.314 161.5C678.314 161.5 1285 -106 1122 49C959 204 1437 161.5 1437 161.5"
      stroke="lightgreen"
      strokeWidth="10"
    />
  </svg>

  <Box
    sx={{
      width: "40%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      paddingTop: "50px",
      gap: 3,
    }}
  >
    <Typography sx={{ backgroundColor: "lightgreen", width: "26%", fontSize: "50px", fontWeight: 600, padding: "0 10px" }}>
      Design
    </Typography>
    <Typography sx={{ width: "60%" }}>
      We create an attractive UI/UX design after conducting thorough research on your niche which helps to survive in this ever-evolving business world.
    </Typography>
    <Button variant="outlined">KNOW MORE</Button>
  </Box>
  <Box>
    <img height="420px" src={designimg} alt="" />
  </Box>
</Box>

<Box sx={{ minWidth: "100vw", display: "flex", justifyContent: "center", position: "relative" }}>
<svg
    width="100%"
    height="100%"
    viewBox="0 0 1440 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -10, // Ensures the SVG stays in the background
    }}
  >
    <path
      d="M1 220C1 220 500.5 -100.5 353.5 100.5C206.5 301.5 647.5 161.5 647.5 161.5V133L761.5 19.0002C795.5 19.0002 792 31 792 49L678.314 161.5C678.314 161.5 1285 -106 1122 49C959 204 1437 161.5 1437 161.5"
      stroke="#3FC0F0"
      strokeWidth="10"
    />
  </svg>
<Box sx={{ minWidth: "100vw", display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: "40%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              paddingTop: "50px",
              gap: 3,
            }}
          >
            
            <Typography sx={{ backgroundColor: "#3FC0F0", width: "30%", fontSize: "50px", fontWeight: 600, padding: "0 10px" }}>
              Develop
            </Typography>
            <Typography sx={{ width: "60%" }}>
              We take your brand's vision to develop your e-commerce store on a platform of your choice so that you can enjoy all the benefits.
            </Typography>
            <Button variant="outlined">KNOW MORE</Button>
          </Box>
          <Box>
            <img height="420px" src={developimg} alt="" />
          </Box>
        </Box>
</Box>
        {/* Second Slide */}
       

        {/* Third Slide */}
        <Box sx={{ minWidth: "100vw", display: "flex", justifyContent: "center", position: "relative" }}>
        <svg
    width="100%"
    height="100%"
    viewBox="0 0 1440 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -10, // Ensures the SVG stays in the background
    }}
  >
    <path
      d="M1 220C1 220 500.5 -100.5 353.5 100.5C206.5 301.5 647.5 161.5 647.5 161.5V133L761.5 19.0002C795.5 19.0002 792 31 792 49L678.314 161.5C678.314 161.5 1285 -106 1122 49C959 204 1437 161.5 1437 161.5"
      stroke="#FFC400"
      strokeWidth="10"
    />
  </svg>
        <Box sx={{ minWidth: "100vw", display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: "40%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              paddingTop: "50px",
              gap: 3,
            }}
          >
            <Typography sx={{ backgroundColor: "#FFC400", width: "20%", fontSize: "50px", fontWeight: 600, padding: "0 10px" }}>
              Grow
            </Typography>
            <Typography sx={{ width: "60%" }}>
              We ensure your product reaches the right audience with seamless deployment, performance optimizations, and continuous support.
            </Typography>
            <Button variant="outlined">KNOW MORE</Button>
          </Box>
          <Box>
            <img height="420px" src={growimg} alt="" />
          </Box>
        </Box>
        </Box>
      
      </Box>
    </Box>
  );
};

export default DesignCard;
