import { useApolloClient, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { DELETE_PROJECT_FAVORI } from '../../GraphQL/project/mutation';
import { deleteProjectFavorit, deleteProjectFavoritVariables } from '../../GraphQL/project/types/deleteProjectFavorit';
import { displaySnackbar, InitSnackbarData } from '../../Utils';

export const useDeleteProjectFavori = () => {
  const { t } = useTranslation();

  const snackbar = InitSnackbarData;
  const client = useApolloClient();

  const [doDeleteProjectFavorit, { loading, data }] = useMutation<deleteProjectFavorit, deleteProjectFavoritVariables>(
    DELETE_PROJECT_FAVORI,
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
      onCompleted: (data) => {
        if (data.deleteProjectFavorit?.projectFavorit?.id) {
          snackbar.type = 'SUCCESS';
          snackbar.message = t(`deleteFovorit.success`);
          displaySnackbar(client, snackbar);
        }
      },
    },
  );
  return { doDeleteProjectFavorit, data, loading };
};
