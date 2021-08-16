import { useApolloClient, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { PROJECT } from '../../GraphQL/project/query';
import { project, projectVariables } from '../../GraphQL/project/types/project';
import { displaySnackbar, InitSnackbarData } from '../../Utils';

export const useGetProject = (idProject: string) => {
  const { t } = useTranslation();

  const snackbar = InitSnackbarData;
  const client = useApolloClient();

  const { data, loading } = useQuery<project, projectVariables>(PROJECT, {
    onError: (error) => {
      const errorMessage = error?.graphQLErrors?.[0]?.extensions?.exception?.data?.message?.[0]?.messages?.[0]?.message;

      if (errorMessage === undefined) {
        snackbar.type = 'ERROR';
        snackbar.message = t(`errorMessage.${errorMessage}`);
        displaySnackbar(client, snackbar);
      }
      return;
    },
    variables: { id: idProject },
  });
  return { data, loading };
};
