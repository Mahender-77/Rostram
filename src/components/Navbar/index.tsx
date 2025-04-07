import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import logo from "../../assets/rostram_logo-removebg-preview.png";
import { SectionRefs } from "../../App";
// type sectionRefs = {
//   aboutRef: React.RefObject<HTMLDivElement>;
//   servicesRef: React.RefObject<HTMLDivElement>;
//   // portfolioRef: React.RefObject<HTMLDivElement>;
//   // contactRef: React.RefObject<HTMLDivElement>;
// };
const Navbar = ({ sectionRefs }: { sectionRefs: SectionRefs }) => {
  const [showOverlay, setShowOverlay] = useState(true);
  const imgRef = useRef(null);
  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showOverlay]);
  
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".logo-container", {
      delay: 2,
      duration: 2,
      scale: 0.5,
      ease: "power2.inOut",
    })
      .to(
        ".overlay",
        {
          duration: 1.5,
          opacity: 0,
          ease: "power2.inOut",
          onComplete: () => {
            setTimeout(() => setShowOverlay(false), 500);
          },
        },
        "-=1.5"
      )
      .from(
        ".rostram-text",
        {
          duration: 1,
          x: 100,
          opacity: 0,
          ease: "power1.inOut",
        },
        "-=1.0"
      )
      .from(".nav-container .nav-item", {
        duration: 0.8,
        y: -100,
        opacity: 0,
        ease: "power1.inOut",
        stagger: 0.3,
      });

    gsap.to(imgRef.current, {
      filter: "drop-shadow(0px 0px 30px red)",
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []); // Empty dependency array to run only once

  const scrollToSection = (section: keyof SectionRefs) => {
    if (sectionRefs[section]?.current) {
      sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: "10VH",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        padding: "5px 30px",
        backgroundColor: "white",
       
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
            overflowY: "hidden", 
        
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
              ref={imgRef}
              style={{ marginRight: 100 }}
              height={350}
              src={logo}
              alt="Logo"
            />
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
              fontWeight: 600,
              fontFamily: "Gilroy, sans-serif",
              color: "var(--logoRed)",
            }}
          >
            ROSTRAM
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
              fontFamily: "Gilroy, sans-serif",
              color: "#5C5C5E",
            }}
          >
            Tekno Labs
          </Typography>
        </Box>
      </Box>

      <Box
        className="nav-container"
        sx={{ display: "flex", gap: 10, paddingRight: 15 }}
      >
        {[
          { text: "About Us", onClick: () => scrollToSection("aboutRef") },
          { text: "Services", onClick: () => scrollToSection("servicesRef") },
          { text: "Contact", onClick: () => scrollToSection("contactRef") },
          // { text: "Portfolio", onClick: () => scrollToSection("portfolioRef") },
        ].map((item) => (
          <Typography
            key={item.text}
            className="nav-item"
            sx={{
              fontSize: "18px",
              fontWeight: 600,
              fontFamily: "Gilroy, sans-serif",
              color: "var(--blackbackGround)",
              cursor: "pointer",
              ":hover": {
                textDecoration: "underline",
                fontWeight: 600,
                color: "var(--logoRed)",
              },
            }}
            onClick={item.onClick}
          >
            {item.text}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
