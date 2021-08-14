import React from 'react';
import { Box } from '@material-ui/core';
import CardProject from '../../Components/CardProjects/CardProjects';
import CardTalents from '../../Components/CardTalents/CardTalents';
import RadioExtInt from '../../Components/RadioExtInt/RadioExtInt';
import SearchFilterTalents from '../../Components/SearchFilterTalents/SearchFilterTalents';
import useStyles from './styles';

const Talents = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.content}>
        <RadioExtInt/>
      </Box>
      <SearchFilterTalents />
      <Box className={classes.box}>
        <CardTalents />
      </Box>
      <Box className={classes.box}>
        <CardTalents />
      </Box>
      <Box className={classes.box}>
        <CardTalents />
      </Box>
    </>
  );
};

export default Talents;
