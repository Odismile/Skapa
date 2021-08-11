import React, { useRef, useState } from 'react';
import { Box, Button, Container, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import classNames from "classnames";

import mainLogo from "../../Assets/images/logo.svg"
import useStyles from "./style";

const OnboardingProfileSix = () => {
  const classes = useStyles();

  return (
    <Box className={classNames(classes.mainPage)}>
      <Box className="wrapPage">
        <Box component="header" className={classNames(classes.main_header)}>
          <figure className="logo">
            <img src={mainLogo} alt="logo" />
          </figure>
        </Box>
        <Box className={classNames(classes.mainContainer)}>
          <Box className="onboard-profile-content">
            <p>What are your goals using Talent Team ?</p>
            <Box className={classes.btnNext}>
              <Button variant="contained">Next</Button>
            </Box>
          </Box>
        </Box>
        <Box component="footer" className={classes.footerPage} >
          <Typography className="link-footer">
            <Link to="/">Skip this step</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OnboardingProfileSix;
