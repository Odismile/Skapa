import { useQuery } from '@apollo/client';
import { ME_INFO } from '../../../GraphQL/user/query';
import { MeInfo, MeInfoVariables } from '../../../GraphQL/user/types/MeInfo';

export const useCurrentUser = () => {
  const result = useQuery<MeInfo, MeInfoVariables>(ME_INFO, {
    variables: {
      where: {
        id: `${localStorage.getItem('idMe')}`,
      },
    },
  });
  return {
    user: result.data?.profiles?.length ? result.data?.profiles[0]?.users_id : null,
    photo: result.data?.profiles?.length ? result.data?.profiles[0]?.picture : null,
    isReader: result.data?.profiles?.length ? result.data?.profiles[0]?.users_id?.isFirstConnection === true : true,
  };
};
