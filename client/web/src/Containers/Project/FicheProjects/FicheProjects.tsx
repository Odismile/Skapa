import React from 'react';
import { Box, Button, Divider, Typography } from '@material-ui/core';
import useStyles from './styles';
import Presentation from '../../../Components/Presentation/Presentation';
import Tags from '../../../Components/Tags/Tags';
import FormerProject from '../../../Components/FormerProjects/FormerProjects';
import Pitch from '../../../Components/Pitch/Pitch';
import CardReview from '../../../Components/CardReview/CardReview';

const FicheProject = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className="card-review">
        <CardReview />
      </Box>
      <Box className="pitch">
        <Pitch />
      </Box>
      <Box className="presentation">
        <Typography variant="h6" className="title">
          Présentation
        </Typography>
        <Presentation />
      </Box>
      <Box className="tags">
        <Typography variant="h6" className="title">
          Tags
        </Typography>
        <Tags />
        <Box className='btn'>
          <Button className="btn-contibute">Contribute</Button>
        </Box>
      </Box>
      <Divider className="divider" />
      <Box className="similarProjects">
        <Typography variant="h6" className="title">
          Similar projects
        </Typography>
        <FormerProject />
      </Box>
    </Box>
  );
};

export default FicheProject;
