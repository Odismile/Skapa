import React from 'react';
import HeaderDetails from '../../Components/HeaderDetails/HeaderDetails';
import FicheTalents from '../Project/FicheTalents/FicheTalents';
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
