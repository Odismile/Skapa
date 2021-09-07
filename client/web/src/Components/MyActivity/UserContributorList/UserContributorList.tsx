import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './style';

const UserContributorList = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className="card">
          <Typography className='head'>You contributed to</Typography>
          <Typography className='number'>6</Typography>
          <Typography className='foot'>project</Typography>
      </Box>
      <Box className="card">
          <Typography className='head'>You invested an amount of</Typography>
          <Typography className='number'>34KTT</Typography>
          <Typography className='foot'>in projects</Typography>
      </Box>
      <Box className="card">
          <Typography className='head'>Repartition</Typography>
          <Typography className='number center'>34%</Typography>
      </Box>
    </Box>
  );
};

export default UserContributorList;
