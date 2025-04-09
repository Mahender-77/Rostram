import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import logo from "../../assets/rostram_logo-removebg-preview.png";
import { SectionRefs } from "../../pages/Home";


// type sectionRefs = {
//   aboutRef: React.RefObject<HTMLDivElement>;
//   servicesRef: React.RefObject<HTMLDivElement>;
//   // portfolioRef: React.RefObject<HTMLDivElement>;
//   // contactRef: React.RefObject<HTMLDivElement>;
// };
const Navbar = ({ sectionRefs }: { sectionRefs: SectionRefs }) => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hoveredSubItem, setHoveredSubItem] = useState<string | null>(null);
  const imgRef = useRef(null);

  const servicesMenu = [
    {
      label: "VFX",
      subOptions: [
        "3D & GAME Production",
        "VFX Production",
        "CGI Tools Development",
        "VFX Pipeline Development",
      ],
    },
    {
      label: "IT Services",
      subOptions: [
        "Custom Application Development",
        "Product Development",
        "Analytics",
        "Product Re-engineering",
        "Mobile Application Development",
        "Testing",
      ],
    },
    {
      label: "Support",
      subOptions: [
        "App Support & Maintenance",
        "Quality Assurance",
        "Data Insights",
        "DevOps",
      ],
    },
  ];

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

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    const handleScroll = () => {
      setScrolled(window.scrollY > 750);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    // Prevent browser from restoring scroll position on refresh
<!--     window.history.scrollRestoration = "manual"; -->
  }, []);
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
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
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
        backgroundColor: "var(--grayFooter)",
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
              width: "100%",
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
            { text: "Services" },
            { text: "Contact", onClick: () => scrollToSection("contactRef") },
          ].map((item) =>
            item.text === "Services" ? (
              <Box
                key="Services"
                onMouseEnter={() => setHoveredItem("Services")}
                onMouseLeave={() => {
                  setHoveredItem(null);
                  setHoveredSubItem(null);
                }}
                sx={{ position: "relative" }}
              >
                <Typography
                  className="nav-item"
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    fontFamily: "Gilroy, sans-serif",
                    color: scrolled ? "#000" : "#fff",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    ":hover": {
                      textDecoration: "underline",
                      color: "var(--logoRed)",
                    },
                  }}
                >
                  Services
                </Typography>

                {hoveredItem === "Services" && (
                  <Box
                    sx={{
                      position: "absolute",
                      width: "30vw",
                      top: "100%",
                      right: 0,
                      background: "#ffeff0",
                      boxShadow: "0px 4px 8px rgba(255, 218, 218, 0.1)",
                      zIndex: 1200,
                      display: "flex",
                      padding: 1,
                      gap: 2,
                      borderBottomRightRadius: "1rem",
                      borderBottomLeftRadius: "1rem",
                    }}
                  >
                    {/* Left column (options) */}
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      {servicesMenu.map((service) => (
                        <Box
                          key={service.label}
                          onMouseEnter={() => setHoveredSubItem(service.label)}
                          sx={{
                            width: "100%",
                            padding: "8px 12px",
                            cursor: "pointer",
                            borderRadius: "0.5rem",
                            color: "var(--logoRed)",
                            background:
                              hoveredSubItem === service.label
                                ? "#fbc0c3"
                                : "transparent",
                            ":hover": {
                              background: "#e73a3c",
                              color: "var(--whiteText)",
                            },
                          }}
                        >
                          {service.label}
                        </Box>
                      ))}
                    </Box>

                    {/* Right column (subOptions) */}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        // minWidth: "150px",
                        width: "20vw",
                      }}
                    >
                      {servicesMenu
                        .find((service) => service.label === hoveredSubItem)
                        ?.subOptions.map((sub) => (
                          <Box
                            key={sub}
                            sx={{
                              padding: "8px 12px",
                              cursor: "pointer",
                              color: "var(--blackButton)",

                              ":hover": {
                                background: "var(--logoRed)",
                                color: "var(--whiteText)",
                                borderTopRightRadius: "2rem",
                                borderBottomRightRadius: "2rem",
                              },
                            }}
                          >
                            {sub}
                          </Box>
                        ))}
                    </Box>
                  </Box>
                )}
              </Box>
            ) : (
              <Typography
                key={item.text}
                className="nav-item"
                onClick={item.onClick}
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                  fontFamily: "Gilroy, sans-serif",
                  color: scrolled ? "#000" : "#fff",
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  ":hover": {
                    textDecoration: "underline",
                    color: "var(--logoRed)",
                  },
                }}
              >
                {item.text}
              </Typography>
            )
          )}
        </Box>

      </Box>
    </Box>
  );
};

export default Navbar;
