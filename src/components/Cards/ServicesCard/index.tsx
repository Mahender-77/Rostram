import { useEffect, useRef } from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

import itserviceimg from "../../../assets/IT.gif";
import ITSupportImg from "../../../assets/Service.gif";
import VFXImg from "../../../assets/VFX.gif";

const services = [
  {
    id: 1,
    title: "IT Service",
    description:
      "Custom Application Development, Product Development, Analytic Product Re-engineering, Mobile Application Development & Testing.",
    image: itserviceimg,
    color: "#E82C2D",
    position: { top: 10, left: 280 },
  },
  {
    id: 3,
    title: "VFX",
    description:
      "3D & Game Production, VFX Production, CGI Tools Development & VFX Pipeline Development.",
    image: VFXImg,
    color: "#04BE0B",
    position: { top: 450, right: 280 },
  },
  {
    id: 4,
    title: "Support",
    description:
      "App Support & Maintenance, Quality Assurance, Cloud Support, DevOps Support, IT Consulting.",
    image: ITSupportImg,
    color: "#6AC4E9",
    position: { top: 900, left: 280 },
  },
];

export const ServiceCards = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const horizontalLinesRef = useRef<(HTMLDivElement | null)[]>([]);





  useEffect(() => {
    const cards = services.map((service) => `#card-${service.id}`);

    // Set initial color to white
    if (lineRef.current) {
      lineRef.current.style.background = "#ffffff";
    }

    horizontalLinesRef.current.forEach((line) => {
      if (line) {
        line.style.background = "#ffffff";
      }
    });

    cards.forEach((cardId, index) => {
      ScrollTrigger.create({
        trigger: cardId,
        start: "top center",
        end: "bottom center",
        onUpdate: (self) => {
          const currentLine = horizontalLinesRef.current[index];
          if (self.progress === 0) {
            if (index === 0) {
              gsap.to(lineRef.current, {
                background: "#ffffff",
                duration: 0.5,
                ease: "power2.out",
              });
              gsap.to(currentLine, {
                background: "#ffffff",
                duration: 0.5,
                ease: "power2.out",
              });
            } else {
              gsap.to(lineRef.current, {
                background: services[index - 1].color,
                duration: 0.5,
                ease: "power2.out",
              });
              gsap.to(currentLine, {
                background: services[index - 1].color,
                duration: 0.5,
                ease: "power2.out",
              });
            }
          } else {
            gsap.to(lineRef.current, {
              background: services[index].color,
              duration: 0.5,
              ease: "power2.out",
            });
            gsap.to(currentLine, {
              background: services[index].color,
              duration: 0.5,
              ease: "power2.out",
            });
          }
        },
        scrub: true,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        // border: "1px solid white",
        position: "relative",
        width: "auto",
        height: "1450px",
        margin: "auto",
        mt: 5,
        paddingTop:"5%"
      }}
    >
      <Typography
        sx={{
          position:"absolute", 
          px:2, 
          color: "white",
          fontSize: "2rem",
          fontWeight: 600,
          marginLeft: "10%",
          top:0,
          backgroundColor:"#E82C2D"
        }}
      >
        WHAT WE DO?
      </Typography>
      {/* Vertical Line */}
      <Box
        ref={lineRef}
        sx={{
          position: "absolute",
          top: "5px",
          left: "50%",
          width: "5px",
          height:{xl: "1450px",},
          backgroundColor: "#ffffff",
          transform: "translateX(-50%)",
          transition: "background 0.5s ease",
        }}
      />
      {services.map((service, index) => (
        <Box key={service.id} sx={{ position: "relative" }}>
          {/* Horizontal connector line */}
          <Box
            ref={(el: HTMLDivElement | null) => {
              if (el) horizontalLinesRef.current[index] = el;
            }}
            sx={{
              position: "absolute",
              width: service.position.left ? {xl:"150px"} : "148px",
              height: "5px",
              backgroundColor: "#ffffff",
              top: `${service.position.top + 225}px`,
              left: service.position.left
                ? "calc(50% - 152px)"
                : "calc(41.5% + 137px)",
              zIndex: 1,
              transition: "background 0.5s ease",
            }}
          />
          <Card
            id={`card-${service.id}`}
            sx={{
              width: 360,
              height: 450,
              position: "absolute",
              ...service.position,
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
              bgcolor: "rgba(0, 0, 0, 0.85)",
              color: "white",
              borderRadius: 3,
              borderBottom: `10px solid ${service.color}`,
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: `0 12px 24px ${service.color}70`,
              },
            }}
          >
            {/* IMAGE AS BACKGROUND */}
            <Box
              sx={{
                height: 200,
                backgroundImage: `url(${service.image})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))",
                },
              }}
            />

            {/* CONTENT */}
            <CardContent sx={{ p: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  color: service.color,
                  fontWeight: 600,
                  fontSize: "1.4rem",
                  textTransform: "uppercase",
                }}
              >
                {service.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "gray.300",
                  mb: 3,
                  fontSize: "1rem",
                  lineHeight: 1.6,
                }}
              >
                {service.description}
              </Typography>

              {/* BUTTON - Bigger & Better */}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: service.color,
                  color: "white",
                  fontWeight: 600,
                  fontSize: "1rem",
                  borderRadius: "8px",
                  px: 3,
                  py: 1.2,
                  "&:hover": {
                    backgroundColor: `${service.color}CC`,
                  },
                }}
              >
                Explore More
              </Button>
            </CardContent>
          </Card>
        </Box>
      ))}{" "}
    </Box>
  );
};
