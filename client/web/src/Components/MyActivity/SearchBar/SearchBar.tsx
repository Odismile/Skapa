import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './style';
import SearchFilter from '../../SearchFilter/SearchFilter';

const SearchBar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <SearchFilter placeholder='Look for projects'/>
    </Box>
  );
};

export default SearchBar;
