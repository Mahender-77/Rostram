import { Box, Typography, IconButton, Button, Grid } from "@mui/material";
import { Facebook, Instagram, Pinterest, LinkedIn } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import logo from "../../assets/rostram_logo-removebg-preview.png";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "var(--blackbackGround)",
        borderTop: "1px solid black",
        // mt: 4,
      }}
    >
      {/* Top Call-to-Action Bar */}
      <Box
        sx={{
          backgroundColor: "var(--logoRed)",
          width: screen,
          height: "10vh",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: {
            xs: "center",
            sm: "space-between",
            md: "space-between",
            lg: "space-between",
          },
          alignItems: "center",
          px: 2,
          py: 2,
          textAlign: "center",
          gap: { xs: 1, sm: 0 },
        }}
      >
        <Typography
          sx={{
            color: "var(--whiteText)",
            fontSize: "1.2rem",
            fontWeight: 600,
            fontFamily: "Gilroy, sans-serif",
          }}
        >
          Need a successful project?
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: "var(--whiteText)",
            border: "1px solid var(--whiteText)",
            mt: { xs: 1, sm: 0 },
          }}
        >
          Schedule A Meeting
        </Button>
      </Box>

      {/* Main Footer */}
      <Box sx={{ width: "90%", mx: "auto", mt: 4, pb: 4 }}>
        <Grid
          container
          spacing={4}
          sx={{
            flexWrap: "wrap",
          }}
        >
          {/* Logo & Copyright */}
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{
                  width: "150px",
                  height: "auto",
                  marginBottom: "0.5rem",
                }}
              />
              <Typography
                sx={{
                  color: "var(--lightGray)",
                  fontSize: "0.95rem",
                  fontWeight: 400,
                  fontFamily: "Gilroy, sans-serif",
                }}
              >
                © 2017 Rostram Tecknolabs
              </Typography>
            </Box>
          </Grid>

          {/* Support and Resources (side by side on mobile) */}
          <Grid item xs={12} md={3}>
            <Grid container spacing={2}>
              {[
                {
                  title: "Support",
                  items: ["Design", "Development", "Marketing", "Support"],
                },
                {
                  title: "Resources",
                  items: ["Services", "About Us", "Contact"],
                },
              ].map((section, index) => (
                <Grid item xs={6} key={index}>
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
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Other Links and Social Links (side by side on mobile) */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {/* Other Links */}
              <Grid item xs={6}>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    fontFamily: "Gilroy, sans-serif",
                    mb: 1,
                    color: "var(--whiteText)",
                  }}
                >
                  Other Links
                </Typography>
                {["Terms & Conditions", "Privacy Policy"].map((item) => (
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
              </Grid>

              {/* Social Links */}
              <Grid item xs={6}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    fontFamily: "Gilroy, sans-serif",
                    color: "var(--whiteText)",
                  }}
                >
                  Social Links
                </Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  {[
                    { icon: <LinkedIn />, url: "https://www.linkedin.com/" },
                    { icon: <Instagram />, url: "https://www.instagram.com/" },
                    { icon: <Facebook />, url: "https://www.facebook.com/" },
                    { icon: <Pinterest />, url: "https://in.pinterest.com/" },
                    { icon: <XIcon />, url: "https://x.com/" },
                  ].map((item, i) => (
                    <IconButton
                      key={i}
                      sx={{
                        color: "var(--darkGray)",
                        ":hover": {
                          color: "var(--logoRed)",
                          transform: "scale(1.2)",
                          transition: "all 0.3s ease-in-out",
                        },
                      }}
                      onClick={() => window.open(item.url, "_blank")}
                    >
                      {item.icon}
                    </IconButton>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
