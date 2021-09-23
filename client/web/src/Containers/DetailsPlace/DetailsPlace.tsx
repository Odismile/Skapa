import React from 'react';
//import { Box, Link } from '@material-ui/core';
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
