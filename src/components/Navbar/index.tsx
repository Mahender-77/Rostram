import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Navbar = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<boolean>(false);
 
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
      path:"/ITServices",
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
      path:"/Support",
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
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    
    if (element) {
      const headerOffset = document.querySelector("header")?.getBoundingClientRect().height || 0;
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/');
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
      px: 2, // Padding for smaller screens
    }}
  >
    <Box
      className="logo-container"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",

       
        maxWidth: "500px", // Restrict container width
      }}
    >
      <img
        ref={imgRef}
        style={{ width: "100%", maxWidth: "350px", height: "auto" }}
        src="/src/assets/rostram_logo-removebg-preview.png"
        alt="Logo"
      />
    </Box>
  </Box>
)}


      <Box className="navbar">
        <Box sx={{ position: "relative" }}>
          <img
            className="logo-container"
            height={150}
            src="/src/assets/rostram_logo-removebg-preview.png"
            alt="Logo"
          />
          <Box
            className="rostram-text"
            sx={{
              position: "absolute",
              top: 45,
              left: 120,
              fontSize: "30px",
              fontWeight: 900,
              fontFamily: "Nunito Sans, sans-serif",
              color: "var(--logoRed)",
            }}
          >
            ROSTRAM
          </Box>
          <Box
            className="rostram-text"
            sx={{
              position: "absolute",
              top: 80,
              width: "100%",
              left: 190,
              fontSize: "15px",
              fontWeight: 900,
              fontFamily: "Nunito Sans, sans-serif",
              color: "#5C5C5E",
            }}
          >
            Tekno Labs
          </Box>
        </Box>
      </Box>
      <Box
        className="nav-container"
        sx={{ display: "flex", gap: 10, paddingRight: 15 }}
      >
        {[
          { text: "Home", onClick: handleHomeClick },
          { text: "About Us", onClick: () => scrollToSection('about') },
          { text: "Services" },
          { text: "Contact", onClick: () => scrollToSection('contact') },
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
              { hoveredItem === true ?<KeyboardArrowUpIcon  sx={{marginTop:"3px"}}/>: <KeyboardArrowDownIcon sx={{marginTop:"3px"}}/>}
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
    </Box>
  );
};

export default Navbar;