import { useApolloClient, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { CRETATE_FAVORIT_TALENT } from '../../GraphQL/Talent/mutation';
import { createTalentFavorit, createTalentFavoritVariables } from '../../GraphQL/Talent/types/createTalentFavorit';
import { displaySnackbar, InitSnackbarData } from '../../Utils';

export const useCreateFavoritTalent = () => {
  const { t } = useTranslation();

  const snackbar = InitSnackbarData;
  const client = useApolloClient();

  const [doCreateFavoriteTalent, { loading, data }] = useMutation<createTalentFavorit, createTalentFavoritVariables>(
    CRETATE_FAVORIT_TALENT,
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
        if (data.createTalentFavorit?.talentFavorit?.id) {
          snackbar.type = 'SUCCESS';
          snackbar.message = t(`createFavorit.success`);
          displaySnackbar(client, snackbar);
        }
      },
    },
  );
  return { doCreateFavoriteTalent, data, loading };
};
