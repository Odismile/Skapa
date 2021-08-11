import { Box, Button } from '@material-ui/core';
import React from 'react';
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';
import useStyles from './style';

const OnboardingProfileSix = () => {
  const classes = useStyles();

  return (
    <>
      <WrapOnBoarding>
        <Box className={classes.onBoard}>
          <p>What are your goals using Talent Team ?</p>
        </Box>
        <Box className={classes.btnNext}>
          <Button variant="contained">Next</Button>
        </Box>
      </WrapOnBoarding>
    </>
  );
};

export default OnboardingProfileSix;
