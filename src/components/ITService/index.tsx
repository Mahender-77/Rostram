import { Box, Typography } from "@mui/material";
import { useState } from "react";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import ConstructionIcon from "@mui/icons-material/Construction";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export const ITService = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const ITservice = [
    {
      title: "Custom Application development",

      description:
        "Custom Software Development is a process of designing, building, integrating software solutions as per the business need to address the pressing needs or to achieve your business objectives. Being a Custom App Development company, rostram can help you from the requirement phase to support & on-going enhancement phases where you can focus on core business while we do the tech work as your partner. rostram will add value to your requirement by being an advisory member for your technology requirement. We leverage the experience of our resources who have worked on varied technologies, in different industries across the globe. This strength gives us to be a strong player in delivering work with high quality, on-time and within the stipulated budget. Our technology stack ranges from older to latest technologies like Classic ASP to .NET Core, Java, NodeJS, PHP, Python, Ruby on Rails, HTML5, Angular, React, Vuejs, MySQL, SQL, Oracle DB, AWS, GCP and Azure etc. rostram can create a customized development process for you which fits your need and we also setup an end-to-end activity for DevOps, CD, CT, CI & CD, also does a Security Review of your whole infrastructure & application architecture. As part of Custom Application Development we develop Web, Mobile and Desktop applications along with integration of 3rd party applications.",

      content: [
        {
          icon: AutoFixHighIcon,
          name: "Custom App Design and Development",
        },
        {
          icon: IntegrationInstructionsIcon,
          name: "App Integration",
        },
        {
          icon: ConstructionIcon,
          name: "API Development",
        },
        {
          icon: AutoAwesomeIcon,
          name: "Enhancements",
        },
      ],
    },
    {
      title: "Product Development",
      content: [{ description: "" }],
    },
    {
      title: "Data Analytics Services",
      content: [{ description: "" }],
    },
    {
      title: "Product Re-Engineering",
      content: [{ description: "" }],
    },
    {
      title: "Mobile Application development",
      content: [{ description: "" }],
    },
    {
      title: "Testing",
      content: [{ description: "" }],
    },
  ];

  return (
    <Box
      sx={{
        marginTop: "100px",
        width: "100%",
        height: "110vh",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {/* Main Layout */}
      <Box sx={{ display: "flex", width: "100%", gap: 4 }}>
        {/* Left Side Navigation */}
        <Box
          sx={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Nunito Sans, sans-serif",
              fontSize: "1.5rem",
              color: "var(--logoRed)",
              fontWeight: 800,
            }}
          >
            20+ Years of Experience
          </Typography>
          {ITservice.map((item, index) => (
            <Box
              key={index}
              onClick={() => setSelectedIndex(index)}
              sx={{
                // backgroundColor: "var(--grayFooter)",
                color:
                  selectedIndex === index ? "var(--logoRed)" : "var(--white)",
                padding: 2,
                paddingY: 3,
                fontSize: "1.2rem",
                fontFamily: "Nunito Sans, sans-serif",
                fontWeight: selectedIndex === index ? 600 : 500,
                borderRight:
                  selectedIndex === index
                    ? "10px solid var(--logoRed)"
                    : "none",
                backgroundColor:
                  selectedIndex === index
                    ? "rgba(255, 0, 0, 0.1)"
                    : "var(--grayFooter)",
                cursor: "pointer",
                borderRadius: 1,
                transition: "all 0.3s ease",
              }}
            >
              {item.title}
            </Box>
          ))}
        </Box>

        {/* Right Side Content */}
        <Box
          sx={{
            width: "75%",
            padding: 4,
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            gap: 4,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Nunito Sans, sans-serif",
              fontSize: "1.1rem",
              lineHeight: 1.6,
            }}
          >
            {ITservice[selectedIndex].description}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Nunito Sans, sans-serif",
              fontSize: "1.2rem",
              fontWeight: 800,
              color: "var(--logoRed)",
            }}
          >
            WE PERFORM
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {ITservice[selectedIndex].content &&
              ITservice[selectedIndex].content.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    minWidth: "250px",
                  }}
                >
                  {"icon" in item && item.icon && (
                    <item.icon
                      sx={{ color: "var(--logoRed)", fontSize: "2rem" }}
                    />
                  )}
                  <Typography
                    sx={{
                      fontFamily: "Nunito Sans, sans-serif",
                      fontSize: "1.1rem",
                      fontWeight: 800,
                    }}
                  >
                    {"name" in item ? item.name : item.description}
                  </Typography>
                </Box>
              ))}
          </Box>
          <Box
            sx={{ display: "flex", height: "300px", borderRadius:2}}
          >
            <Box
              sx={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "var(--grayFooter)",
               
              }}
            >
              <Typography sx={{ fontFamily: "Nunito Sans, sans-serif",
                fontSize: "2rem",
                color: "var(--logoRed)",
                fontWeight: 900,}}>WHY ROSTRAM?</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
