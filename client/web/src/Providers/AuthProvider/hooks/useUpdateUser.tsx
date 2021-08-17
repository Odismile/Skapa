import { useApolloClient, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { UPDATE_USER } from '../../../GraphQL/user/mutation';
import { UpdateUser, UpdateUserVariables } from '../../../GraphQL/user/types/UpdateUser';
import { displaySnackbar, InitSnackbarData } from '../../../Utils';
export const useUpdateUser = () => {
  const { t } = useTranslation();

  const snackbar = InitSnackbarData;
  const client = useApolloClient();

  const [doUpdateUSer, { loading, data }] = useMutation<UpdateUser, UpdateUserVariables>(UPDATE_USER, {
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
  return { doUpdateUSer, data, loading };
};
