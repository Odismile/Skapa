import React, { useRef, useState } from 'react';
import { Box, Button, Container, Typography } from "@material-ui/core";
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';

import useStyles from './styles';

const OnboardingProfileSeven = () => {
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

export default OnboardingProfileSeven;
