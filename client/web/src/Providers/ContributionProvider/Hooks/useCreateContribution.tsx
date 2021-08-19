import { useApolloClient, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { CREATE_CONTROBUTE } from '../../../GraphQL/Contribution/mutation';
import { createContribute, createContributeVariables } from '../../../GraphQL/Contribution/types/createContribute';
import { displaySnackbar, InitSnackbarData } from '../../../Utils';

export const useCreateContribution = () => {
  const { t } = useTranslation();

  const snackbar = InitSnackbarData;
  const client = useApolloClient();

  const [doCreateContribution, { loading, data }] = useMutation<createContribute, createContributeVariables>(
    CREATE_CONTROBUTE,
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
    },
  );
  return { doCreateContribution, data, loading };
};
