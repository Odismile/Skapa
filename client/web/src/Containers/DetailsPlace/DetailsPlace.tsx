import { Box, Link } from '@material-ui/core';
import React from 'react';
import FicheTalents from '../../Components/FicheTalents/FicheTalents';
import HeaderDetails from '../../Components/HeaderDetails/HeaderDetails';
import FichePlaces from '../Project/FichePlaces/FichePlaces';
import useStyles from './styles';
const DetailsPlace = () => {
  const classes = useStyles();

  return (
    <HeaderDetails>
      <FichePlaces />
    </HeaderDetails>
  );
};

export default DetailsPlace;
