import { useState, useEffect, Fragment } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Add some Genres', 'Select your Favorite Artists', 'Building Feed!'];

export default function HorizontalLinearStepper({ selectedGenre, selectedArtirts, configStep }) {
  const [activeStep, setActiveStep] = useState(0);
  
  useEffect(() => {
    const ls = localStorage?.getItem('feed-cfg') || null;
    if(ls) {
      const { activeStep } = JSON.parse(ls);
      setActiveStep(activeStep);
      configStep(activeStep);
    }
  }, [])

  const updateLocalStorage = (selectedGenre) => {
    localStorage.setItem('feed-cfg', JSON.stringify(
      {
      selectedArtirts,
      selectedGenre,
      activeStep: activeStep + 1
      }
    ));
    
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    updateLocalStorage(selectedGenre);
    configStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    configStep(activeStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%', padding: '50px 0 10px' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </Fragment>
      ) : (
        <Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </Fragment>
      )}
    </Box>
  );
}