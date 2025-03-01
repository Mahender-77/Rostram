import { Box, Button, Typography } from "@mui/material";
import React from "react";
// import itserviceimg from "../../assets/Computer troubleshooting-amico.png";
import itserviceimg from "../../assets/IT.gif";
import cyberSecurityImg from "../../assets/Secure Server-amico.png";
import VFXImg from "../../assets/VFX.gif";
import ITSupportImg from "../../assets/Service.gif";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const array = [
  {
    title: "IT Service",
    description:
      "Custom Application Development, Product Development, Analytic Product Re-engineering, Moblie Application Development & Testing.",
    image: itserviceimg,
    color: "#F75E08",
    // svg: "M-124.929 -126.45C-15.003 -127.048 93.9425 -109.943 195.688 -76.1112C297.433 -42.2798 389.985 7.61506 468.059 70.7247C546.134 133.834 608.202 208.923 650.72 291.703C693.238 374.483 715.373 463.334 715.861 553.182C716.35 643.03 695.182 732.115 653.566 815.353C611.95 898.59 550.702 974.349 473.318 1038.3C395.934 1102.26 303.93 1153.16 202.559 1188.09C101.188 1223.03 -7.56558 1241.32 -117.491 1241.91L-121.21 557.731L-124.929 -126.45Z",
  },
  {
    title: "Cyber Security",
    description: "Appliction Security Review & Architecture Security Review.",
    image: cyberSecurityImg,
    color: "#6B9AB1",
    // svg: "M1 220C1 220 500.5 -100.5 353.5 100.5C206.5 301.5 647.5 161.5 647.5 161.5V133L761.5 19.0002C795.5 19.0002 792 31 792 49L678.314 161.5C678.314 161.5 1285 -106 1122 49C959 204 1437 161.5 1437 161.5",
  },
  {
    title: "VFX",
    description:
      "3D & Game Production, VFX Production, CGI Tools Development & VFX Pipeline Development.",
    image: VFXImg,
    color: "#04BE0B",
    // svg: "M1 3.49998C65.0753 83.5964 603 -16 622.5 3.49998C642 23 551 44 551 75C551 106 603 127 622.5 146.5C642 166 673.5 3.49998 694.5 3.49998C715.5 3.49998 766 53 766 75C766 97 661.5 146.5 694.5 146.5C727.5 146.5 1439.5 255 1439.5 146.5",
  },
  {
    title: "Support",
    description:
      " App Support & Maintenance, Quality Assurance, Cloud Support, DevOps Support, IT Consulting.",
    image: ITSupportImg,
    color: "#6AC4E9",
    // svg: "M0.5 196.499C110.5 240 458 226.5 476 196.499C494 166.499 478 167.499 497 148.499C516 129.499 566.5 165.499 602.5 148.499C638.5 131.5 617 109.499 638.5 87.9994C660 66.4994 800 95 817.5 77.5C835 60 834 0.999939 865.5 0.999939C897 0.999939 1333.5 47.5 1439 10.0001",
  },
];

const Services = () => {
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
      // scrollTrigger: {
      //   trigger: ".Support",
      //   start: "top 60%",
      //   markers: true,
      //   end: "top 30%",
      //   scrub: 1,
      // },
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
        // markers: true,
        end: "top 30%",
        scrub: 1,
      },
      duration: 1,
      delay: 3,
    });
    gsap.from(".VFX", {
      opacity: 0,
      x: -100,
      scrollTrigger: {
        trigger: ".VFX",
        start: "top 80%",
        // markers: true,
        end: "top 30%",
        scrub: 1,
      },
      duration: 1,
      delay: 3,
    });
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        // border: "2px solid black",
        minHeight: "80vh",
        gap: "20px",
        justifyContent: "center",
        marginTop: "20px        ",
      }}
    >
      {array.map((item) => (
        <Box
          className={item.title}
          sx={{
            width: "40%",
            height: "320px",
            border: "1px solid black",
            borderRadius: "30px",
            borderBottom: "10px solid black",
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
              // border: "1px solid black",
            }}
          >
            <Typography sx={{ fontSize: "40px", fontWeight: "600" }}>
              {item.title}
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "500",
                width: "100%",
                height: "92px",
              }}
            >
              {item.description}
            </Typography>
            <Button
              sx={{
                marginTop: "10px",
                width: "10rem",
                border: `1px solid ${item.color}`,
                borderBottom: `10px solid ${item.color}`,
                borderRadius: 5,
                backgroundColor: "var(--whiteText)",
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
              alignItems: "center  ",
            }}
          >
            <img
              height="240px"
              style={{ objectFit: "cover" }}
              src={item.image}
              alt=""
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Services;
