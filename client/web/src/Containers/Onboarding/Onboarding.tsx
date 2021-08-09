import React from 'react';
import { Box, Button, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';

import classNames from "classnames";

import useStyles from "./styles";


const Onboarding = () => {
  const classes = useStyles();
  return (
    
    <Box className={classNames(classes.root)}>
      <Box component="header">
        <figure className="logo">
          <img src="" alt="logo" />
        </figure>
      </Box>
      <Box className={classNames(classes.mainContainer)}>
        {/* slider content */}

      </Box>
      <Box component="footer" className={classes.footerPage} >
      
      </Box>
    </Box>
  );
};

export default Onboarding;
