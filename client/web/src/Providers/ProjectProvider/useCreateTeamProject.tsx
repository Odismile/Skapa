import { useApolloClient, useMutation } from "@apollo/client";
import { useTranslation } from "react-i18next";
import { ADD_TALENT_TO_PROJECT } from "../../GraphQL/project/mutation";
import { PROJECTS } from "../../GraphQL/project/query";
import { CreateTeam, CreateTeamVariables } from "../../GraphQL/project/types/CreateTeam";
import { displaySnackbar, InitSnackbarData } from "../../Utils";


export const useCreateTeamProject = () => {
  const { t } = useTranslation();

  const snackbar = InitSnackbarData;
  const client = useApolloClient();

  const resp = useMutation<CreateTeam, CreateTeamVariables>(
    ADD_TALENT_TO_PROJECT,
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
        if (data.createTeam?.team?.id) {
          snackbar.type = 'SUCCESS';
          snackbar.message = t(`createFavorit.success`);
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
