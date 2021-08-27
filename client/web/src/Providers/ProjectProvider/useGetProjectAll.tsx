import { useApolloClient, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { PROJECTS_ALL, PROJECTS_ALL_MEDIA } from '../../GraphQL/project/query';
import { projects_all } from '../../GraphQL/project/types/projects_all';
import { displaySnackbar, InitSnackbarData } from '../../Utils';

export const useGetProjectAll = () => {
  const { t } = useTranslation();

  const snackbar = InitSnackbarData;
  const client = useApolloClient();
  useQuery(PROJECTS_ALL_MEDIA, {
    fetchPolicy: 'cache-first'
  });
  const { data, loading } = useQuery<projects_all>(PROJECTS_ALL, {
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
  });
  return { data, loading };
};
