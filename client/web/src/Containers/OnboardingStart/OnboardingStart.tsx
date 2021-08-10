import React, { useRef, useState } from 'react';
import { Box, Button, Container, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import classNames from "classnames";


import mainLogo from "../../Assets/images/logo.svg"
import useStyles from "./styles";

const OnboardingStart = () => {
  const classes = useStyles();
  console.log(classes)
  return (
    <Box className={classes.mainPage}>
      <Box className="wrapPage">
        <Box component="header" className={classNames(classes.main_header)}>
          <figure className="logo">
            <img src={mainLogo} alt="logo" />
          </figure>
        </Box>
        <Box className={classNames(classes.mainContainer)}>
          <Box className="createProfile_start">
            <Typography variant="h1">Now, let’s create <br />your profile !</Typography>
            <Button variant="contained" className={classes.btn_createProfile} color="primary" >Create profile</Button>
          </Box>
        </Box>
        <Box component="footer" className={classes.footerPage} >
        <Typography className="link-footer">
          <Link to="/">Skip profile creation</Link>
        </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OnboardingStart;
