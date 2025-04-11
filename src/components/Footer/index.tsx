import { Box, Typography, IconButton, Button } from "@mui/material";
import { Facebook, Instagram, Pinterest, LinkedIn } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import logo from "../../assets/rostram_logo-removebg-preview.png";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "var(--blackbackGround)",
        border: "1px solid black",
        mt: 4,
      }}
    >
      <Box
        sx={{
          backgroundColor: "var(--logoRed)",
          width: "100%",
          height: "60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          placeContent:"center",
          gap:100
        }}
      >
        <Typography
          sx={{
            color: "var(--whiteText)",
            fontSize: "1.5rem",
            fontWeight: 600,
            fontFamily: "Gilroy, sans-serif",
            textAlign: "center",
       
          }}
        >
         Need a successful project?
        </Typography>
        <Button variant="outlined" sx={{ color: "var(--whiteText)",
              border: "1px solid var(--whiteText)",}}>Schedule A Meeting</Button>
      </Box>
      <Box sx={{ width: "80%", margin: "auto", marginTop: "2rem" }}>
        {/* Top Section */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            mb: 4,
          }}
        >
          {/* Logo and Copyright */}
          <Box sx={{ flex: "1 1 200px", mb: 2 }}>
            <img
              src={logo}
              alt="Image Not Found"
              style={{
                width: "11vw",
                height: "20vh",
              }}
            />
            <Typography
              sx={{
                color: "var(--lightGray)",
                fontSize: "1rem",
                fontWeight: 400,
                fontFamily: "Gilroy, sans-serif",
              }}
            >
              © 2017 Rostram Tecknolabs
            </Typography>
          </Box>

          {/* Sections */}
          {[
            {
              title: "Support",
              items: ["Design", "Development", "Marketing", "Support"],
            },
            {
              title: "Resources",
              items: ["Services", "About Us", "Contact"],
            },
            {
              title: "Other Links",
              items: ["Terms & Conditions", "Privacy Policy"],
            },
          ].map((section, index) => (
            <Box key={index} sx={{ flex: "1 1 150px", mb: 2, my: 3 }}>
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  fontFamily: "Gilroy, sans-serif",
                  mb: 1,
                  color: "var(--whiteText)",
                }}
              >
                {section.title}
              </Typography>
              {section.items.map((item) => (
                <Typography
                  key={item}
                  sx={{
                    color: "#777",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    fontFamily: "Gilroy, sans-serif",
                    mb: 0.75,
                    cursor: "pointer",
                    ":hover": {
                      textDecoration: "underline",
                      color: "var(--whiteText)",
                    },
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          ))}

          {/* Social Links */}
          <Box sx={{ flex: "1 1 150px", mb: 2, mt: 1 }}>
            <Typography sx={{ fontWeight: 600, mb: 1 }}>
              Social Links
            </Typography>
            <Box sx={{ display: "flex", gap: 0.1 }}>
              <IconButton
                sx={{
                  color: "var(--darkGray)",
                  ":hover": {
                    color: "var(--logoRed)",
                    scale: 1.2,
                    transition: "all 0.3s ease-in-out",
                  },
                }}
                onClick={() =>
                  window.open("https://www.linkedin.com/", "_blank")
                }
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                sx={{
                  color: "var(--darkGray)",
                  ":hover": {
                    color: "var(--logoRed)",
                    scale: 1.2,
                    transition: "all 0.3s ease-in-out",
                  },
                }}
                onClick={() =>
                  window.open("https://www.instagram.com/", "_blank")
                }
              >
                <Instagram />
              </IconButton>
              <IconButton
                sx={{
                  color: "var(--darkGray)",
                  ":hover": {
                    color: "var(--logoRed)",
                    scale: 1.2,
                    transition: "all 0.3s ease-in-out",
                  },
                }}
                onClick={() =>
                  window.open("https://www.facebook.com/", "_blank")
                }
              >
                <Facebook />
              </IconButton>
              <IconButton
                sx={{
                  color: "var(--darkGray)",
                  ":hover": {
                    color: "var(--logoRed)",
                    scale: 1.2,
                    transition: "all 0.3s ease-in-out",
                  },
                }}
                onClick={() =>
                  window.open("https://in.pinterest.com/", "_blank")
                }
              >
                <Pinterest />
              </IconButton>
              <IconButton
                sx={{
                  color: "var(--darkGray)",
                  ":hover": {
                    color: "var(--logoRed)",
                    scale: 1.2,
                    transition: "all 0.3s ease-in-out",
                  },
                }}
                onClick={() => window.open("https://x.com/", "_blank")}
              >
                <XIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
