import React from 'react';
import { Box, Button } from "@material-ui/core";
import {Link } from 'react-router-dom';

import classNames from "classnames";

import useStyles from "./styles";

const Onboarding = () => {
  const classes = useStyles();
  return (
    
    <Box className={classNames(classes.root)}>
      <p>lorem</p>
    </Box>
  );
};

export default Onboarding;
