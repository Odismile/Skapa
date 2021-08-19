import React from 'react';
import { Box, CircularProgress} from '@material-ui/core';
import useStyles from './styles';

const Loader = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className="overlay">
        <CircularProgress
        thickness= {5}
        className={classes.loader}/>
      </Box>
    </Box>
  );
};

export default Loader;
