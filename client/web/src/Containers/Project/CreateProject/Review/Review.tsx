import React from 'react';
import { Box, Typography } from '@material-ui/core';
import CardReview from '../../../../Components/CardReview/CardReview';
import Pitch from '../../../../Components/Pitch/Pitch';
import Place from '../../../../Components/Place/Place';
import Presentation from '../../../../Components/Presentation/Presentation';
import Tags from '../../../../Components/Tags/Tags';
import useStyles from './styles';

const Review = () => {
  const classes = useStyles();

  return (
    <Box className={classes.review_bloc}>
      <CardReview />
      <Pitch />
      <Typography variant="h6" className="titre">
        Présentation
      </Typography>
      <Presentation />
      <Typography variant="h6" className="titre">
        Tags
      </Typography>
      <Tags />
      <Typography variant="h6" className="titre">
        Place
      </Typography>
      <Place />
    </Box>
  );
};

export default Review;
