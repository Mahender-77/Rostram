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
        marginTop: "100px",
        width: "100%",
        height: "95vh",
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
            marginTop: 5,
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
          {supportData.map((item, index) => (
            <Box
              key={index}
              onClick={() => setSelectedIndex(index)}
              sx={{
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
            marginTop: 5,
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
              fontSize: "2rem",
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
                  width: "45%",
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
              sx={{ position: "absolute", width: "80%", top: "75%", left: 90 }}
            >
              <Typography
                sx={{
                  fontFamily: "Nunito Sans, sans-serif",
                  fontSize: "1.5rem",
                  color: "var(--blackText)",
                  fontWeight: 800,
                }}
              >
                The scope of software testing we execute covers the most of your
                needs:{" "}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 5,
                }}
              >
                {supportData[selectedIndex].scope.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      width: "20%",
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