import { Box, Typography } from "@mui/material";
import { useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { ITservice } from "../../constants/data";

export const ITService = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

 

  return (
    <Box
      sx={{
        marginTop: "50px",
        width: "100%",
        height: selectedIndex === 0 ? "125vh" : "90vh",
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
                color:
                  selectedIndex === index ? "var(--logoRed)" : "var(--white)",
                padding: 2,
                paddingY: 3,
                fontSize: "1.2rem",
                fontFamily: "Nunito Sans, sans-serif",
                fontWeight: selectedIndex === index ? 800 : 500,
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
            marginTop: 10,
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
          <Typography
            sx={{
              fontFamily: "Nunito Sans, sans-serif",
              fontSize: "2rem",
              color: "var(--logoRed)",
              fontWeight: 900,
            }}>Reliable IT Services.</Typography>
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
              ITservice[selectedIndex].content.map((item: { icon?: React.ElementType; name?: string; description?: string }, index) => (
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
              ))}
          </Box>
          {ITservice[selectedIndex].promises && (
            <Box
              sx={{ display: "flex", height: "300px", borderRadius: 2, gap: 2 }}
            >
              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "var(--grayFooter)",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Nunito Sans, sans-serif",
                    fontSize: "2rem",
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
                  gap: 2,
                  width: "50%",
                  borderRadius: 2,
                }}
              >
                {ITservice[selectedIndex].promises.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      minWidth: "250px",
                    }}
                  >
                    <ArrowOutwardIcon
                      sx={{ color: "var(--logoRed)", width: "2rem" }}
                    />{" "}
                    <Typography
                      sx={{
                        fontFamily: "Nunito Sans, sans-serif",
                        fontSize: "1rem",
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
  );};