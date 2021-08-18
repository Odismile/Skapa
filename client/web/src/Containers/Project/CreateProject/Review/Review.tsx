import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import CardReview from '../../../../Components/CardReview/CardReview';
import Pitch from '../../../../Components/Pitch/Pitch';
import Place from '../../../../Components/Place/Place';
import Presentation from '../../../../Components/Presentation/Presentation';
import Tags from '../../../../Components/Tags/Tags';
import useStyles from './styles';
import { useGetProject } from '../../../../Providers/ProjectProvider/useGetProject';
import { projectIdVariable } from '../../../../ReactiveVariable/Project/createProject';

const Review = () => {
  const classes = useStyles();

  const { data, loading } = useGetProject(projectIdVariable());

  return (
    <Box className={classes.review_bloc}>
      <CardReview data={data} />
      <Pitch url={data?.projects?.[0]?.Video ?? ''} />
      <Typography variant="h6" className="titre">
        Présentation
      </Typography>
      <Presentation data={data} />
      <Typography variant="h6" className="titre">
        Tags
      </Typography>
      <Tags data={data} />
      <Typography variant="h6" className="titre">
        Place
      </Typography>
      <Place data={data} />
    </Box>
  );
};

export default Review;
