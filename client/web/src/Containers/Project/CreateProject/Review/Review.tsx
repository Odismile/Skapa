import React, { useRef, useState } from 'react';
import { Box, Button, Container, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import classNames from "classnames";


import useStyles from "./styles";
import CardReview from '../../../../Components/CardReview/CardReview';
import Tags from '../../../../Components/Tags/Tags';



const Review = () => {
  const classes = useStyles();

  return (
    <Box className={classes.review_bloc}>
      <CardReview/>
      <Tags/>
    </Box>
  );
};

export default Review;
