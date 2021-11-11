import { useApolloClient, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { CREATE_MY_PROFIL } from '../../GraphQL/Profile/mutation';
import {
  ProfileCustomizeMeInput,
  ProfileCustomizeMeInputVariables,
} from '../../GraphQL/Profile/types/ProfileCustomizeMeInput';
import { displaySnackbar, InitSnackbarData } from '../../Utils';

export const useCreateProfile = () => {
  const { t } = useTranslation();

  const snackbar = InitSnackbarData;
  const client = useApolloClient();

  const [doCreateProfile, { loading, data }] = useMutation<ProfileCustomizeMeInput, ProfileCustomizeMeInputVariables>(
    CREATE_MY_PROFIL,
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
        snackbar.type = 'SUCCESS';
        snackbar.message = t(`createProfile.success`);
        displaySnackbar(client, snackbar);
      },
    },
  );
  return { doCreateProfile, data, loading };
};
