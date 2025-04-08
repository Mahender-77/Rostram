import { Box, Button, Typography } from "@mui/material";
import itserviceimg from "../../../assets/IT.gif";
import ITSupportImg from "../../../assets/Service.gif";
import VFXImg from "../../../assets/VFX.gif";
import { forwardRef } from "react";

const services = [
  {
    id: 1,
    title: "IT Service",
    description:
      "Custom Application Development, Product Development, Analytic Product Re-engineering, Mobile Application Development & Testing.",
    image: itserviceimg,
    color: "#56C03C",
    position: { top: 10, left: 280 },
  },
  {
    id: 3,
    title: "VFX",
    description:
      "3D & Game Production, VFX Production, CGI Tools Development & VFX Pipeline Development.",
    image: VFXImg,
    color: "#3FC0F0",
    position: { top: 450, right: 280 },
  },
  {
    id: 4,
    title: "Support",
    description:
      "App Support & Maintenance, Quality Assurance, Cloud Support, DevOps Support, IT Consulting.",
    image: ITSupportImg,
    color: "#FFC400",
    position: { top: 900, left: 280 },
  },
];

const OurServices = forwardRef((_, ref) => {
  return (
    <Box
      ref={ref}
      sx={{
        // flex: 1,
        // width: "100%",
        height: "65vh",
        // margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        // whiteSpace: "nowrap",
        // border:"1px solid red",
        // paddingTop: "80px",
        backgroundColor: "var(--grayFooter)",
        paddingY: "1rem",
        gap: "2rem",
      }}
    >
      <Typography
        sx={{
          fontSize: "3rem",
          fontWeight: 600,
          fontFamily: "Gilroy, sans-serif",
          backgroundImage:
            "linear-gradient(120deg,rgb(142, 14, 14),rgb(255, 0, 8),rgb(142, 14, 14))",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          width: "70%",
          display: "flex",
          justifySelf: "center",
          justifyContent: "center",
        }}
      >
        Our Services
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "10rem",
        }}
      >
        {services.map((item) => (
          <Box
            sx={{
              perspective: "1000px",
              width: "18rem",
              height: "26rem",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "80%",
                transformStyle: "preserve-3d",
                transition: "transform 0.8s",
                ":hover": {
                  transform: "rotateY(180deg)",
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  border: 1,
                  display: "flex",
                  flexDirection: "column",
                  padding: "1rem",
                  justifyContent: "left",
                  backgroundColor: `${item.color}`,
                  borderRadius: "1rem",
                  color: "var(--blackButton)",
                }}
              >
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    fontFamily: "Gilroy, sans-serif",
                  }}
                >
                  {item.title}
                </Typography>
                <img
                  height="200px"
                  width="100%"
                  style={{ objectFit: "contain", marginTop: "15%" }}
                  src={item.image}
                  alt={item.title}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  border: 1.5,
                  borderColor: item.color,
                  display: "flex",
                  flexDirection: "column",
                  padding: "1rem",
                  gap: "1.5rem",
                  justifyContent: "space-between",
                  backgroundColor: "#ffffff",
                  borderRadius: "1rem",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: item.color,
                    fontFamily: "Gilroy, sans-serif",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    flex: 1,
                    fontSize: "1rem",
                    lineHeight: 1.6,
                    color: "#333333",
                    fontFamily: "Gilroy, sans-serif",
                    width: "100%",
                    // display: "-webkit-box",
                    // WebkitLineClamp: 2, // ✨ Show only 2 lines
                    // WebkitBoxOrient: "vertical",
                    // overflow: "hidden",
                    // textOverflow: "ellipsis",
                    // textAlign: "justify",
                    textWrap: "balance",
                  }}
                >
                  {item.description}
                </Typography>
                <Button
                  sx={{
                    backgroundColor: item.color,
                    color: "#ffffff",
                    padding: "0.8rem 1.5rem",
                    borderRadius: "0.5rem",
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: item.color,
                      opacity: 0.9,
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Explore More
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
});

export default OurServices;
