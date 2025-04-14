import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

export const TempleTown = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "var(--grayFooter)",
        py: "2rem",
        mb:4
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "2rem", sm: "3rem" },
          fontWeight: 600,
          fontFamily: "Gilroy, sans-serif",
          backgroundImage:
            "linear-gradient(120deg, rgb(142, 14, 14), rgb(255, 0, 8), rgb(142, 14, 14))",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          mb: 5,
          px: 2,
        }}
      >
        Temple Town
      </Typography>

      <Box sx={{ maxWidth: "80%", mx: "auto", textAlign: "center", px: 2 }}>
        <Typography
          sx={{
            color: "#FF0000",
            fontSize: "1.2rem",
            lineHeight: "1.8",
            fontFamily: "Gilroy, sans-serif",
            mb: 3,
            "& span": {
              color: "#666666",
            },
          }}
        >
          <span>Temple Town</span> is an <span>innovative hotel booking platform</span> developed by Rostram, specifically designed to cater to <span>pilgrims and travelers</span> visiting sacred temple destinations. Our platform bridges the gap between <span>spirituality and convenience</span> by providing seamless accommodation solutions near famous temples across India.
        </Typography>

        <Typography
          sx={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#333",
            fontFamily: "Gilroy, sans-serif",
            mb: 2,
          }}
        >
          With <strong>Temple Town</strong>, users can explore verified hotels, compare amenities, and book accommodations with ease. Whether planning a solo pilgrimage, a family visit, or a group journey, our platform ensures a comfortable and hassle-free stay.
        </Typography>

        <List
          sx={{
            textAlign: "left",
            mx: "auto",
            maxWidth: "600px",
            color: "#444",
          }}
        >
          <ListItem>
            <ListItemText
              primary="Easy Booking"
              secondary="Quick and secure reservations near major temple sites."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Verified Stays"
              secondary="Handpicked hotels that ensure a safe and pleasant experience."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Best Prices"
              secondary="Affordable rates with exclusive discounts for pilgrims."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="24/7 Support"
              secondary="Dedicated assistance for all your travel needs."
            />
          </ListItem>
        </List>

        <Typography
          sx={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#333",
            fontFamily: "Gilroy, sans-serif",
            mt: 3,
          }}
        >
          At <strong>Rostram</strong>, we believe in leveraging technology to enhance spiritual journeys. <strong>Temple Town</strong> is our commitment to providing a seamless, user-friendly, and enriching experience for every traveler.
        </Typography>
      </Box>
    </Box>
  );
};
