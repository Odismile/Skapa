import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { REGISTER } from '../../../GraphQL/authentication/mutation';
import { Register, RegisterVariables } from '../../../GraphQL/authentication/types/Register';

export const useRegister = () => {
  const { t } = useTranslation();
  const [registerError, setRegisterError] = useState<string>('');

  const [doRegister, { loading, data, error }] = useMutation<Register, RegisterVariables>(REGISTER, {
    onError: (error) => {
      if (
        error &&
        error.graphQLErrors &&
        error.graphQLErrors[0] &&
        error.graphQLErrors[0].extensions &&
        error.graphQLErrors[0].extensions.exception
      ) {
        const errorCode = error.graphQLErrors[0].extensions.exception.data.message[0].messages[0].message || '';
        setRegisterError(t(`${errorCode}`));
      }
      if (error.networkError?.message === 'Failed to fetch') {
        setRegisterError(t('statusMessages.SERVER_ERROR'));
      }
      if (error.message.split(':')[1] === 'Failed to fetch') {
        setRegisterError(t('statusMessages.SERVER_ERROR'));
      }
      return;
    },
  });

  return { loading, data, error, doRegister, registerError, setRegisterError };
};
