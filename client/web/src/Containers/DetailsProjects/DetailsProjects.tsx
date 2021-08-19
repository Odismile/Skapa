import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderDetails from '../../Components/HeaderDetails/HeaderDetails';
import FicheProjects from '../Project/FicheProjects/FicheProjects';
const DetailsPlace = () => {
  const { pathname } = useLocation();
  const projectId = pathname.split('/')[2];
  return (
    <HeaderDetails>
      <FicheProjects projectId={projectId} />
    </HeaderDetails>
  );
};

export default DetailsPlace;
