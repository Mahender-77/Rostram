
import { Box, Typography } from "@mui/material";
import itserviceimg from "../../../assets/IT.gif";
import ITSupportImg from "../../../assets/Service.gif";
import VFXImg from "../../../assets/VFX.gif";

const services = [
  { id: 1, bgColor: "#56C03C", img: itserviceimg, name: "It Services" },
  { id: 2, bgColor: "#3FC0F0", img: ITSupportImg, name: "VFX" },
  { id: 3, bgColor: "#FFC400", img: VFXImg, name: "Support" },
];

const OurServices = () => {
  return (
    <Box
      sx={{
        flex: 1,
        width: "100%",
        height: "47vh",
        margin: "auto",
        // backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        whiteSpace: "nowrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {services.map((item) => (
          <Box
            sx={{
              border: 1,
              width: "15rem",
              height: "18rem",
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
              justifyContent: "space-between",
              backgroundColor: `${item.bgColor}`,
              borderRadius: "1rem",
              scale: 1,
              textDecoration: "none",

              color: "var(--blackButton)",
              transition: "transform 0.5s ease, box-shadow 0.3s ease",
              ":hover": {
                scale: 1.02,
                backgroundColor: "transparent",
                border: 1.5,
                borderColor: item.bgColor,
                color: item.bgColor,
                transform: "translateY(-8px)",
                boxShadow: `0 12px 24px ${item.bgColor}70`,
                textDecoration: "underline",
              },
            }}
          >
            <Typography
              sx={{
                textTransform: "capitalize",
                fontSize: "1.5rem",
                fontWeight: 600,
                fontFamily: "Gilroy, sans-serif",
              }}
            >
              {item.name}
            </Typography>
            <img
              height="190px"
              width="100%"
              style={{ objectFit: "contain" }}
              src={item.img}
              alt={item.name}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OurServices;
