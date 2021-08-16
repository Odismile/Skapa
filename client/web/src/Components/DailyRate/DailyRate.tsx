import React from 'react';
import { Box, Slider, Typography } from '@material-ui/core';
import useStyles from './styles';

const DailyRate = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className="money">100£ - 880£</Typography>
      <Typography className="text">The average rate is 675£</Typography>
      <Slider
        orientation="horizontal"
        defaultValue={[20, 37]}
        aria-labelledby="vertical-slider"
        valueLabelDisplay="on"
        classes={{ valueLabel:classes.label }}
      />
    </Box>
  );
};

export default DailyRate;
