import { useApolloClient, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { CREATE_CONTROBUTE } from '../../../GraphQL/Contribution/mutation';
import { createContribute, createContributeVariables } from '../../../GraphQL/Contribution/types/createContribute';
import { PROJECTS, PROJECTS_ALL_MEDIA } from '../../../GraphQL/project/query';
import { ME_INFO } from '../../../GraphQL/user/query';
import { displaySnackbar, InitSnackbarData } from '../../../Utils';
import { getUserId } from '../../../Utils/utils';

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
      onCompleted: (data) => {
        if (data.createContribute?.contribute?.id) {
          snackbar.type = 'SUCCESS';
          snackbar.message = t(`createFavorit.success`);
          displaySnackbar(client, snackbar);
        }
      },
      refetchQueries: [
        {
          query: PROJECTS_ALL_MEDIA,
        },
        {
          query: PROJECTS,
        },
        {
          query: ME_INFO,
          variables: {
            userId: +getUserId,
          },
        },
      ],
    },
  );
  return { doCreateContribution, data, loading };
};
