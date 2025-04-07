import { Box, Button, Typography } from "@mui/material";

// import itserviceimg from "../../assets/Computer troubleshooting-amico.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import itserviceimg from "../../assets/IT.gif";
import ITSupportImg from "../../assets/Service.gif";
import VFXImg from "../../assets/VFX.gif";
import { forwardRef } from "react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const array = [
  {
    title: "IT Service",
    description:
      "Custom Application Development, Product Development, Analytic Product Re-engineering, Moblie Application Development & Testing.",
    image: itserviceimg,
    color: "#F75E08",
  },
  {
    title: "VFX",
    description:
      "3D & Game Production, VFX Production, CGI Tools Development & VFX Pipeline Development.",
    image: VFXImg,
    color: "#04BE0B",
  },
  {
    title: "Support",
    description:
      " App Support & Maintenance, Quality Assurance, Cloud Support, DevOps Support, IT Consulting.",
    image: ITSupportImg,
    color: "#6AC4E9",
  },
];

const Services = forwardRef((_, ref) => {
  useGSAP(() => {
    gsap.from(".IT", {
      opacity: 0,
      x: -100,
      duration: 1,
      delay: 3,
    });
    gsap.from(".IT svg path", {
      opacity: 0,
      x: -100,
      duration: 1,
      delay: 3,
    });
    gsap.from(".Cyber", {
      opacity: 0,
      x: 100,
      duration: 1,
      delay: 3,
    });
    gsap.from(".Support", {
      opacity: 0,
      x: 100,
      scrollTrigger: {
        trigger: ".Support",
        start: "top 80%",
        end: "top 60%",
        scrub: 1,
      },
      duration: 1,
      delay: 3,
    });
    gsap.from(".VFX", {
      opacity: 0,
      x: 100,
      duration: 1,
      delay: 3,
    });
  }, []);

  return (
    <Box
      ref={ref}
      sx={{ width: "100%", height: "110vh", placeContent: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          minHeight: "70vh",
          gap: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {array.map((item) => (
          <Box
            key={item.title}
            className={item.title.split(" ")[0]}
            sx={{
              width: "45%",
              // height: "320px",
              border: "1px solid var(--blackbackGround)",
              borderRadius: "30px",
              borderBottom: "10px solid var(--blackbackGround)",
              display: "flex",
            }}
          >
            <Box
              sx={{
                padding: "25px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "50%",
                gap: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: "40px",
                  fontWeight: "600",
                  color: `${item.color}`,
                  fontFamily: "Gilroy, sans-serif",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                  width: "100%",
                  height: "92px",
                  fontFamily: "Gilroy, sans-serif",
                  color: "var(--blackbackGround)",
                }}
              >
                {item.description}
              </Typography>
              <Button
                sx={{
                  marginTop: "10px",
                  width: "10rem",
                  border: `1px solid ${item.color}`,
                  // borderBottom: `10px solid ${item.color}`,
                  borderRadius: 5,
                  backgroundColor: "var(--blackButton)",
                  color: `${item.color}`,
                  textTransform: "capitalize",
                  padding: 1,
                  fontSize: "1rem",
                  fontWeight: 600,
                  fontFamily: "Gilroy, sans-serif",
                }}
                variant="outlined"
              >
                MORE
              </Button>
            </Box>
            <Box
              sx={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                height="240px"
                style={{ objectFit: "cover" }}
                src={item.image}
                alt={item.title}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
});

export default Services;
