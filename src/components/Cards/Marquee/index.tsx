import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import "./index.css"; // make sure your animation is defined here

import cosmosMaya from "../../../assets/cosmosMaya.png";
import discreetArt from "../../../assets/Discreet_arts-removebg-preview.png";
import templeTown from "../../../assets/trmpleLogo-removebg-preview.png";
import globalVisual from "../../../assets/globalvisualfx_logo.jpg";
import rotomakerLogo from "../../../assets/rmlogo-removebg-preview.png";
import huesFx from "../../../assets/Hues-logo-animation.gif";

const images = [
  { img: cosmosMaya, id: 1 },
  { img: discreetArt, id: 2 },
  { img: templeTown, id: 3 },
  { img: globalVisual, id: 4 },
  { img: rotomakerLogo, id: 5 },
  { img: huesFx, id: 6 },
  { img: cosmosMaya, id: 7 },
  { img: discreetArt, id: 8 },
  { img: templeTown, id: 9 },
  { img: globalVisual, id: 10 },
  { img: rotomakerLogo, id: 11 },
  { img: huesFx, id: 12 },
];

const Marquee: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <Box
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        width: "100%",
        backgroundColor: "var(--grayFooter)",
        paddingY: "2rem",
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
          // padding: "1.5rem rem",
          mb: 5,
        }}
      >
        Our Partners
      </Typography>
      <Box
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        sx={{
          display: "flex",
          width: "max-content",
          animation: "marquee 30s linear infinite",
          animationPlayState: isPaused ? "paused" : "running",
          flexShrink: 0,
          gap: 10,
        }}
      >
        {images.map((img) => (
          <Box
            key={img.id}
            component="img"
            src={img.img}
            alt={`Marquee ${img.id}`}
            sx={{
              mx: 1,
              width: "100%",
              height: 150,
              objectFit: "cover",
              borderRadius: 2,
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Marquee;
