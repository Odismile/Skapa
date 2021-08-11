import { useApolloClient, useMutation } from '@apollo/client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EMAIL_CONFIRMATION } from '../../../GraphQL/authentication/mutation';
import { EmailConfirmation, EmailConfirmationVariables } from '../../../GraphQL/authentication/types/EmailConfirmation';
import { displaySnackbar, InitSnackbarData } from '../../../Utils';

export const useSendEmail = () => {
  const { t } = useTranslation();
  const [sendEmailError, setSendEmailError] = useState<string>('');

  const snackbar = InitSnackbarData;
  const client = useApolloClient();

  const [doSendEmail, { loading, data, error }] = useMutation<EmailConfirmation, EmailConfirmationVariables>(
    EMAIL_CONFIRMATION,
    {
      onError: (error) => {
        if (
          error &&
          error.graphQLErrors &&
          error.graphQLErrors[0] &&
          error.graphQLErrors[0].extensions &&
          error.graphQLErrors[0].extensions.exception
        ) {
          const errorCode = error.graphQLErrors[0].extensions.exception.data.message[0].messages[0].message || '';
          setSendEmailError(t(`${errorCode}`));
        }
        if (error.networkError?.message === 'Failed to fetch') {
          setSendEmailError(t('statusMessages.SERVER_ERROR'));
        }
        if (error.message.split(':')[1] === 'Failed to fetch') {
          setSendEmailError(t('statusMessages.SERVER_ERROR'));
        }
        return;
      },
      onCompleted: () => {
        snackbar.type = 'SUCCESS';
        snackbar.message = 'Registration successful!';
        displaySnackbar(client, snackbar);
      },
    },
  );

  return { loading, data, error, doSendEmail, sendEmailError, setSendEmailError };
};
