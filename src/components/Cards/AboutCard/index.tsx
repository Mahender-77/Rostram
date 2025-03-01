import { useGSAP } from "@gsap/react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutCard = () => {
  useGSAP(() => {
    gsap.from(".data", {
      textContent: 0,
      duration: 0.4, // Faster animation
      ease: "power2.out", // Smooth but quick animation
      snap: { textContent: 1 },
      //   stagger: 0.3, // Reduced stagger delay
      scrollTrigger: {
        trigger: ".data",
        start: "top 70%", // Trigger animation earlier
        // end: "bottom center",
        scrub: false, // Disable scrub for instant effect
        // markers: true,
      },
    });
    gsap.from(".about", {
      opacity: 0,
      x: -100,
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        markers: true,
        end: "top 30%",
        scrub: 1,
      },
      duration: 1,
      delay: 3,
    });
  });

  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto",
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // border: "1px solid red",
        marginTop: "40px",
        position: "relative",
        overflow: "clip",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 2040 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -10, // Ensures the SVG stays in the background
        }}
      >
        <path
          className="about"
          d="M-20.2073 -5.37025C115.815 -6.10958 250.627 15.5602 376.532 58.4017C502.436 101.243 616.968 164.418 713.587 244.318C810.207 324.218 887.022 419.279 939.646 524.074C992.271 628.869 1019.67 741.345 1020.29 855.08C1020.91 968.815 994.731 1081.58 943.249 1186.94C891.767 1292.3 815.99 1388.19 720.245 1469.14C624.5 1550.09 510.661 1614.5 385.23 1658.71C259.798 1702.92 125.23 1726.05 -10.7926 1726.79L-15.4999 860.71L-20.2073 -5.37025Z"
          stroke="#434549"
          strokeWidth="10"
          fill="#434549"
        />
      </svg>
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
            //   border: "1px solid black",
          }}
        >
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: 600,
              fontFamily: "Gilroy, sans-serif",
              color: "var(--whiteText)",
            }}
          >
            About Us
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              height: "100%",
              // border: "1px solid black",
              gap: 1,
              // paddingX: 4,
            }}
          >
            <Box
              sx={{
                width: "40%",
                height: "200px",
                textAlign: "center",
                placeContent: "center",
                //   border: "1px solid black",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                <Typography
                  className="data"
                  sx={{
                    fontSize: "50px",
                    fontWeight: 600,
                    fontFamily: "Gilroy, sans-serif",
                    color: "var(--whiteText)",
                  }}
                >
                  20
                </Typography>{" "}
                <span
                  style={{
                    fontSize: "50px",
                    fontWeight: 600,
                    fontFamily: "Gilroy, sans-serif",
                    color: "var(--whiteText)",
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
                  color: "var(--whiteText)",
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
                //   border: "1px solid black",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                <Typography
                  className="data"
                  sx={{
                    fontSize: "50px",
                    fontWeight: 600,
                    fontFamily: "Gilroy, sans-serif",
                    color: "var(--whiteText)",
                  }}
                >
                  6
                </Typography>{" "}
                <span
                  style={{
                    fontSize: "50px",
                    fontWeight: 600,
                    fontFamily: "Gilroy, sans-serif",
                    color: "var(--whiteText)",
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
                  color: "var(--whiteText)",
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
                //   border: "1px solid black",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                <Typography
                  className="data"
                  sx={{
                    fontSize: "50px",
                    fontWeight: 600,
                    fontFamily: "Gilroy, sans-serif",
                    color: "var(--whiteText)",
                  }}
                >
                  5
                </Typography>{" "}
                <span
                  style={{
                    fontSize: "50px",
                    fontWeight: 600,
                    fontFamily: "Gilroy, sans-serif",
                    color: "var(--whiteText)",
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
                  color: "var(--whiteText)",
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
                //   border: "1px solid black",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                <Typography
                  className="data"
                  sx={{
                    fontSize: "50px",
                    fontWeight: 600,
                    fontFamily: "Gilroy, sans-serif",
                    color: "var(--whiteText)",
                  }}
                >
                  500
                </Typography>{" "}
                <span
                  style={{
                    fontSize: "50px",
                    fontWeight: 600,
                    fontFamily: "Gilroy, sans-serif",
                    color: "var(--whiteText)",
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
                  color: "var(--whiteText)",
                }}
              >
                Satisfied Clints
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
            sx={{
              fontSize: "16px",
              lineHeight: "30px",
              fontWeight: 500,
              fontFamily: "Gilroy, sans-serif",
              color: "var(--darkGray)",
            }}
          >
            At Rostram, we have over 20 years of experience in building and
            growing eCommerce stores. Our expertise includes popular platforms
            like Shopify, Magento, and WooCommerce. We’ve always been a creative
            pioneer, especially in German VFX, with the capacity for 100+
            employees to handle any project, big or small.
            <p>
              As an eCommerce web design and development company, we’ve helped
              major brands succeed by creating responsive, scalable, and
              user-friendly online stores. Our goal is to ensure a smooth
              customer journey, which we believe is key to success.
            </p>
            This approach has consistently met our clients' expectations.We
            apply the same principles to your store, aiming for measurable
            results from day one. Trust Rostram to deliver an excellent
            eCommerce experience, leveraging our extensive experience and
            dedication to quality.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutCard;
