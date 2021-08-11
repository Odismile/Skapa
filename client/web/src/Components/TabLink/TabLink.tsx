import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import classNames from "classnames";
import useStyles from './style';

// icons
import Burger from '../Icons/Burger/Burger';
import Award from '../Icons/Award/Award';
import HeartLine from '../Icons/HeartLine/HeartLine';
import Photo from '../Icons/Photo/Photo';


const PrimaryHeader = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.tabList}>
      <Box className="header_content">
        {/* burger menu mobile */}
        <p>TabList here !</p>

        {/* logo mobile */}

        {/* list of notification */}
      </Box>
    </Box>
  );
};

export default PrimaryHeader;
