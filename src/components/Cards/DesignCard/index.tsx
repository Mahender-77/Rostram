import React, { useEffect, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import designimg from "../../../assets/Circles-cuate.png";
import gsap from "gsap";

const DesignCard = () => {
  const carouselRef = useRef(null);
  const animatedLineRef = useRef(null); // Ref to the SVG path

  useEffect(() => {
    // GSAP timeline for the carousel sliding animation
    const tl = gsap.timeline({ repeat: -1, paused: true });

    // Animation for moving the carousel slides
    tl.to(carouselRef.current, {
      x: "-100vw", // Move left to next slide
      duration: 1,
      ease: "power2.inOut",
    })
      .to(carouselRef.current, { x: "-100vw", duration: 5 }) // Stay for 5s
      .to(carouselRef.current, {
        x: "0vw", // Move back to the first slide
        duration: 1,
        ease: "power2.inOut",
      })
      .to(carouselRef.current, { x: "0vw", duration: 5 }); // Stay for 5s

    // Function to animate the SVG line
    const animateLine = () => {
      const path = animatedLineRef.current;
      const length = path.getTotalLength();

      // Reset the path before starting the animation
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      // Animate the strokeDashoffset to 0 (fully revealed)
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 10,
        ease: "power2.inOut",
      });
    };

    // Trigger animation on the first slide and on each slide transition
    const handleSlideChange = () => {
      animateLine();
    };

    // Play the timeline animation
    tl.play();

    // Call handleSlideChange whenever the timeline changes the slide
    tl.eventCallback("onStart", handleSlideChange); // Trigger the animation when a slide starts
    tl.eventCallback("onReverseComplete", handleSlideChange); // Reset on reverse to animate the next slide

    // Start the animation loop
    tl.play();
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
        <Box
          sx={{
            minWidth: "100vw",
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <path
                ref={animatedLineRef}
                d="M1 220C1 220 500.5 -100.5 353.5 100.5C206.5 301.5 647.5 161.5 647.5 161.5V133L761.5 19.0002C795.5 19.0002 792 31 792 49L678.314 161.5C678.314 161.5 1285 -106 1122 49C959 204 1437 161.5 1437 161.5"
                stroke="lightgreen"
                strokeWidth="5"
                fill="none"
              />
            </svg>
          </Box>
          <Box
            sx={{
              width: "80%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              paddingTop: "50px",
              gap: 3,
            }}
          >
            <Box>
              <img
                height="420px"
                src={designimg}
                style={{ transform: "scaleX(-1)" }}
                alt=""
              />
            </Box>
            <Box>
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
                We create an attractive UI/UX design after conducting thorough
                research on your niche which helps to survive in this
                ever-evolving business world.
              </Typography>
              <Button variant="outlined">KNOW MORE</Button>
            </Box>
          </Box>
        </Box>

        {/* Second Slide */}
        <Box
          sx={{
            minWidth: "100vw",
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <path
                ref={animatedLineRef}
                d="M1 220C1 220 500.5 -100.5 353.5 100.5C206.5 301.5 647.5 161.5 647.5 161.5V133L761.5 19.0002C795.5 19.0002 792 31 792 49L678.314 161.5C678.314 161.5 1285 -106 1122 49C959 204 1437 161.5 1437 161.5"
                stroke="lightgreen"
                strokeWidth="5"
                fill="none"
              />
            </svg>
          </Box>
          <Box
            sx={{
              width: "80%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              paddingTop: "50px",
              gap: 3,
            }}
          >
            <Box>
              <img
                height="420px"
                src={designimg}
                style={{ transform: "scaleX(-1)" }}
                alt=""
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  backgroundColor: "lightgreen",
                  width: "26%",
                  fontSize: "50px",
                  fontWeight: 600,
                  padding: "0 10px",
                }}
              >
                Develop
              </Typography>
              <Typography sx={{ width: "60%" }}>
                We create an attractive UI/UX design after conducting thorough
                research on your niche which helps to survive in this
                ever-evolving business world.
              </Typography>
              <Button variant="outlined">KNOW MORE</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DesignCard;
