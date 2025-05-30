import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { VFXData } from "../../constants/data";
import { useParams } from "react-router-dom";
// Types


export const VFX = () => {
  const { idx } = useParams<{ idx: string }>();
   
  const [selectedIndex, setSelectedIndex] = useState<number>(idx ? parseInt(idx) : 0);


  return (
    <Box
      sx={{
        marginTop: {
          xs: "80px",
          lg: "100px",
        },
        width: "100%",
        // height: "90vh",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {/* Main Layout */}
      <Box sx={{ display: {
        xs:"column",
        lg:"flex"
      }, width: "100%", gap: 4 }}>
        {/* Left Side Navigation */}
        <Box
          sx={{
            width: {
              xs: "99%",
              lg: "30%",
            },
            p:1,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            marginTop: {
              xs: 0,
              lg: 4,
            },
            marginLeft: {

              xs: 0,
              lg: 4,
            },
            // border:"1px solid red"
          }}
        >
          <Typography 
            sx={{
              fontFamily: "Nunito Sans, sans-serif",
              fontSize: "1.5rem",
              color: "var(--logoRed)",
              fontWeight: 800,
            }}
          >
            20+ Years of Experience
          </Typography>

          {VFXData.map((item, index) => (
            <Box
              key={index}
              onClick={() => setSelectedIndex(index)}
              sx={{
                width:{
                  xs: "90%",
                  lg: "100%",
                },
                color:
                  selectedIndex === index ? "var(--logoRed)" : "var(--white)",
                padding: {
                  xs: 1,
                  sm: 1,
                  md: 2,
                  lg: 2,
                  xl: 2,
                },
                paddingY: 3,
                fontSize: {
                  xs: "1rem",
                  sm: "1.2rem",
                  md: "1.2rem",
                  lg: "1.2rem", 
                  xl: "1.2rem",

                },
                fontFamily: "Nunito Sans, sans-serif",
                fontWeight: selectedIndex === index ? 800 : 500,
                borderRight:
                  selectedIndex === index
                    ?{ xs:"2px solid var(--logoRed)",lg: "10px solid var(--logoRed)"}
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
            width: {
              xs: "90%",
              lg: "75%",
            },
            padding: {
              xs: 2,
              sm: 2,
              md: 3,
              lg: 4,
              xl: 4,
            },
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            gap: 4,
            marginTop: {
              xs: 0,
              lg: 4,
            },
         
          }}
        >
               <Typography
            sx={{
              fontFamily: "Nunito Sans, sans-serif",
              fontSize: {
                xs: "1.3rem",
                sm: "2rem",
                md: "2rem",
                lg: "2rem",
              },
              color: "var(--logoRed)",
              fontWeight: 900,
            }}> End-to-End VFX Pipeline Tools.</Typography>
          <Box sx={{ display: {
            xs: "column",
            lg: "flex",
          }, gap: 4 }}>
            <Box
              component="img"
              src={VFXData[selectedIndex].content[0].image}
              alt={VFXData[selectedIndex].title}
              sx={{
                width: {
                  xs: "80%",
                  lg: "40%",
                },
                height: "auto",
                borderRadius: 2,
                objectFit: "cover",
              }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                marginLeft: 2,
              }}
            >
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
              fontWeight: 500,
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