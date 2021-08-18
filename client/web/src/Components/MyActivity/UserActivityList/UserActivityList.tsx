import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './style';

const UserActivityList = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className="card">
          <Typography className='head'>You contributed to</Typography>
          <Typography className='number'>6</Typography>
          <Typography className='foot'>project</Typography>
      </Box>
      <Box className="card">
          <Typography className='head'>You offered your skills on</Typography>
          <Typography className='number'>8</Typography>
          <Typography className='foot'>project</Typography>
      </Box>
      <Box className="card">
          <Typography className='head'>You created and organized</Typography>
          <Typography className='number'>12</Typography>
          <Typography className='foot'>project</Typography>
      </Box>
    </Box>
  );
};

export default UserActivityList;
