import { useApolloClient, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { UPDATE_PROJECT } from '../../GraphQL/project/mutation';
import { updateProject, updateProjectVariables } from '../../GraphQL/project/types/updateProject';
import { displaySnackbar, InitSnackbarData } from '../../Utils';

export const useUpdateProject = () => {
  const { t } = useTranslation();

  const snackbar = InitSnackbarData;
  const client = useApolloClient();

  const [doUpdateProject, { loading }] = useMutation<updateProject, updateProjectVariables>(UPDATE_PROJECT, {
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
  return { doUpdateProject, loading };
};
