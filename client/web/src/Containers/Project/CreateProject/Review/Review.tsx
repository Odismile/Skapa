import React, { useRef, useState } from 'react';
import { Box, Button, Container, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import classNames from "classnames";


import useStyles from "./styles";
import CardReview from '../../../../Components/CardReview/CardReview';
import Tags from '../../../../Components/Tags/Tags';
import Presentation from '../../../../Components/Presentation/Presentation';
import Pitch from '../../../../Components/Pitch/Pitch';
import Place from '../../../../Components/Place/Place';
import CardTalents from '../../../../Components/CardTalents/CardTalents';



const Review = () => {
  const classes = useStyles();

  return (
    <Box className={classes.review_bloc}>
      <CardReview/>
      <Pitch/>
      <Presentation/>
      <Tags/>
      <Place/>
      <CardTalents/>
    </Box>
  );
};

export default Review;
