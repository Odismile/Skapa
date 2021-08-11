import React, { useRef, useState } from 'react';
import { Box, Button, Container, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import classNames from "classnames";

import mainLogo from "../../Assets/images/logo.svg"
import useStyles from "./styles";
import PrimaryHeader from '../../../Components/Header';
import TabLink from '../../../Components/TabLink';

// install Swiper modules


const CreateProject = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainPage}>
      <Box className="wrapPage">
        {/* header component */}
        <PrimaryHeader />
        

        <Box className={classes.mainContainer}>
          <TabLink />
          <p>Create Project Page here !</p>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateProject;
