import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import profilePhoto from "../../../assets/profile.png";

const quotes = [
  {
    image: profilePhoto,
    name: "Satish",
    role: "IT",
    description:
      "Highly skilled professional! Their attention to detail and efficiency made all the diffrence. I couldn't be happier with their work!.",
  },
  {
    image: profilePhoto,
    name: "Vijay",
    role: "Product Manager",
    description:
      "OutStanding customer support! The team was responsive, professional, and deliverd results beyond my expectations. I would gladly work with them again!",
  },
  {
    image: profilePhoto,
    name: "Sumit patel",
    role: "Manager",
    description:
      "A fantastic experience! The team truly knows their craft, delivering top-notch results with remarkable speed and professionalism. I appreciate their dedication and expertise.",
  },
  {
    image: profilePhoto,
    name: "Raju",
    role: "CEO",
    description:
      "Exceptional service! The team is professional, efficient, and incredibly friendly. They completed the work swiftly and exceeded my expectations. Highly recommended!",
  },
];

const OurTeam: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      setFade(false);
    }, 300);
  };

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
      setFade(false);
    }, 300);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100%",
        mx: "auto",
        mt: 20,
        // border: "0.5px solid rgb(89, 223, 221)",
        paddingX: 5,
        borderRadius: 4,
        mb: 5,
        position: "relative",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          color: "black",
          top: -50,
          paddingX:2,
          fontSize: "30px",
          fontWeight:600,
          fontFamily: "Gilroy, sans-serif",
          backgroundColor: "#429E9D",
        }}
      >
        MEET OUR TEAM
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          placeItems: "center",
          height: "100%",
          width: "50%",
          gap: 4,
          position: "relative",
        }}
      >
        <Box sx={{ padding: 4, borderRadius: "50%" }}>
          <img height="120px" width="110px" src={quotes[index].image} alt="" />
        </Box>

        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontStyle: "italic",
            opacity: fade ? 0 : 1,
            transition: "opacity 0.3s ease-in-out",
            color: "var(--whiteText)",
            fontFamily: "Gilroy, sans-serif",
            fontSize: "18px",
            fontWeight: 300,
          }}
        >
          {quotes[index].description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            right: -30,
            bottom: 25,
          }}
        >
          <Typography
            sx={{ color: "red ", fontSize: "20px", fontStyle: "italic" }}
          >
            - {quotes[index].name} ({quotes[index].role})
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "80%",
          justifyContent: "space-between",
          position: "absolute",
          top: 50,
        }}
      >
        <IconButton
          sx={{ color: "var(--whiteText)", m: 1, border: "0.5px solid white" }}
          onClick={handlePrev}
        >
          <ArrowBack />
        </IconButton>
        <IconButton
          sx={{ color: "var(--whiteText)", m: 1, border: "0.5px solid white" }}
          onClick={handleNext}
        >
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  );
};

export default OurTeam;
