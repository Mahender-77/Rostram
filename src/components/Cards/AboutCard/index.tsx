import { useGSAP } from "@gsap/react";
import { Box, Grid, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutCard = () => {
  useGSAP(() => {
    const textElement = document.querySelector(".char");
    if (!textElement) return;

    const text = (textElement as HTMLElement).innerText;
    const splitText = text
      .split("")
      .map((char) =>
        char === " "
          ? `<span class="char space" style="display:inline-block">&nbsp;</span>`
          : `<span class="char" style="display:inline-block">${char}</span>`
      );
    textElement.innerHTML = splitText.join("");

    gsap.from(".char", {
      opacity: 0,
      x: 100,
      scrollTrigger: {
        trigger: ".char",
        start: "top 80%",
        end: "top 60%",
      },
      ease: "power2.in",
      duration: 1,
    });

    gsap.from(".data", {
      textContent: 0,
      duration: 0.8,
      ease: "power2.out",
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: ".data",
        start: "top 80%",
        scrub: false,
      },
    });
  });

  const stats = [
    { value: 20, label: "Years of experience" },
    { value: 6, label: "Delivered Products" },
    { value: 5, label: "Certified Developers" },
    { value: 500, label: "Satisfied Clients" },
  ];

  return (
    <Box id="about" sx={{ pb: { xs: 6, md: 10 } }}>
      <Typography
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: 600,
          fontFamily: "Nunito Sans, sans-serif",
          backgroundImage:
            "linear-gradient(120deg, rgb(142,14,14), rgb(255,0,8), rgb(142,14,14))",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          mb: 4,
        }}
      >
        About Us
      </Typography>

      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{
          px: { xs: 2, sm: 4, md: 10 },
          overflow: "hidden",
        }}
      >
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            {stats.map(({ value, label }, index) => (
              <Grid item xs={6} key={index}>
                <Box textAlign="center">
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography
                      className="data"
                      sx={{
                        fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                        fontWeight: 600,
                        fontFamily: "Nunito Sans, sans-serif",
                        color: "var(--blackbackGround)",
                      }}
                    >
                      {value}
                    </Typography>
                    <Typography
                      component="span"
                      sx={{
                        fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                        fontWeight: 600,
                        fontFamily: "Nunito Sans, sans-serif",
                        color: "var(--blackbackGround)",
                        ml: 0.5,
                      }}
                    >
                      +
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.9rem", md: "1.1rem" },
                      fontWeight: 600,
                      fontFamily: "Nunito Sans, sans-serif",
                      color: "var(--blackbackGround)",
                      mt: 1,
                    }}
                  >
                    {label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            className="char"
            sx={{
              fontSize: { xs: "0.95rem", md: "1rem" },
              lineHeight: "1.8",
              fontWeight: 700,
              fontFamily: "Nunito Sans, sans-serif",
              color: "var(--blackbackGround)",
              textAlign: { xs: "justify", md: "left" },
            }}
          >
            At Rostram, we have over 20 years of experience in building and
            growing eCommerce stores. Our expertise includes popular platforms
            like Shopify, Magento, and WooCommerce. We've always been a creative
            pioneer, especially in German VFX, with the capacity for 100+
            employees to handle any project, big or small.
            <p>
              As an eCommerce web design and development company, we've helped
              major brands succeed by creating responsive, scalable, and
              user-friendly online stores. Our goal is to ensure a smooth
              customer journey, which we believe is key to success.
            </p>
            This approach has consistently met our clients' expectations. We
            apply the same principles to your store, aiming for measurable
            results from day one. Trust Rostram to deliver an excellent
            eCommerce experience, leveraging our extensive experience and
            dedication to quality.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutCard;
