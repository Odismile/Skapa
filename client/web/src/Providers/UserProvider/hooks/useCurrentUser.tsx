import { useQuery } from '@apollo/client';
import { ME_INFO } from '../../../GraphQL/user/query';
import { MeInfo, MeInfoVariables } from '../../../GraphQL/user/types/MeInfo';

export const useCurrentUser = () => {
  const result = useQuery<MeInfo, MeInfoVariables>(ME_INFO, {
    variables: {
      id: `${localStorage.getItem('idMe')}`
    }
  });
  return result;
};
