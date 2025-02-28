import { Box } from "@mui/material";
import React from "react";

const Services = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        // border: "2px solid black",
        minHeight: "80vh",
        gap: "20px",
        justifyContent: "center",
        marginTop:"20px        "
     
      }}
    >
      <Box
        sx={{ width: "40%", height: "320px", border: "1px solid black", borderRadius:"30px", borderBottom: "10px solid black" }}
      ></Box>     
      <Box
        sx={{ width: "40%", height: "320px", border: "1px solid black", borderRadius:"30px", borderBottom: "10px solid black" }}
      ></Box>     
      <Box
        sx={{ width: "40%", height: "320px", border: "1px solid black", borderRadius:"30px", borderBottom: "10px solid black" }}
      ></Box>     
      <Box
        sx={{ width: "40%", height: "320px", border: "1px solid black", borderRadius:"30px", borderBottom: "10px solid black" }}
      ></Box>     
    </Box>
  );
};

export default Services;
