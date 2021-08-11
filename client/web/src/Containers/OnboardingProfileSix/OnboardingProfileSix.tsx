import React, { useRef, useState } from 'react';
import { Box, Button, Container, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import classNames from "classnames";
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';

import mainLogo from "../../Assets/images/logo.svg"
import useStyles from "./style";

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
