import { useGSAP } from "@gsap/react";
import logo from "../../assets/rostram_logo-removebg-preview.png";
import gsap from "gsap";
import {
  Box,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const imgRef = useRef(null);
  const navigate = useNavigate();

  const servicesMenu = [
    {
      label: "VFX",
      path: "/VFX",
      subOptions: [
        "VFX Production",
        "VFX Pipeline Development",
        "CGI Tools Development",
        "3D & GAME Production",
      ],
    },
    {
      label: "IT Services",
      path: "/ITServices",
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
      path: "/Support",
      subOptions: [
        "App Support & Maintenance",
        "Quality Assurance",
        "Data Insights",
        "DevOps",
      ],
    },
  ];

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
      // delay: 2,
      // duration: 2,
      // scale: 0.5,
      // ease: "power2.inOut",
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
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const headerOffset =
        document.querySelector("header")?.getBoundingClientRect().height || 0;

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100vw",
        height: {
          xs: "8vh", // extra-small: phones
          sm: "9vh", // small: tablets
          md: "9.5vh", // medium: small laptops
          lg: "10vh", // large: desktops
          xl: "10vh", // extra large
        },
        alignItems: {
          xs: "center",
          sm: "center",
        },
        placeItems: "center",
        flexDirection: {
          xs: "row",
          sm: "row",
        },
        // border: "2px solid red",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        padding: {
          xs: "0px 0px",
          sm: "5px 15px",
          md: "5px 20px",
          lg: "5px 30px",
        },
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
            px: 2, // Padding for smaller screens
          }}
        >
          <Box
            className="logo-container"
            sx={{
              border: "1px solid red",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: "100%",
              maxWidth: isSmallScreen ? "300px" : "500px", // Responsive max width
              margin: "0 auto", // Center horizontally
              // padding: isSmallScreen ? "0px" : "20px", // Optional padding
            }}
          >
            <img
              ref={imgRef}
              src={logo}
              alt="Logo"
              style={{
                width: "100%",
                maxWidth: isSmallScreen ? "100px" : "350px",
                height: "auto",
                border: "1px solid red",
              }}
            />
          </Box>
        </Box>
      )}

      <Box>
        <Box
          sx={{
            position: "relative",
            // border: "1px solid red",
            width: "fit-content",
            mx: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap:0.5
            // height:"200px"
          }}
        >
          <img
            className="logo-container"
            height={isSmallScreen ? 50 : 80}
            src={logo}
            alt="Logo"
          />
        <Box>
          {/* ROSTRAM Text */}
          <Box
            className="rostram-text"
            sx={{
              // position: "absolute",
              // top: { xs: 35, sm: 45, md: 45 },
              // left: { xs: 85, sm: 120, md: 130 },
              fontSize: { xs: "18px", sm: "25px", md: "30px" },
              fontWeight: 900,
              fontFamily: "Nunito Sans, sans-serif",
              color: "var(--logoRed)",
              whiteSpace: "nowrap",
            }}
          >
            ROSTRAM
          </Box>

          {/* Tekno Labs Text */}
          <Box
            className="rostram-text"
            sx={{
              // position: "absolute",
              // top: { xs: 70, sm: 80, md: 85 },
              // left: { xs: 90, sm: 180, md: 190 },
              fontSize: { xs: "12px", sm: "14px", md: "15px" },
              fontWeight: 900,
              fontFamily: "Nunito Sans, sans-serif",
              color: "#5C5C5E",
              whiteSpace: "nowrap",
              textAlign:"right"
            }}
          >
            Tekno Labs
          </Box></Box>
        </Box>
      </Box>
      {isSmallScreen ? (
        <>
          <IconButton
            sx={{ color: "var(--blackButton)" }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon sx={{ fontSize: "2rem" }}/>
          </IconButton>

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <Box
              sx={{
                width: 250,
                display: "flex",
                flexDirection: "column",
                p: 2,
              }}
            >
              <IconButton
                onClick={() => setDrawerOpen(false)}
                sx={{ alignSelf: "flex-end" }}
              >
                <CloseIcon />
              </IconButton>

              {/* Navigation Items */}
              {[
                { text: "Home", onClick: handleHomeClick },
                // { text: "About Us", onClick: () => scrollToSection("/") },
                { text: "Services" },
                // { text: "Contact", onClick: () => navigate("/") },
              ].map((item) =>
                item.text === "Services" ? (
                  <Box key="Services" sx={{ mt: 2 }}>
                    <Box
                      onClick={() => setHoveredItem(!hoveredItem)}
                      sx={{
                        fontWeight: 800,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      Services
                      {hoveredItem ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </Box>

                    {hoveredItem && (
                      <Box sx={{ mt: 1 }}>
                        {servicesMenu.map((menuItem) => (
                          <Box key={menuItem.label} sx={{ py: 1 }}>
                            <Box
                              onClick={() => {
                                navigate(menuItem.path);
                                setHoveredItem(false);
                                setDrawerOpen(false);
                              }}
                              sx={{
                                fontWeight: "bold",
                                cursor: "pointer",
                                ":hover": { color: "var(--logoRed)" },
                              }}
                            >
                              {menuItem.label}
                            </Box>
                            {menuItem.subOptions.map((sub, idx) => (
                              <Box
                                key={idx}
                                onClick={() => {
                                  navigate(`${menuItem.path}/${idx}`);
                                  setDrawerOpen(false);
                                }}
                                sx={{
                                  fontSize: "14px",
                                  pl: 2,
                                  py: 0.5,
                                  color: "#5C5C5E",
                                  cursor: "pointer",
                                  ":hover": {
                                    color: "var(--logoRed)",
                                  },
                                }}
                              >
                                {sub}
                              </Box>
                            ))}
                          </Box>
                        ))}
                      </Box>
                    )}
                  </Box>
                ) : (
                  <Box
                    key={item.text}
                    onClick={() => {
                      item.onClick?.();
                      setDrawerOpen(false);
                    }}
                    sx={{
                      mt: 2,
                      fontWeight: 800,
                      cursor: "pointer",
                      ":hover": { color: "var(--logoRed)" },
                    }}
                  >
                    {item.text}
                  </Box>
                )
              )}
            </Box>
          </Drawer>
        </>
      ) : (
        <Box
          className="nav-container"
          sx={{ display: "flex", gap: 10, paddingRight: 15 }}
        >
          {[
            { text: "Home", onClick: handleHomeClick },
            { text: "About Us", onClick: () => scrollToSection("about") },
            { text: "Services" },
            { text: "Contact", onClick: () => scrollToSection("contact") },
          ].map((item) =>
            item.text === "Services" ? (
              <Box
                key="Services"
                onClick={() => setHoveredItem(!hoveredItem)}
                sx={{ position: "relative" }}
              >
                <Box
                  className="nav-item"
                  sx={{
                    fontSize: "18px",
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Nunito Sans, sans-serif",
                    color: "var(--blackButtton)",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                    ":hover": {
                      textDecoration: "underline",
                      color: "var(--logoRed)",
                    },
                  }}
                >
                  Services
                  {hoveredItem === true ? (
                    <KeyboardArrowUpIcon sx={{ marginTop: "3px" }} />
                  ) : (
                    <KeyboardArrowDownIcon sx={{ marginTop: "3px" }} />
                  )}
                </Box>

                {hoveredItem && (
                  <Box
                    sx={{
                      position: "absolute",
                      width: "250px",
                      top: "100%",
                      backgroundColor: "white",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      borderRadius: "8px",
                      zIndex: 1000,
                      mt: 1,
                      py: 1,
                    }}
                    onMouseLeave={() => setHoveredItem(false)}
                  >
                    {servicesMenu.map((menuItem) => (
                      <Box key={menuItem.label} sx={{ px: 2, py: 1 }}>
                        <Box
                          onClick={() => {
                            navigate(menuItem.path);
                            setHoveredItem(false);
                          }}
                          sx={{
                            fontWeight: "bold",
                            cursor: "pointer",
                            color: "var(--blackButtton)",
                            ":hover": { color: "var(--logoRed)" },
                          }}
                        >
                          {menuItem.label}
                        </Box>
                        {menuItem.subOptions.map((sub, idx) => (
                          <Box
                            key={idx}
                            onClick={() => navigate(`${menuItem.path}/${idx}`)}
                            sx={{
                              fontSize: "14px",
                              pl: 2,
                              py: 0.5,
                              color: "#5C5C5E",
                              cursor: "pointer",
                              ":hover": {
                                color: "var(--logoRed)",
                              },
                            }}
                          >
                            {sub}
                          </Box>
                        ))}
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            ) : (
              <Box
                key={item.text}
                className="nav-item"
                onClick={item.onClick}
                sx={{
                  fontSize: "18px",
                  fontWeight: 800,
                  fontFamily: "Nunito Sans, sans-serif",
                  color: "var(--blackButton)",
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                  ":hover": {
                    textDecoration: "underline",
                    color: "var(--logoRed)",
                  },
                }}
              >
                {item.text}
              </Box>
            )
          )}
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
