import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import women from "../../../assets/women.png";
import Boy from "../../../assets/Boy.png";
import Boy1 from "../../../assets/Boy1.png";
import men from "../../../assets/men.png";
import TeenBoy from "../../../assets/TeenBoy.png";
import Men1 from "../../../assets/Men1.png";
import React from "react";

const cards = [
  {
    id: 1,
    name: "Raju Raju Raju Raju ",
    position: "CEO",
    color: "var(--darkGray)",
    image: men,
  },
  {
    id: 2,
    name: "Vijay",
    position: "Project Manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "var(--darkGray)",
    image: Boy1,
  },
  {
    id: 3,
    name: "Raju",
    position: "Front-end Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "var(--darkGray)",
    image: Men1,
  },
  {
    id: 4,
    name: "Sanjay Kumar",
    position: "Front-end Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "var(--darkGray)",
    image: Boy1,
  },
  {
    id: 5,
    name: "Mahender",
    position: "Front-end Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "var(--darkGray)",
    image: TeenBoy,
  },
  {
    id: 6,
    name: "Satish",
    position: "IT Manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#FFC400",
    image: Boy1,
  },
  {
    id: 7,
    name: "John Doe",
    position: "Front-end Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#56C03C",
    image: Boy,
  },
  {
    id: 8,
    name: "Mary Doe",
    position: "CTO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#3FC0F0",
    image: women,
  },
  {
    id: 9,
    name: "Mary Doe",
    position: "CTO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#FFC400",
    image: women,
  },
];

const Squad = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{
        marginY: "3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Typography
        sx={{
          fontSize: "3rem",
          fontWeight: 600,
          fontFamily: "Nunito Sans, sans-serif",
          backgroundImage:
            "linear-gradient(120deg,rgb(142, 14, 14),rgb(255, 0, 8),rgb(142, 14, 14))",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          width: "70%",
          "@media (max-width: 600px)": {
            fontSize: "2rem",
            width: "90%",
          },
        }}
      >
        Our Team
      </Typography>

      <Box
        sx={{
          width: "100%",
          maxWidth: "1300px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            left: 0,
            zIndex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
          }}
          onClick={() => handleScroll("left")}
        >
          <ArrowBackIos sx={{ color: "#fff" }} />
        </IconButton>

        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
            padding: "1rem 3rem", // Padding added for first/last card visibility
            gap: 2,
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {cards.map((card) => (
            <Box
              key={card.id}
              sx={{
                minWidth: "250px",
                maxWidth: "250px",
                height: { xs: "38vh", sm: "45vh", md: "45vh" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: "0.5rem 1rem",
                borderRadius: "1rem",
                border: `1px solid ${card.color}`,
                borderBottom: `10px solid ${card.color}`,
                position: "relative",
                ":hover": {
                  color: "var(--logoRed)",
                  transform: "scale(1.02)",
                  transition: "all 0.3s ease-in-out",
                },
              }}
            >
              <Box
                sx={{
                  backgroundColor: "var(--lightGray)",
                  position: "absolute",
                  bottom: { xs: 5, sm: 10 },
                  right: { xs: "18%", sm: "15%", md: "20%", lg: "8%" },
                  padding: "0.5rem",
                  width: { xs: "40vw", sm: "20vw", md: "15vw", lg: "15vw" },
                  height: { xs: "18vh", sm: "25vh", md: "27vh" },
                  borderRadius: "50%",
                  zIndex: -1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  ":hover": {
                    boxShadow: "0px 20px 60px rgba(255, 0, 0, 0.25)",
                  },
                }}
              >
                <img
                  src={card.image}
                  alt={card.name}
                  style={{
                    position: "absolute",
                    bottom: -10,
                    objectFit: "contain",
                    width: "100%",
                    height: "auto",
                    maxWidth: "230px",
                    maxHeight: "230px",
                  }}
                />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    fontFamily: "Nunito Sans, sans-serif",
                    color: "var(--blackbackGround)",
                    width: "100%",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {card.name}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    fontFamily: "Nunito Sans, sans-serif",
                    color: "var(--whiteText)",
                    backgroundColor: "var(--logoRed)",
                    padding: "0.25rem 0.5rem",
                  }}
                >
                  {card.position}
                </Typography>

                <Typography
                  sx={{
                    width: "100%",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    fontFamily: "Nunito Sans, sans-serif",
                    color: "var(--blackbackGround)",
                    mt: 1,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {card.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <IconButton
          sx={{
            position: "absolute",
            right: 0,
            zIndex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
          }}
          onClick={() => handleScroll("right")}
        >
          <ArrowForwardIos sx={{ color: "#fff" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Squad;
