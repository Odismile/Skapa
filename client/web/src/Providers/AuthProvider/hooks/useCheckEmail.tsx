import { ApolloError, useMutation } from '@apollo/client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CHECK_EMAIL } from '../../../GraphQL/authentication/mutation';
import { checkmail, checkmailVariables } from '../../../GraphQL/authentication/types/checkmail';

const useCheckEmail = () => {
    const { t } = useTranslation();
    const [loginError, setLoginError] = useState<string>('');
    const [doCheckEmail, { loading: loadingCheckEmail }] = useMutation<checkmail, checkmailVariables>(CHECK_EMAIL, {
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
        // console.log(data);
        
        },
    });

    return { doCheckEmail, loadingCheckEmail, loginError, setLoginError };
    };

export default useCheckEmail;
