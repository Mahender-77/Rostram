import { Box, Typography } from "@mui/material";
import { useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { supportData } from "../../constants/data";
import { useParams } from "react-router-dom";

export const Support = () => {
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
        height: {
          xs: selectedIndex === 1 ? "210vh" : "",
         
        },
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {/* Main Layout */}
      <Box sx={{ display:{
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
          {supportData.map((item, index) => (
            <Box
              key={index}
              onClick={() => setSelectedIndex(index)}
              sx={{
                color:
                  selectedIndex === index ? "var(--logoRed)" : "var(--white)",
                  width:{
                    xs: "90%",
                    lg: "100%",
                  },  
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
                    ? {xs:"2px solid var(--logoRed)",lg: "10px solid var(--logoRed)"}
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
            marginTop: {
              xs: 0,
              lg: 4,
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
                      }}> Dedicated Support Teams.</Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Nunito Sans, sans-serif",
              fontSize: "1.1rem",
              lineHeight: 1.6,
              whiteSpace: "pre-line",
              fontWeight: 500,
            }}
          >
            {supportData[selectedIndex].description}
          </Typography>
          {selectedIndex === 0 ? (
            <Box>
              <Typography
                sx={{
                  fontFamily: "Nunito Sans, sans-serif",
                  fontSize: "1.1rem",
                  color: "var(--logoRed)",
                  fontWeight: 900,
                }}
              >
                Spectrum of Application Maintenance & Support Services
              </Typography>
              <Typography sx={{ fontFamily: "Nunito Sans, sans-serif" }}>
                Dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias excepturi
                sint occaecati cupiditate non provident, similique sunt.
              </Typography>
            </Box>
          ) : null}

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
            }}
          >
            Rostram's services will help you:
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            {supportData[selectedIndex].tools.map((tool, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: "rgba(255, 0, 0, 0.1)",
                  padding: 2,
                  borderRadius: 1,
                  width: {
                    xs: "90%",
                    sm: "45%",
                    md: "30%",
                    lg: "45%",
                    xl: "45%",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Nunito Sans, sans-serif",
                    fontSize: "1.1rem",
                    color: "var(--logoRed)",
                    fontWeight: 600,
                  }}
                >
                  {tool}
                </Typography>
              </Box>
            ))}
          </Box>

          {selectedIndex === 1 && supportData[selectedIndex].scope ? (
            <Box
              sx={{ position: "absolute", width: {xs:"100%",lg:"80%"}, top:{
                xs: "120%",
                lg:"75%"
              }, left: {
                xs:0,
                lg:90
              } }}
            >
              <Typography
                sx={{
                  fontFamily: "Nunito Sans, sans-serif",
                  fontSize: {
                    xs: "1.3rem",
                    sm: "1.5rem",
                    md: "1.5rem",
                    lg: "1.5rem",
                  },
                  color: "var(--blackText)",
                  fontWeight: 800,
                  p:1
                }}
              >
                The scope of software testing we execute covers the most of your
                needs:{" "}
              </Typography>
              <Box
                sx={{
                  display:{
                    xs:"column",
                    lg:"flex"
                  },
                  gap: 5,
                  p:1
                }}
              >
                {supportData[selectedIndex].scope.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      width: {
                        xs: "85%",
                        sm: "25%",
                        md: "25%",
                        lg: "25%",
                        xl: "25%",
                      },
                      marginTop: 2,
                      backgroundColor: "rgba(255, 0, 0, 0.1)",
                      borderRadius: 3,
                      p: 2,
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
                      {item.name}
                    </Typography>
                    <Typography sx={{ fontFamily: "Nunito Sans, sans-serif" }}>
                      {item.needs.map((need, index) => (
                        <Box key={index} sx={{}}>
                         <ArrowOutwardIcon sx={{ fontSize: '1rem' }} /> {need}
                        </Box>
                      ))}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};