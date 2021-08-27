import { useQuery } from '@apollo/client';
import { LIST_COACH, LIST_COACH_ALL_PICTURE } from '../../GraphQL/profiles/query';
import { coachs, coachsVariables } from '../../GraphQL/profiles/types/coachs';

export const useGetProfiles = (type: 'Coach' | 'Talent' = 'Talent', variables?: coachsVariables) => {
  useQuery(LIST_COACH_ALL_PICTURE, {
    fetchPolicy: 'cache-first',
  });

  const result = useQuery<coachs, coachsVariables>(LIST_COACH, {
    variables: {
      ...variables,
      where: {
        profile_type_id: {
          label: type,
        },
      },
    },
    fetchPolicy: 'network-only',
  });
  return result;
};
