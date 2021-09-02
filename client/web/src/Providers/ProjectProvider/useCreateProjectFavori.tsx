import { useApolloClient, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { CREATE_PROJECT_FAVORI } from '../../GraphQL/project/mutation';
import { createProjectFavorit, createProjectFavoritVariables } from '../../GraphQL/project/types/createProjectFavorit';
import { ME_INFO } from '../../GraphQL/user/query';
import { displaySnackbar, InitSnackbarData } from '../../Utils';
import { getUserId } from '../../Utils/utils';

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
      onCompleted: (data) => {
        if (data.createProjectFavorit?.projectFavorit?.id) {
          snackbar.type = 'SUCCESS';
          snackbar.message = t(`createFavorit.success`);
          displaySnackbar(client, snackbar);
        }
      },
      refetchQueries: [{
        query: ME_INFO,
        variables: {
          userId: +getUserId
        }
      }]
    },
  );
  return { doCreateProjectFavorit, data, loading };
};
