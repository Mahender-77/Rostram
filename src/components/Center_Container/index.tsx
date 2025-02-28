import { useGSAP } from "@gsap/react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";

export const Center_Container = () => {
  useGSAP(() => {
    gsap.from(".animated-line", {
      delay: 2,
      duration: 5,
      strokeDasharray: 1000,
      strokeDashoffset: 1000,
      ease: "power2.inOut",
    });
  });
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <svg
          width="100%"
          height="1000"
          viewBox="0 0 1000 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ border: "1px solid red" }}
        >
          <path
            className="animated-line"
            // d="M50,250 C10,10 10,20 3,100 L50,100 L50,100 L100,100 L100,50 L150,50 L150,100 L200,100 L200,250    C700,300 200,20 0,200  C100,200 20,0 700 C100,200 20,0 700,-20 C700,300 200,20 0,200 Z"
            //           d="M1000,300
            // C950,250 920,150 880,200
            // L880,20 L840,50 L840,200
            // C800,100 750,350 700,200
            // L700,200 L660,100 L660,200
            // C600,200 550,150 500,300
            // C450,150 400,100 350,150
            // C300,100 250,300 200,250
            // C150,50 100,100 50,300"
            // d="M1000 200 600 200"
            // C1000,150 920,150 880,200"
            // d="M1000,2 L850,250"
            // d="M150,250 C300,100 700,100 500,250 C300,400 700,400 850,250"
            // d="M2 230C145.2 385.2 494 364 538 308C583 239 425 145.5 384 179C318.4 232.6 329 419 937 354"
            //MAin
            // d="M-1 1C221.707 327.107 692.978 268.264 761.407 150.597C831.392 5.61383 605.693 73.9675 510.469 89.2867C351.929 114.792 494.428 257.256 1440 120.677"
            //Pencil
            d="M1 220C1 220 500.5 -100.5 353.5 100.5C206.5 301.5 647.5 161.5 647.5 161.5V133L761.5 19.0002C795.5 19.0002 792 31 792 49L678.314 161.5C678.314 161.5 1285 -106 1122 49C959 204 1437 161.5 1437 161.5"
            stroke="#E73A3C"
            strokeWidth="5"
            fill="none"
          />
          {/* <circle cx="200" cy="50" r="5" fill="#E73A3C" />
        <circle cx="300" cy="50" r="5" fill="#E73A3C" />
        <circle cx="100" cy="50" r="5" fill="#E73A3C" /> */}
        </svg>
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            top: 0,
          }}
        >
          Hello
        </Typography>
      </Box>
    </Box>
  );
};
