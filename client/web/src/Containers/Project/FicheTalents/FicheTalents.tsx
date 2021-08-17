import React from 'react';
import { Box, Button, Divider, Typography } from '@material-ui/core';
import useStyles from './styles';
import SimpleCardTalents from '../../../Components/SimpleCardTalents/SimpleCardTalents';
import Presentation from '../../../Components/Presentation/Presentation';
import Tags from '../../../Components/Tags/Tags';
import FormerProject from '../../../Components/FormerProjects/FormerProjects';
import Pitch from '../../../Components/Pitch/Pitch';

const FicheTalents = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className="profile">
        <SimpleCardTalents />
      </Box>
      <Box className='bio'>
        <Typography variant="h6" className="title">
          Bio
        </Typography>
        <Presentation />
      </Box>
      <Box className="skills">
        <Typography variant="h6" className="title">
          Skills
        </Typography>
        <Tags />
      </Box>
      <Box>
        <Typography variant="h6" className="title">
          Former projects
        </Typography>
        <FormerProject />
      </Box>
      <Box>
        <Pitch />
      </Box>
      <Box className="boxBtn">
        <Button className="btnAdd">Add to Project</Button>
      </Box>
      <Divider />
      <Typography className="textSuggest">
        You like Emma ? <br></br>You will like :
      </Typography>
      <SimpleCardTalents />
    </Box>
  );
};

export default FicheTalents;
