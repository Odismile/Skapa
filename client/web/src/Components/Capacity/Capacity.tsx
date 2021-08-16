import { Box, Slider, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Capacity = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className="people">25 people - 50 people</Typography>
      <Slider
        orientation="horizontal"
        defaultValue={[25, 50]}
        aria-labelledby="vertical-slider"
        valueLabelDisplay="on"
        classes={{ valueLabel: classes.label }}
      />
    </Box>
  );
};

export default Capacity;
