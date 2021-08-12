import { useApolloClient, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { REGISTER } from '../../../GraphQL/authentication/mutation';
import { Register, RegisterVariables } from '../../../GraphQL/authentication/types/Register';
import { displaySnackbar, InitSnackbarData } from '../../../Utils';

export const useRegister = () => {
  const { t } = useTranslation();

  const snackbar = InitSnackbarData;
  const client = useApolloClient();

  const [doRegister, { loading, data, error }] = useMutation<Register, RegisterVariables>(REGISTER, {
    onError: (error) => {
      const errorMessage = error?.graphQLErrors?.[0]?.extensions?.exception?.data?.message?.[0]?.messages?.[0]?.message;

      if (errorMessage === 'Email is already taken.') {
        snackbar.type = 'ERROR';
        snackbar.message = t(`errorMessage.${errorMessage}`);
        displaySnackbar(client, snackbar);
      }
      if (errorMessage === 'Username already taken') {
        snackbar.type = 'ERROR';
        snackbar.message = t(`errorMessage.${errorMessage}`);
        displaySnackbar(client, snackbar);
      }
      if (errorMessage === undefined) {
        snackbar.type = 'ERROR';
        snackbar.message = t(`errorMessage.${errorMessage}`);
        displaySnackbar(client, snackbar);
      }
      return;
    },
    onCompleted: (data) => {
      snackbar.type = 'SUCCESS';
      snackbar.message = 'Registration successfully completed. please check your email box!';
      displaySnackbar(client, snackbar);
      //doSendEmail({ variables: { confirmation: data?.registerCustom?.user?.email } });
    },
  });

  return { loading, data, error, doRegister };
};
