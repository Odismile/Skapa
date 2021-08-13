import React, { useRef, useState } from 'react';
import { Box, Button, Container, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';


import useStyles from "./styles";
import CardReview from '../../../../Components/CardReview/CardReview';
import Tags from '../../../../Components/Tags/Tags';
import Presentation from '../../../../Components/Presentation/Presentation';
import Pitch from '../../../../Components/Pitch/Pitch';
import Place from '../../../../Components/Place/Place';



const Review = () => {
  const classes = useStyles();

  return (
    <Box className={classes.review_bloc}>
      <CardReview/>
      <Pitch/>
      <Typography variant='h6' className="titre">Présentation</Typography>
      <Presentation/>
      <Typography variant='h6' className="titre">Tags</Typography>
      <Tags/>
      <Typography variant='h6' className="titre">Place</Typography>
      <Place/>
    </Box>
  );
};

export default Review;
