import React, { useEffect, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import designimg from "../../../assets/Circles-cuate.png";
import gsap from "gsap";

const DesignCard = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(carouselRef.current, {
      x: "-100vw", // Move left to next slide
     // Smooth slide duration
     duration:1,
      ease: "power2.inOut",
    })
      .to(carouselRef.current, { x: "-100vw", duration:5 }) // Stay for 5s
      .to(carouselRef.current, {
        x: "0vw", // Move back to the first slide
        duration:1,
        ease: "power2.inOut",
      })
      .to(carouselRef.current, { x: "0vw", duration: 5 }); // Stay for 5s
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

        {/* Second Slide */}
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
