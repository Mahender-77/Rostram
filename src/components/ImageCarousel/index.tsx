import Carousel from "react-material-ui-carousel";
import IT_Service from "../../assets/IT_Service_.jpg";
import VFX from "../../assets/VFX_Artist.jpg";
// import Support_Team from "../../assets/Support_Team_.jpg";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ImageCarousel = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  // const items = [
  //     {
  //         img: IT_Service,
  //         title: "IT Service",
  //         description: "IT Service"
  //     },
  //     {
  //         img: VFX,
  //         title: "IT Service",
  //         description: "IT Service"
  //     },
  //     {
  //         img: Support_Team,
  //         title: "IT Service",
  //         description: "IT Service"
  //     }
  // ]
  return (
    <Carousel
      indicators={false}
      navButtonsAlwaysVisible={false}
      interval={400000}
      animation="slide"
      height={isSmallScreen ? "33vh" : "100vh"}
      duration={500}
      navButtonsWrapperProps={{
        style: {
          opacity: 1,
          transition: "opacity 0.3s",
      
      
          
        },
      }}
      sx={{
        "&:hover .MuiIconButton-root": {
          opacity: 1,
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
         
          marginTop: 10,
          height: {
            xs: "20vh", // extra small screens
            sm: "65vh", // small
            md: "80vh", // medium
            lg: "100vh", // large
            xl: "100vh", // extra large
          },
          display: "flex",
          justifyContent: {
            xs: "left",
            sm: "center",
            md: "center",
            lg: "center",
            xl: "center",
          },
          alignItems: "center",
          p: 2,
          // border: "2px solid red",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%", // extra small screens
              sm: "80%", // small
              md: "70%", // medium
              lg: "50%", // large
              xl: "50%", // extra large
            },
          }}
        >
          <Typography
            sx={{
              color: "#535353",
              // border: "1px solid red",
              fontWeight: 800,
              fontFamily: "Gilroy",
              fontSize: {
                xs: "15px", // extra small screens
                sm: "21px", // small
                md: "30px", // medium
                lg: "36px", // large
                xl: "40px", // extra large
              },
            }}
          >
            Accelerate Post-Production.
          </Typography>
          <Typography
            sx={{
              // border: "1px solid red",
              color: "var(--blackText)",
              fontSize: {
                xs: "10px", // extra small screens
                sm: "15px", // small
                md: "20px", // medium
                lg: "15px", // large
                xl: "15px", // extra large
              },
              fontWeight: 800,
              fontFamily: "Gilroy",
            }}
          >
            Less manual work, more creative output.
          </Typography>
          <Typography
            sx={{
              color: "#E82C2D",
              widht: "100%",
              // border: "1px solid red",
              fontWeight: 800,
              fontSize: {
                xs: "18px", // Mobile
                sm: "22px", // Small tablets
                md: "32px", // Medium devices
                lg: "42px", // Large screens
                xl: "45px", // Extra-large screens
              },
            }}
          >
            End-to-End VFX Pipeline Tools.
          </Typography>
          <Typography
            sx={{
              color: "#535353",
              // border: "1px solid red",
              fontWeight: 800,
              fontFamily: "Gilroy",
              fontSize: {
                xs: "15px", // extra small screens
                sm: "18px", // small
                md: "20px", // medium
                lg: "20px", // large
                xl: "20px", // extra large
              },
            }}
          >
            Reliable. Scalable. Efficient.
          </Typography>{" "}
          <Button
            onClick={() => navigate("/VFX")}
            variant="outlined"
            sx={{
              marginTop: {
                xs: 2, // extra small screens
                sm: 3, // small
                md: 3, // medium
                lg: 5, // large
                xl: 5, // extra large
              },
              // fontSize: "1.1rem",
              fontSize: {
                xs: "0.5rem", // extra small screens
                sm: "1rem", // small
                md: "1rem", // medium
                lg: "1.1rem", // large
                xl: "1.1rem", // extra large
              },
              fontWeight: 900,
              color: "var(--logoRed)",
              border: "1px solid var(--logoRed)",
            }}
          >
            EXPLORE MORE
          </Button>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", sm: "80%", md: "60%", lg: "40%" },
            height: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Red Border Box */}
          <Box
            sx={{
              width: {
                xs: "70%", // Mobile
                sm: "80%", // Small tablets
                md: "80%", // Medium devices
                lg: "90%", // Large screens
                xl: "82%", // Extra-large screens
              },
              height: {
                xs: "80%", // Mobile
                sm: "70%", // Small tablets
                md: "75%", // Medium devices
                lg: "75%", // Large screens
                xl: "80%", // Extra-large screens
              },
              position: "absolute",
              top: {
                xs: "10%", // Mobile
                sm: "20%", // Small tablets
                md: "12%", // Medium devices
                lg: "10%", // Large screens
                xl: "10%", // Extra-large screens
              },
              right: {
                xs: "20%", // Mobile
                sm: "8%", // Small tablets
                md: "12%", // Medium devices
                lg: "5%", // Large screens
                xl: "5%", // Extra-large screens
              },
              border: "0.4vw solid #E82C2D",
              boxSizing: "border-box",
            }}
          />

          {/* IT Service Image */}
          <Box
            sx={{
              position: "absolute",
              top: {
                xs: "5%", // Mobile
                sm: "15%", // Small tablets
                md: "15%", // Medium devices
                lg: "5%", // Large screens
                xl: "5%",
              },
              right: {
                xs: "10%", // Mobile
                sm: "10%", // Small tablets
                md: "10%", // Medium devices
                lg: "5%", // Large screens
                xl: "5%",
              },
              width: "60%",
              maxWidth: "380px",
            }}
          >
            <img
              src={IT_Service}
              alt="IT Service"
              style={{
                width: isSmallScreen ? "95%" : "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* VFX Image */}
          <Box
            sx={{
              position: "absolute",
              top: {
                xs: "35%", // Mobile
                sm: "40%", // Small tablets
                md: "30%", // Medium devices
                lg: "30%", // Large screens
                xl: "30%",
              },
              right: {
                xs: "20%", // Mobile
                sm: "20%", // Small tablets
                md: "18%", // Medium devices
                lg: "10%", // Large screens
                xl: "10%",
              },
              width: "80%",
              maxWidth: "500px",
            }}
          >
            <img
              src={VFX}
              alt="VFX"
              style={{
                width: isSmallScreen ? "95%" : "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
         
          marginTop: 10,
          height: {
            xs: "20vh", // extra small screens
            sm: "65vh", // small
            md: "80vh", // medium
            lg: "100vh", // large
            xl: "100vh", // extra large
          },
          display: "flex",
          justifyContent: {
            xs: "left",
            sm: "center",
            md: "center",
            lg: "center",
            xl: "center",
          },
          alignItems: "center",
          p: 2,
          // border: "2px solid red",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%", // extra small screens
              sm: "80%", // small
              md: "70%", // medium
              lg: "50%", // large
              xl: "50%", // extra large
            },
          }}
        >
          <Typography
            sx={{
              color: "#535353",
              // border: "1px solid red",
              fontWeight: 800,
              fontFamily: "Gilroy",
              fontSize: {
                xs: "15px", // extra small screens
                sm: "21px", // small
                md: "30px", // medium
                lg: "36px", // large
                xl: "40px", // extra large
              },
            }}
          >
            Extend your support.
          </Typography>
          <Typography
            sx={{
              // border: "1px solid red",
              color: "var(--blackText)",
              fontSize: {
                xs: "10px", // extra small screens
                sm: "15px", // small
                md: "20px", // medium
                lg: "15px", // large
                xl: "15px", // extra large
              },
              fontWeight: 800,
              fontFamily: "Gilroy",
            }}
          >
            Delight customers with faster resolutions.
          </Typography>
          <Typography
            sx={{
              color: "#E82C2D",
              widht: "100%",
              // border: "1px solid red",
              fontWeight: 800,
              fontSize: {
                xs: "18px", // Mobile
                sm: "22px", // Small tablets
                md: "32px", // Medium devices
                lg: "42px", // Large screens
                xl: "45px", // Extra-large screens
              },
            }}
          >
            Dedicated Support Teams.
          </Typography>
          <Typography
            sx={{
              color: "#535353",
              // border: "1px solid red",
              fontWeight: 800,
              fontFamily: "Gilroy",
              fontSize: {
                xs: "15px", // extra small screens
                sm: "18px", // small
                md: "20px", // medium
                lg: "20px", // large
                xl: "20px", // extra large
              },
            }}
          >
            24/7 Support. Scalable Solutions.
          </Typography>{" "}
          <Button
            onClick={() => navigate("/VFX")}
            variant="outlined"
            sx={{
              marginTop: {
                xs: 2, // extra small screens
                sm: 3, // small
                md: 3, // medium
                lg: 5, // large
                xl: 5, // extra large
              },
              // fontSize: "1.1rem",
              fontSize: {
                xs: "0.5rem", // extra small screens
                sm: "1rem", // small
                md: "1rem", // medium
                lg: "1.1rem", // large
                xl: "1.1rem", // extra large
              },
              fontWeight: 900,
              color: "var(--logoRed)",
              border: "1px solid var(--logoRed)",
            }}
          >
            EXPLORE MORE
          </Button>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", sm: "80%", md: "60%", lg: "40%" },
            height: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Red Border Box */}
          <Box
            sx={{
              width: {
                xs: "70%", // Mobile
                sm: "80%", // Small tablets
                md: "80%", // Medium devices
                lg: "90%", // Large screens
                xl: "82%", // Extra-large screens
              },
              height: {
                xs: "80%", // Mobile
                sm: "70%", // Small tablets
                md: "75%", // Medium devices
                lg: "75%", // Large screens
                xl: "80%", // Extra-large screens
              },
              position: "absolute",
              top: {
                xs: "10%", // Mobile
                sm: "20%", // Small tablets
                md: "12%", // Medium devices
                lg: "10%", // Large screens
                xl: "10%", // Extra-large screens
              },
              right: {
                xs: "20%", // Mobile
                sm: "8%", // Small tablets
                md: "12%", // Medium devices
                lg: "5%", // Large screens
                xl: "5%", // Extra-large screens
              },
              border: "0.4vw solid #E82C2D",
              boxSizing: "border-box",
            }}
          />

          {/* IT Service Image */}
          <Box
            sx={{
              position: "absolute",
              top: {
                xs: "5%", // Mobile
                sm: "15%", // Small tablets
                md: "15%", // Medium devices
                lg: "5%", // Large screens
                xl: "5%",
              },
              right: {
                xs: "10%", // Mobile
                sm: "10%", // Small tablets
                md: "10%", // Medium devices
                lg: "5%", // Large screens
                xl: "5%",
              },
              width: "60%",
              maxWidth: "380px",
            }}
          >
            <img
              src={IT_Service}
              alt="IT Service"
              style={{
                width: isSmallScreen ? "95%" : "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* VFX Image */}
          <Box
            sx={{
              position: "absolute",
              top: {
                xs: "35%", // Mobile
                sm: "40%", // Small tablets
                md: "30%", // Medium devices
                lg: "30%", // Large screens
                xl: "30%",
              },
              right: {
                xs: "20%", // Mobile
                sm: "20%", // Small tablets
                md: "18%", // Medium devices
                lg: "10%", // Large screens
                xl: "10%",
              },
              width: "80%",
              maxWidth: "500px",
            }}
          >
            <img
              src={VFX}
              alt="VFX"
              style={{
                width: isSmallScreen ? "95%" : "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
         
          marginTop: 10,
          height: {
            xs: "20vh", // extra small screens
            sm: "65vh", // small
            md: "80vh", // medium
            lg: "100vh", // large
            xl: "100vh", // extra large
          },
          display: "flex",
          justifyContent: {
            xs: "left",
            sm: "center",
            md: "center",
            lg: "center",
            xl: "center",
          },
          alignItems: "center",
          p: 2,
          // border: "2px solid red",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%", // extra small screens
              sm: "80%", // small
              md: "70%", // medium
              lg: "50%", // large
              xl: "50%", // extra large
            },
          }}
        >
          <Typography
            sx={{
              color: "#535353",
              // border: "1px solid red",
              fontWeight: 800,
              fontFamily: "Gilroy",
              fontSize: {
                xs: "15px", // extra small screens
                sm: "21px", // small
                md: "30px", // medium
                lg: "36px", // large
                xl: "40px", // extra large
              },
            }}
          >
            Transform with technology.
          </Typography>
          <Typography
            sx={{
              // border: "1px solid red",
              color: "var(--blackText)",
              fontSize: {
                xs: "10px", // extra small screens
                sm: "15px", // small
                md: "20px", // medium
                lg: "15px", // large
                xl: "15px", // extra large
              },
              fontWeight: 800,
              fontFamily: "Gilroy",
            }}
          >
            Smart solutions for growing businesses.
          </Typography>
          <Typography
            sx={{
              color: "#E82C2D",
              widht: "100%",
              // border: "1px solid red",
              fontWeight: 800,
              fontSize: {
                xs: "18px", // Mobile
                sm: "22px", // Small tablets
                md: "32px", // Medium devices
                lg: "42px", // Large screens
                xl: "45px", // Extra-large screens
              },
            }}
          >
            Reliable IT Services.
          </Typography>
          <Typography
            sx={{
              color: "#535353",
              // border: "1px solid red",
              fontWeight: 800,
              fontFamily: "Gilroy",
              fontSize: {
                xs: "15px", // extra small screens
                sm: "18px", // small
                md: "20px", // medium
                lg: "20px", // large
                xl: "20px", // extra large
              },
            }}
          >
            Skilled. Scalable. Always Available.
          </Typography>{" "}
          <Button
            onClick={() => navigate("/VFX")}
            variant="outlined"
            sx={{
              marginTop: {
                xs: 2, // extra small screens
                sm: 3, // small
                md: 3, // medium
                lg: 5, // large
                xl: 5, // extra large
              },
              // fontSize: "1.1rem",
              fontSize: {
                xs: "0.5rem", // extra small screens
                sm: "1rem", // small
                md: "1rem", // medium
                lg: "1.1rem", // large
                xl: "1.1rem", // extra large
              },
              fontWeight: 900,
              color: "var(--logoRed)",
              border: "1px solid var(--logoRed)",
            }}
          >
            EXPLORE MORE
          </Button>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: { xs: "100%", sm: "80%", md: "60%", lg: "40%" },
            height: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Red Border Box */}
          <Box
            sx={{
              width: {
                xs: "70%", // Mobile
                sm: "80%", // Small tablets
                md: "80%", // Medium devices
                lg: "90%", // Large screens
                xl: "82%", // Extra-large screens
              },
              height: {
                xs: "80%", // Mobile
                sm: "70%", // Small tablets
                md: "75%", // Medium devices
                lg: "75%", // Large screens
                xl: "80%", // Extra-large screens
              },
              position: "absolute",
              top: {
                xs: "10%", // Mobile
                sm: "20%", // Small tablets
                md: "12%", // Medium devices
                lg: "10%", // Large screens
                xl: "10%", // Extra-large screens
              },
              right: {
                xs: "20%", // Mobile
                sm: "8%", // Small tablets
                md: "12%", // Medium devices
                lg: "5%", // Large screens
                xl: "5%", // Extra-large screens
              },
              border: "0.4vw solid #E82C2D",
              boxSizing: "border-box",
            }}
          />

          {/* IT Service Image */}
          <Box
            sx={{
              position: "absolute",
              top: {
                xs: "5%", // Mobile
                sm: "15%", // Small tablets
                md: "15%", // Medium devices
                lg: "5%", // Large screens
                xl: "5%",
              },
              right: {
                xs: "10%", // Mobile
                sm: "10%", // Small tablets
                md: "10%", // Medium devices
                lg: "5%", // Large screens
                xl: "5%",
              },
              width: "60%",
              maxWidth: "380px",
            }}
          >
            <img
              src={IT_Service}
              alt="IT Service"
              style={{
                width: isSmallScreen ? "95%" : "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* VFX Image */}
          <Box
            sx={{
              position: "absolute",
              top: {
                xs: "35%", // Mobile
                sm: "40%", // Small tablets
                md: "30%", // Medium devices
                lg: "30%", // Large screens
                xl: "30%",
              },
              right: {
                xs: "20%", // Mobile
                sm: "20%", // Small tablets
                md: "18%", // Medium devices
                lg: "10%", // Large screens
                xl: "10%",
              },
              width: "80%",
              maxWidth: "500px",
            }}
          >
            <img
              src={VFX}
              alt="VFX"
              style={{
                width: isSmallScreen ? "95%" : "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Carousel>
  );
};
//  Extend your support.
//   Delight customers with faster resolutions.
//   Dedicated Support Teams.
//  Skilled. Scalable. Always Available.

// Transform with technology.
//   Smart solutions for growing businesses.
// Reliable IT Services.
// 24/7 Support. Scalable Solutions.
