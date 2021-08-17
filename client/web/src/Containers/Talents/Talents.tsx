import React from 'react';
import { Box } from '@material-ui/core';
import CardTalents from '../../Components/CardTalents/CardTalents';
import RadioExtInt from '../../Components/RadioExtInt/RadioExtInt';
import SearchFilterTalents from '../../Components/SearchFilterTalents/SearchFilterTalents';
import useStyles from './styles';
import { useLocation } from 'react-router';

const Talents = () => {
  const classes = useStyles();
  const params = useLocation();
  return (
    <>
      {params.pathname == '/wishlist' ? (
        <>
          <SearchFilterTalents />
          <Box className={classes.content}>
            <RadioExtInt />
          </Box>
        </>
      ) : (
        <>
          <Box className={classes.content}>
            <RadioExtInt />
          </Box>
          <SearchFilterTalents />
        </>
      )}

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
