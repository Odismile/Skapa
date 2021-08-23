import { useQuery } from '@apollo/client';
import { ME_INFO } from '../../../GraphQL/user/query';
import { MeInfo, MeInfoVariables } from '../../../GraphQL/user/types/MeInfo';

export const useCurrentUser = () => {
  let userId = 0;
  if (localStorage.getItem('idMe')) {
    userId = Number(localStorage.getItem('idMe'));
  }
  const result = useQuery<MeInfo, MeInfoVariables>(ME_INFO, {
    variables: {
      userId: userId,
    },
  });
  return {
    profilId: result.data?.getProfile?.id ?? null,
    user: result.data?.getProfile?.users_id ?? null,
    photo: result.data?.getProfile?.picture ?? null,
    isReader: result.data?.getProfile?.users_id?.isFirstConnection === true ? true : false,
    //isReader: false,
  };
};
