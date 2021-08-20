import { useApolloClient, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { CREATE_BOOK } from '../../GraphQL/profiles/mutation';
import { CreateBook, CreateBookVariables } from '../../GraphQL/profiles/types/CreateBook';
import { displaySnackbar, InitSnackbarData } from '../../Utils';

export const useCreateBook = () => {
  const { t } = useTranslation();

  const snackbar = InitSnackbarData;
  const client = useApolloClient();
  const result = useMutation<CreateBook, CreateBookVariables>(CREATE_BOOK, {
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
  return result;
};
