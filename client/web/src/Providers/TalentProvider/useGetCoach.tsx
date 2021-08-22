import { useQuery } from '@apollo/client';
import { LIST_COACH } from '../../GraphQL/profiles/query';
import { coachs, coachsVariables } from '../../GraphQL/profiles/types/coachs';

export const useGetCoach = (variables?: coachsVariables) => {
  const result = useQuery<coachs, coachsVariables>(LIST_COACH, {
    variables: {
      ...variables,
      where: {
        profile_type_id: {
          label: 'Coach',
        },
      },
    },
  });
  return result;
};
