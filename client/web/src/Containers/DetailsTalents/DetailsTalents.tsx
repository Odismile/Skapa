import { Box, Link } from '@material-ui/core';
import React from 'react';
import FicheTalents from '../../Components/FicheTalents/FicheTalents';
import HeaderDetails from '../../Components/HeaderDetails/HeaderDetails';
import useStyles from './styles';
const DetailsTalents = () => {
  const classes = useStyles();

  return (
    <HeaderDetails>
      <FicheTalents />
    </HeaderDetails>
  );
};

export default DetailsTalents;
