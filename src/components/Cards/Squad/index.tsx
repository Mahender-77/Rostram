import { Box, Typography } from "@mui/material";
import women from "../../../assets/women.png";
import Boy from "../../../assets/Boy.png";
import Boy1 from "../../../assets/Boy1.png";
import men from "../../../assets/men.png";
import TeenBoy from "../../../assets/TeenBoy.png";
import Men1 from "../../../assets/Men1.png";

const cards = [
  {
    id: 1,
    name: "Raju",
    position: "CEO",
    description:
      "Exceptional service! The team is professional, efficient, and incredibly friendly.They completed the work swiftly and exceeded my expectations. Highly recommended!",
    color: "#56C03C",
    image: men,
  },
  {
    id: 2,
    name: "Vijay",
    position: "Project Manager",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#3FC0F0",
    image: Boy1,
  },
  {
    id: 3,
    name: "Raju",
    position: "Front-end Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#FFC400",
    image: Men1,
  },
  {
    id: 4,
    name: "Sanjay Kumar",
    position: "Front-end Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#56C03C",
    image: Boy1,
  },
  {
    id: 5,
    name: "Mahender",
    position: "Front-end Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    color: "#3FC0F0",
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
  return (
    <Box
      sx={{
        width: "80%",
        margin: "auto",
        display: "flex",
        flexDirection: "row",
        overflow: "scroll",
        scrollbarWidth: "none",
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor: "var(--blackbackGround)",
        gap: 5,
        marginTop: "5rem",
        marginBottom: "5rem",
      }}
    >
      {cards.map((card) => (
        <Box
          key={card.id}
          sx={{
            minWidth: "27%",
            maxWidth: "27%",
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: "0.5rem",
            paddingX: "1rem",
            // gap: 3,
            // backgroundColor: "var(--blackText)",
            borderRadius: "1rem",
            border: `1px solid ${card.color}`,
            borderBottom: `10px solid ${card.color}`,
            position: "relative",
          }}
        >
          <Typography
            sx={{
              fontSize: "2.75rem",
              fontWeight: 600,
              fontFamily: "Gilroy, sans-serif",
              color: "var(--blackbackGround)",
            }}
          >
            {card.name}
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 500,
              fontFamily: "Gilroy, sans-serif",
              color: `${card.color}`,
            }}
          >
            {card.position}
          </Typography>

          <Box
            sx={{
              backgroundColor: card.color,
              position: "absolute",
              bottom: { xs: 5, sm: 10 },
              right: { xs: "5%", sm: "10%", md: "15%" }, // Adjust right positioning
              padding: "0.5rem",
              width: { xs: "30vw", sm: "20vw", md: "15vw" }, // Responsive width
              height: { xs: "20vh", sm: "25vh", md: "27vh" }, // Responsive height
              borderRadius: { xs: "50%", sm: "80%", md: "100%" }, // Adjust border-radius
              zIndex: -1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={card.image}
              alt=""
              style={{
                position: "absolute",
                bottom: -10,
                // right: 10, // Use a single value for the right positioning
                objectFit: "contain",
                width: "100%", // Ensure it scales with the Box
                height: "auto", // Maintain aspect ratio
                maxWidth: "230px", // Prevent overflow
                maxHeight: "230px",
              }}
            />
          </Box>

          <Typography
            sx={{
              width: "100%",
              fontSize: "1rem",
              fontWeight: 500,
              fontFamily: "Gilroy, sans-serif",
              color: "var(--blackbackGround)",
            }}
          >
            {card.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Squad;
