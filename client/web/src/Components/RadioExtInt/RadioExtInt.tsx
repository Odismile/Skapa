import React from 'react';
import { Box, Typography } from '@material-ui/core';

import useStyles from './style';

const RadioExtInt = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className="inputGroup">
        <input id="option1" name="option" type="radio" />
        <label htmlFor="option1">Intern</label>
      </Box>
      <Box className="inputGroup">
        <input id="option2" name="option" type="radio" />
        <label htmlFor="option2">Extern</label>
      </Box>
    </Box>
  );
};

export default RadioExtInt;
