import { Box, Button, TextField, Typography } from "@mui/material";
import { useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(MotionPathPlugin);

const ContactUs = () => {
  const pathRef = useRef<SVGPathElement | null>(null);

  useGSAP(() => {
    if (!pathRef.current) return;
    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset the dash before playing
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
          // Reset if user leaves the section
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
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: { xs: "1rem", sm: "2rem", md: "3rem" },
        paddingX: "5rem",
        marginBottom: "-2rem",
      }}
    >
      {/* SVG Section */}
      <Box
        sx={{
          width: "55%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem" },
            fontFamily: "Gilroy, sans-serif",
            fontWeight: 600,
            color: "var(--logoRed)",
            backgroundColor: "var(--blackbackGround)",
            zIndex: 1,
            position: "absolute",
            left: "-1%",
            bottom: 0,
            padding: "0.5rem 1rem",
          }}
        >
          Connect With Us .
        </Typography>

        <svg
          width="100%"
          height="auto"
          viewBox="0 0 750 650"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: "2%",
            left: "-10%",
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

      {/* Form Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "70%",
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
