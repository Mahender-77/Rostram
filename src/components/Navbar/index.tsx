import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import logo from "../../assets/rostram_logo-removebg-preview.png";

const Navbar = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useGSAP(() => {
    gsap.to(".logo-container", {
      delay: 2,
      duration: 2,
      scale: 0.5,
      ease: "power2.inOut",
    });

    gsap.to(".overlay", {
      delay: 2,
      duration: 1.5,
      opacity: 0,
      ease: "power2.inOut",
      onComplete: () => setShowOverlay(false),
    });

    gsap.to(".dot", {
      y: -8,
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
      ease: "power1.inOut",
      duration: 0.5,
    });

    gsap.from(".rostram-text", {
      delay: 2.5,
      duration: 1,
      x: 100,
      opacity: 0,
      ease: "power1.inOut",
    });

    gsap.from(".nav-container .nav-item", {
      delay: 2.5,
      duration: 0.8,
      y: -100,
      opacity: 0,
      ease: "power1.inOut",
      stagger: 0.3,
    });

   
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: "10VH",
        alignItems: "center",
      }}
    >
      {showOverlay && (
        <Box
          className="overlay"
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <Box
            className="logo-container"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <img
              style={{ marginRight: 100 }}
              height={350}
              src={logo}
              alt="Logo"
            />
            <Typography
              style={{ color: "#fff", fontSize: "40px", display: "flex" }}
            >
              Loading<span className="dot">.</span>
              <span className="dot">.</span>
              <span className="dot">.</span>
              <span className="dot">!</span>
            </Typography>
          </Box>
        </Box>
      )}

      <Box className="navbar">
        <Box sx={{ position: "relative" }}>
          <img className="logo-container" height={150} src={logo} alt="Logo" />
          <Typography
            className="rostram-text"
            sx={{
              position: "absolute",
              top: 45,
              left: 120,
              fontSize: "30px",
              fontWeight: 800,
              color: "#E73A3C",
            }}
          >
            Rotstram
          </Typography>
          <Typography
            className="rostram-text"
            sx={{
              position: "absolute",
              top: 80,
              left: 188,
              width: "100%",
              fontSize: "15px",
              fontWeight: 600,
              color: "#5C5C5E",
            }}
          >
            techno labs
          </Typography>
        </Box>
      </Box>

      <Box
        className="nav-container"
        sx={{ display: "flex", gap: 10, paddingRight: 15 }}
      >
        <Typography
          className="nav-item"
          sx={{ fontSize: "18px", fontWeight: 600, color: "#5C5C5E" }}
        >
          About Us
        </Typography>
        <Typography
          className="nav-item"
          sx={{ fontSize: "18px", fontWeight: 600, color: "#5C5C5E" }}
        >
          Services
        </Typography>
        <Typography
          className="nav-item"
          sx={{ fontSize: "18px", fontWeight: 600, color: "#5C5C5E" }}
        >
          Contact
        </Typography>
        <Typography
          className="nav-item"
          sx={{ fontSize: "18px", fontWeight: 600, color: "#5C5C5E" }}
        >
          Careers
        </Typography>
      </Box>

    
    </Box>
  );
};

export default Navbar;
