import { Box, Button, Typography } from "@mui/material";
import React from "react";
import itserviceimg from "../../assets/Computer troubleshooting-amico.png";
import cyberSecurityImg from "../../assets/Secure Server-amico.png";
import VFXImg from "../../assets/Animation-bro.png";
import ITSupportImg from "../../assets/Admin-bro.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const array = [
  {
    title: "IT Service",
    description:
      "Custom Application Development, Product Development, Analytic Product Re-engineering, Moblie Application Development & Testing.",
    image: itserviceimg,
    color: "#F75E08",
  },
  {
    title: "Cyber Security",
    description: "Appliction Security Review & Architecture Security Review.",
    image: cyberSecurityImg,
    color: "#6B9AB1",
  },
  {
    title: "VFX",
    description:
      "3D & Game Production, VFX Production, CGI Tools Development & VFX Pipeline Development.",
    image: VFXImg,
    color: "#04BE0B",
  },
  {
    title: "IT Support",
    description:
      " App Support & Maintenance, Quality Assurance, Cloud Support, DevOps Support, IT Consulting.",
    image: ITSupportImg,
    color: "#6AC4E9",
  },
];



const Services = () => {
    useGSAP(()=>{
        gsap.from(".IT",{
            opacity:0,
            x:-100,
            duration: 1,
            delay:3,

        })
        gsap.from(".Cyber",{
            opacity:0,
            x:100,
            duration: 1,
            delay:3,
        })
    },[])
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
                color:`${item.color}`,
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
