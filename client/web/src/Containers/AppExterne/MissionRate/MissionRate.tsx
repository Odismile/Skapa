import React from 'react';
import { Card, CardContent, CardMedia, Box, Typography, Slider } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import classNames from 'classnames';

import useStyles from './style';

const MissionRate = () => {
  const [value, setValue] = React.useState<number | null>(2);

  const classes = useStyles();
  
  return (
    <Box className={classes.rateList} component="fieldset" borderColor="transparent">
      <Typography component="label">Mission rate : </Typography>
      <Rating name="customized-10" value={value} size="medium" readOnly  />
    </Box>
  );
};

export default (MissionRate);
