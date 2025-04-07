import { useEffect, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import designimg from "../../../assets/Circles-cuate.png";
import developimg from "../../../assets/Mobile development-bro.png";
import growimg from "../../../assets/Growth curve-cuate.png";
import gsap from "gsap";

const Slide = [
  {
    name: "Design",
    color: "#56C03C",
    description:
      "We create an attractive UI/UX design after conducting thorough research on your niche which helps to survive in this ever-evolving business world.",
    image: designimg,
    svg: "M1 220C1 220 500.5 -100.5 353.5 100.5C206.5 301.5 647.5 161.5 647.5 161.5V133L761.5 19.0002C795.5 19.0002 792 31 792 49L678.314 161.5C678.314 161.5 1285 -106 1122 49C959 204 1437 161.5 1437 161.5",
  },
  {
    name: "Develop",
    color: "#3FC0F0",
    description:
      "We take your brand's vision to develop your e-commerce store on a platform of your choice so that you can enjoy all the benefits.",
    image: developimg,
    svg: "M1 3.49998C65.0753 83.5964 603 -16 622.5 3.49998C642 23 551 44 551 75C551 106 603 127 622.5 146.5C642 166 673.5 3.49998 694.5 3.49998C715.5 3.49998 766 53 766 75C766 97 661.5 146.5 694.5 146.5C727.5 146.5 1439.5 255 1439.5 146.5",
  },
  {
    name: "Grow",
    color: "#FFC400",
    description:
      " We ensure your product reaches the right audience with seamless deployment, performance optimizations, and continuous support.",
    image: growimg,
    svg: "M0.5 196.499C110.5 240 458 226.5 476 196.499C494 166.499 478 167.499 497 148.499C516 129.499 566.5 165.499 602.5 148.499C638.5 131.5 617 109.499 638.5 87.9994C660 66.4994 800 95 817.5 77.5C835 60 834 0.999939 865.5 0.999939C897 0.999939 1333.5 47.5 1439 10.0001",
  },
];

const DesignCard = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(carouselRef.current, {
      x: "-100vw",
      duration: 2,
      delay: 5,
      ease: "power2.inOut",
    }) // Slide 1 → Slide 2
      .to(carouselRef.current, { x: "-100vw", duration: 3 }) // Stay on Slide 2
      .to(carouselRef.current, {
        x: "-200vw",
        duration: 2,
        ease: "power2.inOut",
      }) // Slide 2 → Slide 3
      .to(carouselRef.current, { x: "-200vw", duration: 5 }) // Stay on Slide 3
      .to(carouselRef.current, {
        x: "-100vw",
        duration: 2,
        ease: "power2.inOut",
      }) // Slide 3 → Slide 1
      .to(carouselRef.current, { x: "-100vw", duration: 5 }) // Stay on Slide 2
      .to(carouselRef.current, { x: "0vw", duration: 2, ease: "power2.inOut" }) // Slide 3 → Slide 1
      .to(carouselRef.current, { x: "0vw", duration: 5 }); // Stay on Slide 1
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        overflow: "hidden",
        marginTop: "6rem",
      }}
    >
      <Box
        ref={carouselRef}
        sx={{
          display: "flex",
          width: "300vw", // Ensures all three slides fit
        }}
      >
        {Slide.map((slide, index) => (
          <Box
            key={index}
            sx={{
              minWidth: "100vw",
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* SVG Background */}
            {/* <svg
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
              <path d={slide.svg} stroke={slide.color} strokeWidth="10" />
            </svg> */}

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
                  // backgroundColor: slide.color,
                  // width: "28%",
                  fontSize: "50px",
                  fontWeight: 600,
                  fontFamily: "Gilroy, sans-serif",
                  // padding: "0 10px",
                  color: "var(--blackButton)",
                }}
              >
                {slide.name}
              </Typography>
              <Typography
                sx={{
                  width: "60%",
                  fontSize: "1rem",
                  fontWeight: 500,
                  fontFamily: "Gilroy, sans-serif",
                  color: "var(--blackbackGround)",
                }}
              >
                {slide.description}
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  width: "10rem",
                  border: `1px solid var(--blackButton)`,
                  // borderBottom: `10px solid ${slide.color}`,
                  borderRadius: 2,
                  backgroundColor: slide.color,
                  color: "var(--blackButton)",
                  textTransform: "capitalize",
                  padding: 1,
                  fontSize: "1rem",
                  fontWeight: 600,
                  fontFamily: "Gilroy, sans-serif",
                }}
              >
                KNOW MORE
              </Button>
            </Box>
            <Box>
              <img height="420px" src={slide.image} alt="" />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DesignCard;
