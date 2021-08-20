import React from 'react';
import { useLocation } from 'react-router-dom';
import HeaderDetails from '../../Components/HeaderDetails/HeaderDetails';
import FicheProjects from '../Project/FicheProjects/FicheProjects';
const DetailsPlace = () => {
  const { pathname } = useLocation();
  const projectId = pathname.split('/')[2];
  const profilId = pathname.split('/')[4];
  return (
    <HeaderDetails>
      <FicheProjects projectId={projectId} profilId={profilId} />
    </HeaderDetails>
  );
};

export default DetailsPlace;
