import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderDetails from '../../Components/HeaderDetails/HeaderDetails';
import FicheTalents from '../Project/FicheTalents/FicheTalents';
import useStyles from './styles';
const DetailsTalents = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const talentId = pathname.split('/')[2];

  return (
    <HeaderDetails>
      <FicheTalents talentId={talentId} />
    </HeaderDetails>
  );
};

export default DetailsTalents;
