import { useApolloClient, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { CREATE_PROJECT } from '../../GraphQL/project/mutation';
import { createProject, createProjectVariables } from '../../GraphQL/project/types/createProject';
import { displaySnackbar, InitSnackbarData } from '../../Utils';

export const useCreateProject = () => {
  const { t } = useTranslation();

  const snackbar = InitSnackbarData;
  const client = useApolloClient();

  const [doCreateProject, { loading, data }] = useMutation<createProject, createProjectVariables>(CREATE_PROJECT, {
    onError: (error) => {
      const errorMessage = error?.graphQLErrors?.[0]?.extensions?.exception?.data?.message?.[0]?.messages?.[0]?.message;

      if (errorMessage === undefined) {
        snackbar.type = 'ERROR';
        snackbar.message = t(`errorMessage.${errorMessage}`);
        displaySnackbar(client, snackbar);
      }
      return;
    },
  });
  return { doCreateProject, data, loading };
};


