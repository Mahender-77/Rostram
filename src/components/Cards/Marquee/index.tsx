// import { Box } from "@mui/material";

// import logo from "../../../assets/rostram_logo-removebg-preview.png";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// const Marquee = () => {

//     useGSAP(()=>{
//         gsap.to(".marquee",{
//             xPercent: -100,
//             // repeatRefresh:true,
//             repeat: -1,
//             ease: "none",
//             duration: 2,
//         })
//     })

//   return (
//     <Box>
//       <Box
//         className="move"
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           width: "100%",
//           height: "100%",
//           overflow: "hidden",
//           gap:1 ,
//         //   border:"1px solid red"
//         }}
//       >
//         <Box className="marquee">
//           <img width={200} src={logo} alt="" />
//         </Box>
//         <Box className="marquee">
//           <img width={200} src={logo} alt="" />
//         </Box>
//         <Box className="marquee">
//           <img width={200} src={logo} alt="" />
//         </Box>
//         <Box className="marquee">
//           <img width={200} src={logo} alt="" />
//         </Box>
//         <Box className="marquee">
//           <img width={200} src={logo} alt="" />
//         </Box>
//         <Box className="marquee">
//           <img width={200} src={logo} alt="" />
//         </Box>
//         <Box className="marquee">
//           <img width={200} src={logo} alt="" />
//         </Box>
//         <Box className="marquee">
//           <img width={200} src={logo} alt="" />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Marquee;
import React from "react";
import { Box } from "@mui/material";
// import "tailwindcss/tailwind.css";
import "./index.css";
import cosmosMaya from "../../../assets/cosmosMaya.png";
import discreetArt from "../../../assets/Discreet_arts-removebg-preview.png";
import templeTown from "../../../assets/trmpleLogo-removebg-preview.png";
import globalVisual from "../../../assets/globalvisualfx_logo.jpg";

const images = [

 {img: cosmosMaya,id:1},
 { img :discreetArt,id:2},
  {img :templeTown,id:3},
  {img:globalVisual,id:4},
 {img: cosmosMaya,id:5},
 { img :discreetArt,id:6},
  {img :templeTown,id:7},
  {img:globalVisual,id:8},
 {img: cosmosMaya,id:9},
 { img :discreetArt,id:10},
  {img :templeTown,id:11},
  {img:globalVisual,id:12},
 {img: cosmosMaya,id:13},
 { img :discreetArt,id:14},
  {img :templeTown,id:15},
  {img:globalVisual,id:16},
 
];

const Marquee: React.FC = () => {
  // const [isPaused, setIsPaused] = useState(false);
  // const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <Box
      sx={{ overflow: "hidden", whiteSpace: "nowrap", width: "100%" }}
    >
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          animation: "marquee 20s linear infinite",
          flexShrink: 0,
          gap:10,
          // animation: isPaused ? "none" : "marquee 30s linear infinite",
        }}
      >
        {images.map((img) => (
          <Box
            key={img.id}
            component="img"
            src={img.img}
            alt={`Marquee ${img.id}`}
            sx={{
              mx: 1,
              width:"100%",
              height: 150,
              objectFit: "cover",
              borderRadius: 2,
              // filter: "drop-shadow(0 0 10px rgba(241, 202, 103, 0.5))",
              // border:"1px solid white",
              // boxShadow: 3,
              // transition: "transform 0.3s ease, opacity 0.3s ease",
              // transform: hoveredIndex === img.id ? "scale(1.2)" : "scale(1)",
              // opacity: hoveredIndex !== null && hoveredIndex !== img.id ? 0.5 : 1,
            }}
            // onMouseEnter={() => {
            //   setIsPaused(true);
            //   setHoveredIndex(img.id);
            // }}
            // onMouseLeave={() => {
            //   setIsPaused(false);
            //   setHoveredIndex(null);
            // }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Marquee;

// Add this CSS to your global styles (e.g., index.css or a Tailwind plugin)
// @keyframes marquee {
//   from {
//     transform: translateX(0);
//   }
//   to {
//     transform: translateX(-50%);
//   }
// }
// .animate-marquee {
//   animation: marquee 10s linear infinite;
// }
