import { useApolloClient, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { PROJECTS } from '../../GraphQL/project/query';
import { projects, projectsVariables } from '../../GraphQL/project/types/projects';
import { displaySnackbar, InitSnackbarData } from '../../Utils';

export const useGetProject = (idProject: string) => {
  const { t } = useTranslation();

  const snackbar = InitSnackbarData;
  const client = useApolloClient();

  const { data, loading } = useQuery<projects, projectsVariables>(PROJECTS, {
    onError: (error) => {
      const errorMessage = error?.graphQLErrors?.[0]?.extensions?.exception?.data?.message?.[0]?.messages?.[0]?.message;

      if (errorMessage === undefined) {
        snackbar.type = 'ERROR';
        snackbar.message = t(`errorMessage.${errorMessage}`);
        displaySnackbar(client, snackbar);
      }
      return;
    },
    fetchPolicy: 'network-only',
    variables: { where: { id: idProject } },
  });
  return { data, loading };
};
