import { Box, Typography, Button } from "@mui/material"
import backgroundimg from  "../../assets/back_ground_image.jpg"

export const Home = () => {
    return (
        <Box sx={{
            backgroundImage: `url(${backgroundimg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography variant="h3" sx={{ color: 'white', textAlign: 'center', mb: 3 }}>
                Transforming Ideas into Digital Reality
            </Typography>
            <Typography variant="h6" sx={{ color: 'white', textAlign: 'center', mb: 4 }}>
                We build innovative solutions for tomorrow's challenges
            </Typography>
            <Button variant="contained"  size="large" sx={{ fontSize: '1.2rem', backgroundColor:"#E73A3C" ,fontWeight:600}}>
                Get Started
            </Button>
        </Box>
    )
}