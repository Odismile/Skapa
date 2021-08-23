import { useQuery } from '@apollo/client';
import { ME_INFO } from '../../../GraphQL/user/query';
import { MeInfo, MeInfoVariables } from '../../../GraphQL/user/types/MeInfo';

export const useCurrentUser = () => {
  const result = useQuery<MeInfo, MeInfoVariables>(ME_INFO, {
    variables: {
      id: `${localStorage.getItem('idMe')}`,
    },
  });
  return {
    profilId: result.data?.profile?.id ?? null,
    user: result.data?.profile?.users_id ?? null,
    photo: result.data?.profile?.picture ?? null,
    isReader: result.data?.profile?.users_id?.isFirstConnection === true ? true : false,
    //isReader: false,
  };
};
