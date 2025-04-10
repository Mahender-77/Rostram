import { Box, Typography } from "@mui/material"
import { useState } from "react";

export const Support = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

    const Support = [
      {
        title: "App Support & Maintenance",
      },
      {
        title: "Quality Assurance",
      },
      {
        title: "Data Insights",
      },
      {
        title: "DevOps",
      },
    ];
  
    return (
      <Box
        sx={{
          marginTop: "100px",
          // border: "1px solid black",
          widht: "100%",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            width: "25%",
            height: "auto",
            backgroundColor: "var(--grayFooter)",
            //   paddingY: 2,
            marginLeft: 10,
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            //   gap: 4,
            // borderRadius: 5,
          }}
        >
          {Support.map((item, index) => (
            <Box
              key={index}
              onClick={() => setSelectedIndex(index)}
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                borderBottom:
                  index === Support.length - 1 ? "none" : "1px solid var(--darkGray)",
                color:
                  selectedIndex === index ? "var(--logoRed)" : "var(--white)",
                paddingY: 2,
                borderRight:
                  selectedIndex === index ? "5px solid var(--logoRed)" : "none",
                fontSize: "1.2rem",
                fontFamily: "Gilroy, sans-serif",
                borderBottomLeftRadius: index === Support.length - 1 ? 5 : 0,
                borderBottomRightRadius: index === Support.length - 1 ? 5 : 0,
              }}
            >
              <Typography
                sx={{
                  paddingLeft: 2,
                  fontFamily: "Gilroy, sans-serif",
                  fontSize: "1.2rem",
                  fontWeight: selectedIndex === index ? 600 : 500,
                }}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    );
}