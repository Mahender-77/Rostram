import { useGSAP } from "@gsap/react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutCard = () => {
  useGSAP(() => {
    // Split the text into individual characters and add each one to a span
    const textElement = document.querySelector(".char");
    if (!textElement) return;
    const text = (textElement as HTMLElement).innerText;
    const splitText = text.split("").map((char) => {
      // Check if the character is a space and wrap it with a <span>
      if (char === " ") {
        return `<span class="char space" style="display:inline-block">&nbsp;</span>`;
      }
      return `<span class="char" style="display:inline-block">${char}</span>`;
    });
    textElement.innerHTML = splitText.join("");

    // GSAP animation for typewriter effect
    gsap.from(".char", {
      opacity: 0,
      x: 100,
      scrollTrigger: {
        trigger: ".char",
        start: "top 80%",
        end: "top 60%",
        // scrub: 1,
      },
      ease: "power2.in",
      duration: 1,
      // delay: 0.3,
    });

    // Scroll-triggered number animation
    gsap.from(".data", {
      textContent: 0,
      duration: 0.8,
      ease: "power2.out",
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: ".data",
        start: "top 80%",
        scrub: false,
        // markers: true,
      },
    });
  });

  return (
    <Box
     id="about"
      // sx={{
      //   marginY: "6rem",
      // }}
    sx={{paddingTop:'170px',paddingBottom:'100px'}}
    >
      <Typography
        sx={{
          fontSize: "3rem",
          fontWeight: 600,
          fontFamily: "Gilroy, sans-serif",
          backgroundImage:
            "linear-gradient(120deg,rgb(142, 14, 14),rgb(255, 0, 8),rgb(142, 14, 14))",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          width: "100%",
          display: "flex",
          justifySelf: "center",
          justifyContent: "center",
          // padding: "1.5rem rem",
        }}
      >
        About Us
      </Typography>
      <Box
         
        sx={{
          width: "100%",
          // minHeight: "110vh",
          margin: "auto",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // marginTop: "1rem",
          position: "relative",
          overflow: "clip",
          // border: "1px solid red",
        }}
      >
        <Box
          sx={{
            paddingX: "10rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "50%",
              height: "100%",
            }}
          >
            {/* <Typography
            sx={{
              fontSize: "40px",
              fontWeight: 600,
              fontFamily: "Gilroy, sans-serif",
              color: "var(--blackButton)",
              backgroundColor: "#FFC400",
            }}
          >
            About Us .
          </Typography> */}

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                height: "100%",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: "40%",
                  height: "200px",
                  textAlign: "center",
                  placeContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    className="data"
                    sx={{
                      fontSize: "50px",
                      fontWeight: 600,
                      fontFamily: "Gilroy, sans-serif",
                      color: "var(--blackbackGround)",
                    }}
                  >
                    20
                  </Typography>
                  <span
                    style={{
                      fontSize: "50px",
                      fontWeight: 600,
                      fontFamily: "Gilroy, sans-serif",
                      color: "var(--blackbackGround)",
                    }}
                  >
                    +
                  </span>
                </Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    fontFamily: "Gilroy, sans-serif",
                    color: "var(--blackbackGround)",
                  }}
                >
                  Years of experience
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "40%",
                  height: "200px",
                  textAlign: "center",
                  placeContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    className="data"
                    sx={{
                      fontSize: "50px",
                      fontWeight: 600,
                      fontFamily: "Gilroy, sans-serif",
                      color: "var(--blackbackGround)",
                    }}
                  >
                    6
                  </Typography>
                  <span
                    style={{
                      fontSize: "50px",
                      fontWeight: 600,
                      fontFamily: "Gilroy, sans-serif",
                      color: "var(--blackbackGround)",
                    }}
                  >
                    +
                  </span>
                </Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    fontFamily: "Gilroy, sans-serif",
                    color: "var(--blackbackGround)",
                  }}
                >
                  Delivered Products
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "40%",
                  height: "200px",
                  textAlign: "center",
                  placeContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    className="data"
                    sx={{
                      fontSize: "50px",
                      fontWeight: 600,
                      fontFamily: "Gilroy, sans-serif",
                      color: "var(--blackbackGround)",
                    }}
                  >
                    5
                  </Typography>
                  <span
                    style={{
                      fontSize: "50px",
                      fontWeight: 600,
                      fontFamily: "Gilroy, sans-serif",
                      color: "var(--blackbackGround)",
                    }}
                  >
                    +
                  </span>
                </Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    fontFamily: "Gilroy, sans-serif",
                    color: "var(--blackbackGround)",
                  }}
                >
                  Certified Developers
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "40%",
                  height: "200px",
                  textAlign: "center",
                  placeContent: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    className="data"
                    sx={{
                      fontSize: "50px",
                      fontWeight: 600,
                      fontFamily: "Gilroy, sans-serif",
                      color: "var(--blackbackGround)",
                    }}
                  >
                    500
                  </Typography>
                  <span
                    style={{
                      fontSize: "50px",
                      fontWeight: 600,
                      fontFamily: "Gilroy, sans-serif",
                      color: "var(--blackbackGround)",
                    }}
                  >
                    +
                  </span>
                </Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    fontFamily: "Gilroy, sans-serif",
                    color: "var(--blackbackGround)",
                  }}
                >
                  Satisfied Clients
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "50%",
              height: "100%",
              alignItems: "center",
              placeContent: "center",
            }}
          >
            <Typography
              className="char"
              sx={{
                fontSize: "16px",
                lineHeight: "30px",
                fontWeight: 500,
                fontFamily: "Gilroy, sans-serif",
                color: "var(--blackbackGround)",
              }}
            >
              At Rostram, we have over 20 years of experience in building and
              growing eCommerce stores. Our expertise includes popular platforms
              like Shopify, Magento, and WooCommerce. We've always been a
              creative pioneer, especially in German VFX, with the capacity for
              100+ employees to handle any project, big or small.
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutCard;
