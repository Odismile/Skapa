import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import classNames from "classnames";
import useStyles from './style';

// icons
import Burger from '../../Components/Icons/Burger/Burger';
import Award from '../../Components/Icons/Award/Award';
import HeartLine from '../../Components/Icons/HeartLine/HeartLine';
import Photo from '../../Components/Icons/Photo/Photo';


const PrimaryHeader = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.header_block}>
      <Box className="header_content">
        {/* burger menu mobile */}
        <Burger />
        <Award />
        <HeartLine />
        <Photo />

        {/* logo mobile */}

        {/* list of notification */}
      </Box>
    </Box>
  );
};

export default PrimaryHeader;
