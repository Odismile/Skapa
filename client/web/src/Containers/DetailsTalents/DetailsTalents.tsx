import { Box, Link } from '@material-ui/core';
import React from 'react';
import FicheTalents from '../../Components/FicheTalents/FicheTalents';
import PrimaryHeader from '../../Components/Header';
import useStyles from './styles';
const DetailsTalents = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <PrimaryHeader />
      <Box className={classes.mainContainer}>
        <Link href='/project' className='linkBack'>Back to result</Link>
        <FicheTalents />
      </Box>
    </Box>
  );
};

export default DetailsTalents;
