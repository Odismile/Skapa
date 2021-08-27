import { useQuery } from '@apollo/client';
import { useMemo } from 'react';
import { ME_INFO } from '../../../GraphQL/user/query';
import { MeInfo, MeInfoVariables } from '../../../GraphQL/user/types/MeInfo';

export const useCurrentUser = () => {
  const userId = localStorage.getItem('idMe') || null;
  const result = useQuery<MeInfo, MeInfoVariables>(ME_INFO, {
    variables: {
      userId: userId ? +userId : null,
    },
    skip: !Boolean(userId),
    fetchPolicy: 'cache-first',
  });
  const averageContrubution = useMemo(() => {
    if (result?.data?.getProfile?.contributes && result?.data?.getProfile?.contributes?.length) {
      return (
        result.data.getProfile.contributes.reduce((acc, item) => acc + (item?.value || 0), 0) /
        result.data.getProfile.contributes.length
      );
    }
    return 0;
  }, [result?.data?.getProfile?.contributes]);
  return {
    loading: result.loading,
    error: result.error,
    profilId: result.data?.getProfile?.id ?? null,
    user: result.data?.getProfile?.users_id ?? null,
    photo: result.data?.getProfile?.picture ?? null,
    profil: result?.data?.getProfile ?? null,
    averageContrubution,
    isReader: result.data?.getProfile?.users_id?.isFirstConnection === true ? true : false,
    //isReader: false,
  };
};
