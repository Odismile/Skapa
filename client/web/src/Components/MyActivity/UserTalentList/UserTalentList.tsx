import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './style';

const UserTalentList = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className="card">
          <Typography className='head'>You participated in</Typography>
          <Typography className='number'>6</Typography>
          <Typography className='foot'>projects</Typography>
      </Box>
      <Box className="card">
          <Typography className='head'>You spend</Typography>
          <Typography className='number'>145<br></br>days</Typography>
          <Typography className='foot'>in mission</Typography>
      </Box>
      <Box className="card">
          <Typography className='head'>Repartition</Typography>
          <Typography className='number center'>34%</Typography>
      </Box>
    </Box>
  );
};

export default UserTalentList;