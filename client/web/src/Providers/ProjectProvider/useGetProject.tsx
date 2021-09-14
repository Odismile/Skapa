import { QueryHookOptions, useApolloClient, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { PROJECTS, PROJECTS_ALL_MEDIA } from '../../GraphQL/project/query';
import { projects, projectsVariables } from '../../GraphQL/project/types/projects';
import { displaySnackbar, InitSnackbarData } from '../../Utils';

export const useGetProject = (baseOptions?: QueryHookOptions<projects, projectsVariables>) => {
  const { t } = useTranslation();

  const snackbar = InitSnackbarData;
  const client = useApolloClient();
  useQuery(PROJECTS_ALL_MEDIA, {
    fetchPolicy: 'cache-first',
  });
  const resp = useQuery<projects, projectsVariables>(PROJECTS, {
    ...baseOptions,
    onError: (error) => {
      const errorMessage = error?.graphQLErrors?.[0]?.extensions?.exception?.data?.message?.[0]?.messages?.[0]?.message;

      if (errorMessage === undefined) {
        snackbar.type = 'ERROR';
        snackbar.message = t(`errorMessage.${errorMessage}`);
        displaySnackbar(client, snackbar);
      }
      return;
    },
    fetchPolicy: baseOptions?.fetchPolicy ? baseOptions.fetchPolicy : 'network-only',
  });
  return resp;
};
