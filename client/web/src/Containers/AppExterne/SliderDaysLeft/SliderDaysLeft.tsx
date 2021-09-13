import React from 'react';
import { Box, Slider, Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

import useStyles from './style';

const PrettoSlider = withStyles({
  root: {
    color: '#8870ff',
    display: 'block',
    height: 5,
    padding: 0,
    pointerEvents: "none",
  },
  thumb: {
    display: 'none',
    height: 12,
    width: 12,
    backgroundColor: '#ece8ff',
    marginTop: -6,
    marginLeft: -12,
    opacity: 0,
    '&:focus, &:hover, &.active': {
      opacity: 0,
    },
  },
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    borderRadius: 5,
    height: 5,
  },
  rail: {
    background:'#ece8ff',
    borderRadius: 5,
    height: 5,
  },
})(Slider);

const SliderDaysLeft = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.slider_daysLeft_bloc} >
      <PrettoSlider valueLabelDisplay="off" aria-label="pretto slider" defaultValue={80} />
      <Typography className="text_dayLeft">19 days left</Typography>
    </Box>
  );
};

export default SliderDaysLeft;
