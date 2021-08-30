import { useApolloClient, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { PROJECT_AMOUNT_MAX } from '../../GraphQL/project/query';
import { ProjectAmountMax, ProjectAmountMaxVariables } from '../../GraphQL/project/types/ProjectAmountMax';
import { displaySnackbar, InitSnackbarData } from '../../Utils';

export const useProjectContributionMax = () => {
  const { t } = useTranslation();

  const snackbar = InitSnackbarData;
  const client = useApolloClient();
  const result = useQuery<ProjectAmountMax, ProjectAmountMaxVariables>(PROJECT_AMOUNT_MAX, {
    onError: (error) => {
      const errorMessage = error?.graphQLErrors?.[0]?.extensions?.exception?.data?.message?.[0]?.messages?.[0]?.message;

      if (errorMessage === undefined) {
        snackbar.type = 'ERROR';
        snackbar.message = t(`errorMessage.${errorMessage}`);
        displaySnackbar(client, snackbar);
      }
      return;
    },
    variables: {
      where: {
        type: 'CONTRIBUTION_MAX',
      },
    },
  });
  return {
    ...result,
    amountMax: result?.data?.amounts?.length ? result?.data?.amounts[0]?.value || 0 : 0,
  };
};
