import React, { useRef, useState } from 'react';
import { Box, Button, Container, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import classNames from "classnames";


import useStyles from "./styles";



const Review = () => {
  const classes = useStyles();

  return (
    <Box className={classes.review_bloc}>
      <p>Review !</p>
    </Box>
  );
};

export default Review;
