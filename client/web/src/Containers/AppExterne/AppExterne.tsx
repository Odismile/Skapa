import { useState, useMemo } from 'react';
import { Box } from '@material-ui/core';
import PrimaryHeader from '../../Components/Header/Header';

import useStyles from './styles';
import SearchFilterTalents from '../../Components/SearchFilterTalents/SearchFilterTalents';

// images
import coachPhoto from '../../Assets/images/coach_avatar.png';

const AppExterne = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainPage}>
      <PrimaryHeader />
      <Box className="wrapPage">
        <SearchFilterTalents />
        
      </Box>
      
    </Box>
  );
};

export default AppExterne;
