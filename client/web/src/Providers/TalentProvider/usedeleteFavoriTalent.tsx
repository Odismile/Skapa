import { useApolloClient, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { DELETE_FAVORIT_TALENT } from '../../GraphQL/Talent/mutation';
import { deleteTalentFavorit, deleteTalentFavoritVariables } from '../../GraphQL/Talent/types/deleteTalentFavorit';
import { displaySnackbar, InitSnackbarData } from '../../Utils';

export const useDeleteFavoriTalent = () => {
  const { t } = useTranslation();

  const snackbar = InitSnackbarData;
  const client = useApolloClient();

  const [doDeleteTalentFavorit, { loading, data }] = useMutation<deleteTalentFavorit, deleteTalentFavoritVariables>(
    DELETE_FAVORIT_TALENT,
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
        if (data.deleteTalentFavorit?.talentFavorit?.id) {
          snackbar.type = 'SUCCESS';
          snackbar.message = t(`deleteFovorit.success`);
          displaySnackbar(client, snackbar);
        }
      },
    },
  );
  return { doDeleteTalentFavorit, data, loading };
};
