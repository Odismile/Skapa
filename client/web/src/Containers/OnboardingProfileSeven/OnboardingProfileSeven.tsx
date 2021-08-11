import React, { useRef, useState } from 'react';
import { Box, Button, Container, Typography } from "@material-ui/core";
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';
import useStyles from "./style";

import image_profile from '../../Assets/images/image_profile.png';
import image_organisation from '../../Assets/images/organisation.png';

const OnboardingProfileSix = () => {
  const classes = useStyles();

  return (
    <>
      <WrapOnBoarding width={210} marginTop= {40}>
        <Box className={classes.onBoard}>
          <h1 className="welcome">Welcome !</h1>
          <Box className="profile-organisation">
            <figure className="figure-organisation">
              <img src={image_organisation} alt="organisation" />
            </figure>
            <figure className="figure-profile">
              <img src={image_profile} alt="profile" />
            </figure>
          </Box>
        </Box>
      </WrapOnBoarding>
    </>
  );
};

export default OnboardingProfileSix;
