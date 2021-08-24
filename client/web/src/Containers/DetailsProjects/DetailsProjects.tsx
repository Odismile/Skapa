import { useParams } from 'react-router-dom';
import HeaderDetails from '../../Components/HeaderDetails/HeaderDetails';
import { LocationInterface } from '../../types/types';
import FicheProjects from '../Project/FicheProjects/FicheProjects';
const DetailsPlace = () => {
  const { profilId, projectId } = useParams<LocationInterface>();
  return (
    <HeaderDetails>
      <FicheProjects projectId={projectId ?? ''} profilId={profilId ?? ''} />
    </HeaderDetails>
  );
};

export default DetailsPlace;
