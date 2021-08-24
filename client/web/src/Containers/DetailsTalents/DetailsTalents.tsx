import { useParams } from 'react-router-dom';
import HeaderDetails from '../../Components/HeaderDetails/HeaderDetails';
import { LocationInterface } from '../../types/types';
import FicheTalents from '../Project/FicheTalents/FicheTalents';

const DetailsTalents = () => {
  const { talentId } = useParams<LocationInterface>();

  return (
    <HeaderDetails>
      <FicheTalents talentId={talentId ?? ''} />
    </HeaderDetails>
  );
};

export default DetailsTalents;
