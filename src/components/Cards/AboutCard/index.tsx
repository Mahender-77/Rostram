import { useGSAP } from "@gsap/react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  });

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        margin:"auto",
        height: "60vh",
        // border: "1px solid red",
        marginTop: "40px",
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
        <Typography sx={{ fontSize: "40px", fontWeight: 600 }}>
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
                sx={{ fontSize: "50px", fontWeight: 600 }}
              >
                20
              </Typography>{" "}
              <span style={{ fontSize: "50px" }}>+</span>
            </Box>
            <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
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
                sx={{ fontSize: "50px", fontWeight: 600 }}
              >
                6
              </Typography>{" "}
              <span style={{ fontSize: "50px" }}>+</span>
            </Box>
            <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
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
                sx={{ fontSize: "50px", fontWeight: 600 }}
              >
                5
              </Typography>{" "}
              <span style={{ fontSize: "50px" }}>+</span>
            </Box>
            <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
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
                sx={{ fontSize: "50px", fontWeight: 600 }}
              >
                500
              </Typography>{" "}
              <span style={{ fontSize: "50px" }}>+</span>
            </Box>
            <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
              Satisfied Clints
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "50%", height: "100%",alignItems:"center", placeContent:"center" }}>
        <Typography sx={{ fontSize: "16px", fontWeight: 500 ,lineHeight:"30px",color:"#666666"}}>
          At Rostram, we have over 20 years of experience in building and
          growing eCommerce stores. Our expertise includes popular platforms
          like Shopify, Magento, and WooCommerce. We’ve always been a creative
          pioneer, especially in German VFX, with the capacity for 100+
          employees to handle any project, big or small.
          
          <p>As an eCommerce web
          design and development company, we’ve helped major brands succeed by
          creating responsive, scalable, and user-friendly online stores. Our
          goal is to ensure a smooth customer journey, which we believe is key
          to success.</p> 
          
          This approach has consistently met our clients'
          expectations.We apply the same principles to your store, aiming for
          measurable results from day one. Trust Rostram to deliver an excellent
          eCommerce experience, leveraging our extensive experience and
          dedication to quality.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutCard;
