import { Box, Typography } from "@mui/material";
import { useState } from "react";
import CGI from "../../assets/isometric-view-3d-rendering-neon-city.jpg";

export const VFX = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const VFXData = [
    {
      title: "VFX Production",
      content: [
        {
          image: "https://www.rostram.com/images/services/2.png",
          description:
            "We elevate brand distinction with awe-inspiring, refined visual design, embodying a design philosophy that exudes elegance. Our expertise lies in crafting cinematic visuals that captivate audiences, communicate emotion, and enhance storytelling. With a blend of cutting-edge technology and artistic precision, we transform concepts into immersive experiences that leave a lasting impression. Whether it's through high-end simulations, stylized CGI, or seamless VFX integration, our solutions push the boundaries of creativity and innovation.",
        },
      ],
      tools: [
        "VFX",
        " VFX Simulation",
        "VFX Production",
        "VFX Tools",
      ],
    },
    {
      title: "VFX Pipeline Development",
      content: [
        {
          image: "https://www.rostram.com/images/services/4.png",
          description:
            "We specialize in engineering cutting-edge VFX tools that empower seamless production workflows and enhance creative possibilities. Trusted by leading studios and production houses, our solutions play a pivotal role in shaping the future of VFX pipeline development — driving efficiency, scalability, and innovation from concept to final frame.",
        },
      ],
      tools: [
        "VFX Tool Development",
        " VFX Pipeline",
      
      ],
    },
    {
      title: "CGI Tools Development",
      content: [
        {
          image: CGI,
          description:
            "We amplify brand presence through sophisticated, story-driven visual design that resonates with modern audiences. Our design philosophy is intricately aligned with the technical and creative demands of CGI development — ensuring every visual element integrates seamlessly into complex pipelines while maintaining artistic integrity and brand coherence.",
        },
      ],
      tools: [
        " Green Matte removals",
        "Wire removals",
        "CGI Production",
       
      ],
    },
    {
      title: "3D & GAME Production",
      content: [
        {
          image: "https://www.rostram.com/images/services/2.png",
          description:
            "We craft mesmerizing digital experiences across video games, virtual reality, film, and a wide range of digital platforms. Backed by a collaborative team of visionary artists, designers, programmers, and technical experts, we bring ideas to life through striking 3D models, immersive environments, and dynamic animations. Every project is a fusion of creativity and precision, designed to captivate audiences and elevate digital storytelling to new heights.",
        },
      ],
      tools: [
        "3D Modeling & Animation",
        " Game Modeling & Animation",
        "VFX Pre Production",
        "VFX Post Production",
        "CGI Tools Development",
      ],
    },
  ];

  return (
    <Box
      sx={{
        marginTop: "100px",
        width: "100%",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
    
      {/* Main Layout */}
      <Box sx={{ display: "flex", width: "100%", gap: 4 }}>
        {/* Left Side Navigation */}
        <Box
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            marginTop: 10,
            marginLeft: 10,
          }}
        >
                <Typography 
        sx={{fontFamily: "Nunito Sans, sans-serif",
        fontSize: "1.5rem",
        color: "var(--logoRed)",
        fontWeight: 800,
        }}
        >20+ Years of Experience</Typography>
          {VFXData.map((item, index) => (
            <Box
              key={index}
              onClick={() => setSelectedIndex(index)}
              sx={{
                // backgroundColor: "var(--grayFooter)",
                color:
                  selectedIndex === index ? "var(--logoRed)" : "var(--white)",
                padding: 2,
                paddingY: 3,
                fontSize: "1.2rem",
                fontFamily: "Nunito Sans, sans-serif",
                fontWeight: selectedIndex === index ? 600 : 500,
                borderRight:
                  selectedIndex === index
                    ? "10px solid var(--logoRed)"
                    : "none",
                backgroundColor:
                  selectedIndex === index
                    ? "rgba(255, 0, 0, 0.1)"
                    : "var(--grayFooter)",
                cursor: "pointer",
                borderRadius: 1,
                transition: "all 0.3s ease",
              }}
            >
              {item.title}
            </Box>
          ))}
        </Box>

        {/* Right Side Content */}
        <Box
          sx={{
            width: "75%",
            padding: 4,
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            gap: 4,
          }}
        >
          <Box sx={{ display: "flex", gap: 4 }}>
            <Box
              component="img"
              src={VFXData[selectedIndex].content[0].image}
              alt={VFXData[selectedIndex].title}
              sx={{
                width: "400px",
                height: "auto",
                borderRadius: 2,
                objectFit: "cover",
              }}
            />

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3,marginLeft:2 }}>
              {VFXData[selectedIndex].tools.map((tool, toolIndex) => (
                <Box
                  key={toolIndex}
                  sx={{
                    color: "var(--logoRed)",
                    paddingX: 2,
                    paddingY: 1,
                    borderRadius: 0,
                    listStyleType: "disc",
                    display: "list-item",
                    fontSize: "1.2rem",
                    fontFamily: "Nunito Sans, sans-serif",
                    fontWeight: 900,
                    letterSpacing: 0.5,
                  }}
                >
                  {tool}
                </Box>
              ))}
            </Box>
          </Box>

          <Typography
            variant="body1"
            sx={{
              fontFamily: "Nunito Sans, sans-serif",
              color: "var(--white)",
              fontSize: "1.1rem",
              lineHeight: 1.6,
            }}
          >
            {VFXData[selectedIndex].content[0].description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};


{/* <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
            {VFXData[selectedIndex].tools.map((tool, toolIndex) => (
              <Box
                key={toolIndex}
                sx={{
                  backgroundColor: "var(--logoRed)",
                  color: "#fff",
                  paddingX: 2,
                  paddingY: 1,
                  borderRadius: 2,
                  fontSize: "1.2rem",
                  fontFamily: "Nunito Sans, sans-serif",
                  boxShadow:
                    "rgba(255, 0, 0, 0.4) 5px 5px, rgba(238, 146, 146, 0.55) 10px 10px",
                  fontWeight: 600,
                  letterSpacing: 0.5,
                }}
              >
                {tool}
              </Box> */}