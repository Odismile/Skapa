import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './style';

const UserCreatorList = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className="card">
          <Typography className='head'>You created</Typography>
          <Typography className='number'>10</Typography>
          <Typography className='foot'>projects</Typography>
      </Box>
      <Box className="card">
          <Typography className='head'>You spend</Typography>
          <Typography className='number'>465<br></br>days</Typography>
          <Typography className='foot'>working on it</Typography>
      </Box>
      <Box className="card">
          <Typography className='head'>Repartition</Typography>
          <Typography className='number center'>34%</Typography>
      </Box>
    </Box>
  );
};

export default UserCreatorList;
