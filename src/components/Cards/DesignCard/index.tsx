import React, { useEffect, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import designimg from "../../../assets/Circles-cuate.png";
import gsap from "gsap";

const DesignCard = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    gsap.to(carouselRef.current, {
      xPercent: -100, // Move left continuously
      duration: 8, // Control speed
      ease: "linear", // Smooth infinite motion
      repeat: -1, // Infinite loop
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0), // Seamless transition
      },
    });
  }, []);

  return (
    <Box sx={{ display: "flex", width: "100%", overflow: "hidden" }}>
      <Box
        ref={carouselRef}
        sx={{
          display: "flex",
          width: "200vw", // Ensures both slides fit
        }}
      >
        {/* First Slide */}
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
            <Typography
              sx={{
                backgroundColor: "lightgreen",
                width: "26%",
                fontSize: "50px",
                fontWeight: 600,
                padding: "0 10px",
              }}
            >
              Design
            </Typography>
            <Typography sx={{ width: "60%" }}>
              We create an attractive UI/UX design after conducting thorough research
              on your niche which helps to survive in this ever-evolving business
              world.
            </Typography>
            <Button variant="outlined">KNOW MORE</Button>
          </Box>
          <Box>
            <img height="420px" src={designimg} alt="" />
          </Box>
        </Box>

        {/* Second Slide (Duplicate for Seamless Effect) */}
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
            <Typography
              sx={{
                backgroundColor: "lightgreen",
                width: "26%",
                fontSize: "50px",
                fontWeight: 600,
                padding: "0 10px",
              }}
            >
              Design
            </Typography>
            <Typography sx={{ width: "60%" }}>
              We create an attractive UI/UX design after conducting thorough research
              on your niche which helps to survive in this ever-evolving business
              world.
            </Typography>
            <Button variant="outlined">KNOW MORE</Button>
          </Box>
          <Box>
            <img height="420px" src={designimg} alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DesignCard;
