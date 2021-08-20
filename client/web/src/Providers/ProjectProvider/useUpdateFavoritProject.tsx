import { useApolloClient, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { UPDATE_PROJECT_FAVORI } from '../../GraphQL/project/mutation';
import { updateProjectFavorit, updateProjectFavoritVariables } from '../../GraphQL/project/types/updateProjectFavorit';
import { displaySnackbar, InitSnackbarData } from '../../Utils';

export const useUpdateFavoritProject = () => {
  const { t } = useTranslation();

  const snackbar = InitSnackbarData;
  const client = useApolloClient();

  const [doUpdateFavoritProject, { loading, data }] = useMutation<updateProjectFavorit, updateProjectFavoritVariables>(
    UPDATE_PROJECT_FAVORI,
    {
      onError: (error) => {
        const errorMessage =
          error?.graphQLErrors?.[0]?.extensions?.exception?.data?.message?.[0]?.messages?.[0]?.message;

        if (errorMessage === undefined) {
          snackbar.type = 'ERROR';
          snackbar.message = t(`errorMessage.${errorMessage}`);
          displaySnackbar(client, snackbar);
        }
        return;
      },
    },
  );
  return { doUpdateFavoritProject, data, loading };
};
