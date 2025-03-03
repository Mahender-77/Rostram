import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";


const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
  "Do what you can, with what you have, where you are. - Theodore Roosevelt"
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
    <Box sx={{ textAlign: "center", maxWidth: 600, mx: "auto", mt: 5 }}>
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontStyle: "italic",
          opacity: fade ? 0 : 1,
          transition: "opacity 0.3s ease-in-out",
          colors: "var(--whiteText)",
        }}
      >
        {quotes[index]}
      </Typography>
      <Box>
        <IconButton onClick={handlePrev} sx={{ mx: 1 }}>
          <ArrowBack />
        </IconButton>
        <IconButton onClick={handleNext} sx={{ mx: 1 }}>
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  );
};

export default OurTeam;
