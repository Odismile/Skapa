import { useApolloClient, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { ITEMS_GET_LANGUAGE } from '../../../GraphQL/items/query';
import { Items_get_language, Items_get_languageVariables } from '../../../GraphQL/items/types/Items_get_language';
import { displaySnackbar, InitSnackbarData } from '../../../Utils';

export const useItemsGetlaguage = () => {
  const { t } = useTranslation();

  const snackbar = InitSnackbarData;
  const client = useApolloClient();

  const { data, loading } = useQuery<Items_get_language, Items_get_languageVariables>(ITEMS_GET_LANGUAGE, {
    onError: (error) => {
      const errorMessage = error?.graphQLErrors?.[0]?.extensions?.exception?.data?.message?.[0]?.messages?.[0]?.message;

      console.log(`errorMessage item language provider`, errorMessage);

      if (errorMessage === undefined) {
        snackbar.type = 'ERROR';
        snackbar.message = t(`errorMessage.${errorMessage}`);
        displaySnackbar(client, snackbar);
      }
      return;
    },
    variables: { where: { type: 'LANGUAGE' } },
  });
  return { data, loading };
};
