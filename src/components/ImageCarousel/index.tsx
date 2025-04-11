import Carousel from "react-material-ui-carousel";
import IT_Service from "../../assets/IT_Service_.jpg";
import VFX from "../../assets/VFX_Artist.jpg";
// import Support_Team from "../../assets/Support_Team_.jpg";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ImageCarousel = () => {
  const navigate = useNavigate();
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
      interval={4000}
      animation="slide"
      duration={500}
      navButtonsWrapperProps={{
        style: {
          opacity: 1,
          transition: "opacity 0.3s",
        },
      }}
      //   indicatorContainerProps={{
      //     style: {
      //       backgroundColor: '#535353',
      //       zIndex: 1,
      //       marginTop: '20px'
      //     }
      //   }}
      //   activeIndicatorIconButtonProps={{
      //     style: {
      //       backgroundColor: '#535353',
      //     }
      //   }}
      //   indicatorIconButtonProps={{
      //     style: {
      //       backgroundColor: '#535353',
      //     }
      //   }}
      sx={{
        "&:hover .MuiIconButton-root": {
          opacity: 1,
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#535353",
              fontSize: "40px",
              fontWeight: 800,
              fontFamily: "Gilroy",
            }}
          >
            Accelerate Post-Production.
          </Typography>
          <Typography
            sx={{
              color: "var(--blackText)",
              fontSize: "15px",
              fontWeight: 800,
              fontFamily: "Gilroy",
            }}
          >
            Less manual work, more creative output.
          </Typography>
          <Typography
            sx={{ color: "#E82C2D", fontSize: "45px", fontWeight: 800 }}
          >
            End-to-End VFX Pipeline Tools.
          </Typography>
          <Typography
            sx={{
              color: "var(--blackText)",
              fontSize: "20px",
              fontWeight: 800,
              fontFamily: "Gilroy",
            }}
          >
            Reliable. Scalable. Efficient.
          </Typography>{" "}
          <Button
            onClick={() => navigate("/VFX")}
            variant="outlined"
            sx={{
              marginTop: 5,
              fontSize: "1.1rem",
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
            width: "40%",
            height: "80%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "500px",
              height: "550px",
              position: "absolute",
              top: 80,
              right: 20,
              border: "5px solid #E82C2D",
            }}
          ></Box>
          <Box sx={{ position: "absolute", top: 40, right: 10 }}>
            <img
              style={{ width: "380px", height: "300px" }}
              src={IT_Service}
              alt=""
            />
          </Box>
          <Box sx={{ position: "absolute", top: 200, right: 100 }}>
            <img style={{ width: "500px", height: "400px" }} src={VFX} alt="" />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8rem",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#535353",
              fontSize: "40px",
              fontWeight: 800,
              fontFamily: "Gilroy",
            }}
          >
            Transform with technology.
          </Typography>
          <Typography
            sx={{
              color: "var(--blackText)",
              fontSize: "15px",
              fontWeight: 800,
              fontFamily: "Gilroy",
            }}
          >
            Smart solutions for growing businesses.
          </Typography>
          <Typography
            sx={{ color: "#E82C2D", fontSize: "45px", fontWeight: 800 }}
          >
            Reliable IT Services.
          </Typography>
          <Typography
            sx={{
              color: "var(--blackText)",
              fontSize: "20px",
              fontWeight: 800,
              fontFamily: "Gilroy",
            }}
          >
            24/7 Support. Scalable Solutions.
          </Typography>{" "}
          <Button
            onClick={() => navigate("/ITServices")}
            variant="outlined"
            sx={{
              marginTop: 5,
              fontSize: "1.1rem",
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
            width: "40%",
            height: "80%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "500px",
              height: "550px",
              position: "absolute",
              top: 80,
              right: 20,
              border: "5px solid #E82C2D",
            }}
          ></Box>
          <Box sx={{ position: "absolute", top: 40, right: 10 }}>
            <img
              style={{ width: "380px", height: "300px" }}
              src={IT_Service}
              alt=""
            />
          </Box>
          <Box sx={{ position: "absolute", top: 200, right: 100 }}>
            <img style={{ width: "500px", height: "400px" }} src={VFX} alt="" />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8rem",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#535353",
              fontSize: "40px",
              fontWeight: 800,
              fontFamily: "Gilroy",
            }}
          >
            Extend your support.
          </Typography>
          <Typography
            sx={{
              color: "var(--blackText)",
              fontSize: "15px",
              fontWeight: 800,
              fontFamily: "Gilroy",
            }}
          >
            Delight customers with faster resolutions.
          </Typography>
          <Typography
            sx={{ color: "#E82C2D", fontSize: "45px", fontWeight: 800 }}
          >
            Dedicated Support Teams.
          </Typography>
          <Typography
            sx={{
              color: "var(--blackText)",
              fontSize: "20px",
              fontWeight: 800,
              fontFamily: "Gilroy",
            }}
          >
            Skilled. Scalable. Always Available.
          </Typography>{" "}
          <Button
            onClick={() => navigate("/Support")}
            variant="outlined"
            sx={{
              marginTop: 5,
              fontSize: "1.1rem",
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
            width: "40%",
            height: "80%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "500px",
              height: "550px",
              position: "absolute",
              top: 80,
              right: 20,
              border: "5px solid #E82C2D",
            }}
          ></Box>
          <Box sx={{ position: "absolute", top: 40, right: 10 }}>
            <img
              style={{ width: "380px", height: "300px" }}
              src={IT_Service}
              alt=""
            />
          </Box>
          <Box sx={{ position: "absolute", top: 200, right: 100 }}>
            <img style={{ width: "500px", height: "400px" }} src={VFX} alt="" />
          </Box>
        </Box>
      </Box>
    </Carousel>
  );
};
