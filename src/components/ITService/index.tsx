import { Box, Typography } from "@mui/material";
import { useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { ITservice } from "../../constants/data";
import { useParams } from "react-router-dom";

export const ITService = () => {
  const { idx } = useParams<{ idx: string }>();
  const [selectedIndex, setSelectedIndex] = useState<number>(
    idx ? parseInt(idx) : 0
  );

  return (
    <Box
      sx={{
        marginTop: {
          xs: "80px",
          lg: "100px",
        },
        width: "100%",
        // height: selectedIndex === 0 ? "125vh" : "90vh",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {/* Main Layout */}
      <Box sx={{ display: {
        xs:"column",
        lg:"flex"
      }, width: "100%", gap: {
        xs: 0,
        lg: 4,
      } }}>
        {/* Left Side Navigation */}
        <Box
          sx={{
            width: {
              xs: "99%",
              lg: "30%",
            },
            p: 1,
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
          {ITservice.map((item, index) => (
            <Box
              key={index}
              onClick={() => setSelectedIndex(index)}
              sx={{
                // backgroundColor: "var(--grayFooter)",
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
            marginTop: 4,
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
            }}
          >
            Reliable IT Services.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Nunito Sans, sans-serif",
              fontSize: "1.1rem",
              whiteSpace: "pre-line",
              fontWeight: 500,
            }}
          >
            {ITservice[selectedIndex].description}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Nunito Sans, sans-serif",
              fontSize: "1.2rem",
              fontWeight: 800,
              color: "var(--logoRed)",
            }}
          >
            WE PERFORM
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {ITservice[selectedIndex].content &&
              ITservice[selectedIndex].content.map(
                (
                  item: {
                    icon?: React.ElementType;
                    name?: string;
                    description?: string;
                  },
                  index
                ) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      minWidth: "250px",
                    }}
                  >
                    {item.icon && (
                      <item.icon
                        sx={{ color: "var(--logoRed)", fontSize: "2rem" }}
                      />
                    )}
                    <Typography
                      sx={{
                        fontFamily: "Nunito Sans, sans-serif",
                        fontSize: "1.1rem",
                        fontWeight: 800,
                      }}
                    >
                      {item.name || item.description}
                    </Typography>
                  </Box>
                )
              )}
          </Box>
          {ITservice[selectedIndex].promises && (
            <Box
              sx={{ display: "flex", height: "300px", borderRadius: 2, gap: 2 }}
            >
              <Box
                sx={{
                  width: "48%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "var(--grayFooter)",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Nunito Sans, sans-serif",
                    fontSize:{
                      xs: "1rem",
                      sm: "2rem",
                      md: "2rem",
                      lg: "2rem",
                    },
                    color: "var(--logoRed)",
                    fontWeight: 900,
                  }}
                >
                  WHY ROSTRAM?
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: {
                    xs: 0.5,
                    sm: 1,
                    md: 1,
                    lg: 2,
                  },
                  width: "50%",
                  border:"1px solid red",
                  borderRadius: 2,
                }}
              >
                {ITservice[selectedIndex].promises.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: {
                        xs: 0,
                        sm: 1,
                        md: 2,
                        lg: 2,
                      },
                     
                    }}
                  >
                    <ArrowOutwardIcon
                      sx={{ color: "var(--logoRed)", width: {
                        xs: "1rem",
                        sm: "1.5rem",
                        md: "2rem",
                        lg: "2rem",
                      } }}
                    />{" "}
                    <Typography
                      sx={{
                        fontFamily: "Nunito Sans, sans-serif",
                        fontSize: {
                          xs: "0.7rem",
                          sm: "0.9rem",
                          md: "1rem",
                          lg: "1.2rem",
                        },
                        fontWeight: 800,
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
