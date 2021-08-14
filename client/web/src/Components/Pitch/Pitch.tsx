import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './style';

const Pitch = () => {
  const classes = useStyles();
  return (
    <Box className={classes.content}>
      <Typography variant='h6' className="title">Pitch</Typography>
      <Box className='video'>
      <video controls >
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4"/>
      </video>
      </Box>
    </Box>
  );
};

export default Pitch;
