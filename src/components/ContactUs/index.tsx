import React, { useRef } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const ContactUs = () => {
  const pathRef = useRef<SVGPathElement | null>(null);

  useGSAP(() => {
    if (!pathRef.current) return;
    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.set(path, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
          });

          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.inOut",
            delay: 0.5,
          });
        } else {
          gsap.set(path, {
            strokeDashoffset: pathLength,
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(path);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: "var(--darkGray)",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: { xs: "2rem", sm: "3rem", md: "4rem", lg: "5rem" },
        gap: "2rem",
      }}
    >
      {/* SVG Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%", lg: "45%" },
          minHeight: { xs: "50px", md: "180px", lg: "300px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", lg: "2.5rem" },
            fontFamily: "Gilroy, sans-serif",
            fontWeight: 600,
            color: "var(--logoRed)",
            backgroundColor: "var(--blackbackGround)",
            zIndex: 1,
            position: "absolute",
            left: "5%",
            bottom: "5%",
            padding: "0.5rem 1rem",
          }}
        >
          Connect With Us .
        </Typography>

        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 750 650"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          >
            <path
              ref={pathRef}
              d="M0.5 595C156.5 525.5 131 210.5 251.5 149.5C372 88.5 533 242 379.5 357C226 472 -102.5 134 95 62.5C292.5 -9 742.5 34.5 742.5 34.5M742.5 34.5L643 1M742.5 34.5L643 49.5"
              stroke="var(--logoRed)"
              strokeWidth="8"
              fill="none"
            />
          </svg>
        </Box>
      </Box>

      {/* Form Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "45%", lg: "40%" },
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: "1.5rem",
            }}
          >
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              required
              sx={textFieldStyles}
            />
            <TextField
              fullWidth
              label="Your Email"
              variant="outlined"
              required
              type="email"
              sx={textFieldStyles}
            />
          </Box>

          <TextField
            fullWidth
            label="Subject"
            variant="outlined"
            required
            sx={textFieldStyles}
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            required
            multiline
            rows={5}
            sx={{
              ...textFieldStyles,
              "& textarea": { color: "var(--whiteText)" },
            }}
          />

          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "var(--logoRed)",
              color: "var(--blackbackGround)",
              fontWeight: 600,
              fontFamily: "Gilroy, sans-serif",
              textTransform: "none",
              paddingX: "2rem",
              width: { xs: "100%", sm: "fit-content" },
              alignSelf: { xs: "center", sm: "flex-start" },
              ":hover": {
                backgroundColor: "var(--blackbackGround)",
                color: "var(--logoRed)",
              },
            }}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const textFieldStyles = {
  "& label": { color: "var(--lightGray)" },
  "& label.Mui-focused": { color: "var(--whiteText)" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "var(--lightGray)" },
    "&:hover fieldset": { borderColor: "var(--grayButton)" },
    "&.Mui-focused fieldset": { borderColor: "var(--lightGray)" },
  },
  "& input": { color: "var(--whiteText)" },
};

export default ContactUs;
