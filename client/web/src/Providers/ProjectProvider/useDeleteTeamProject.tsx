import { useApolloClient, useMutation } from "@apollo/client";
import { useTranslation } from "react-i18next";
import { REMOVE_TALENT_TO_PROJECT } from "../../GraphQL/project/mutation";
import { PROJECTS } from "../../GraphQL/project/query";
import { DeleteTeam, DeleteTeamVariables } from "../../GraphQL/project/types/DeleteTeam";
import { displaySnackbar, InitSnackbarData } from "../../Utils";


export const useDeleteTeamProject = () => {
  const { t } = useTranslation();

  const snackbar = InitSnackbarData;
  const client = useApolloClient();

  const resp = useMutation<DeleteTeam, DeleteTeamVariables>(
    REMOVE_TALENT_TO_PROJECT,
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
        if (data.deleteTeam?.team?.id) {
          snackbar.type = 'SUCCESS';
          snackbar.message = t(`userRemove.success`);
          displaySnackbar(client, snackbar);
        }
      },
      refetchQueries: [
        {
          query: PROJECTS,
        },
      ],
    },
  );
  return resp;
};
