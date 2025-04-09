import React from 'react';
import SwipeableViews from 'react-swipeable-views';
//@ts-expect-error Missing type definitions for react-swipeable-views-utils
import { autoPlay } from 'react-swipeable-views-utils';
import {
  Box,
  MobileStepper,
  Paper,
  Typography,
  useTheme,
  IconButton,
} from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'Image One',
    imgPath: 'https://via.placeholder.com/600x300?text=Image+1',
  },
  {
    label: 'Image Two',
    imgPath: 'https://via.placeholder.com/600x300?text=Image+2',
  },
  {
    label: 'Image Three',
    imgPath: 'https://via.placeholder.com/600x300?text=Image+3',
  },
  {
    label: 'Image Four',
    imgPath: 'https://via.placeholder.com/600x300?text=Image+4',
  },
];

function ImageCarousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    );
  };

  const handleStepChange = (step: React.SetStateAction<number>) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 600, flexGrow: 1, mx: 'auto' }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 300,
                  display: 'block',
                  maxWidth: 600,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <IconButton size="small" onClick={handleNext}>
            <KeyboardArrowRight />
          </IconButton>
        }
        backButton={
          <IconButton size="small" onClick={handleBack}>
            <KeyboardArrowLeft />
          </IconButton>
        }
        sx={{ justifyContent: 'center' }}
      />
    </Box>
  );
}


export default ImageCarousel;