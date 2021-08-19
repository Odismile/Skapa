import { useApolloClient, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { CREATE_PROJECT_FAVORI } from '../../GraphQL/project/mutation';
import { createProjectFavorit, createProjectFavoritVariables } from '../../GraphQL/project/types/createProjectFavorit';
import { displaySnackbar, InitSnackbarData } from '../../Utils';

export const useCreateProjectFavori = () => {
  const { t } = useTranslation();

  const snackbar = InitSnackbarData;
  const client = useApolloClient();

  const [doCreateProjectFavorit, { loading, data }] = useMutation<createProjectFavorit, createProjectFavoritVariables>(
    CREATE_PROJECT_FAVORI,
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
  return { doCreateProjectFavorit, data, loading };
};
