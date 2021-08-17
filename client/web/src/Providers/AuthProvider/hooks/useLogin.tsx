import { ApolloError, useMutation } from '@apollo/client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { LOGIN } from '../../../GraphQL/authentication/mutation';
import { Login, LoginVariables } from '../../../GraphQL/authentication/types/Login';
import { idMe } from '../../../ReactiveVariable/User/user';
import { ONBOARDING_PROFILE7 } from '../../../Routes';
import { setAccessToken } from '../../../Services';

const useAuth = () => {
  const { t } = useTranslation();
  const [loginError, setLoginError] = useState<string>('');
  const history = useHistory();
  const [doLogin, { loading: loadingLogin }] = useMutation<Login, LoginVariables>(LOGIN, {
    onError: (error: ApolloError) => {
      if (
        error &&
        error.graphQLErrors &&
        error.graphQLErrors[0] &&
        error.graphQLErrors[0].extensions &&
        error.graphQLErrors[0].extensions.exception
      ) {
        const errorCode = error.graphQLErrors[0].extensions.exception.data.message[0].messages[0].message || '';
        setLoginError(t(`${errorCode}`));
      }
      if (error.networkError?.message === 'Failed to fetch') {
        setLoginError(t('statusMessages.SERVER_ERROR'));
      }
      if (error.message.split(':')[1] === 'Failed to fetch') {
        setLoginError(t('statusMessages.SERVER_ERROR'));
      }
      return;
    },
    onCompleted: (data) => {
      if (data?.loginCustom?.jwt) {
        setAccessToken(data?.loginCustom?.jwt);
        idMe(data.loginCustom.user.id);
        localStorage.setItem('idMe', data.loginCustom.user.id);
        history.replace(ONBOARDING_PROFILE7);
        window.location.reload();
      }
    },
  });

  return { doLogin, loadingLogin, loginError, setLoginError };
};

export default useAuth;
