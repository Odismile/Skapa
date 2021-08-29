import { useApolloClient, useMutation } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { CREATE_APPOINTMENT } from '../../GraphQL/appointments/mutation';
import { createAppointment, createAppointmentVariables } from '../../GraphQL/appointments/types/createAppointment';
import { displaySnackbar, InitSnackbarData } from '../../Utils';

export const useCreateAppointment = () => {
  const { t } = useTranslation();
  const snackbar = InitSnackbarData;
  const client = useApolloClient();

  const result = useMutation<createAppointment, createAppointmentVariables>(CREATE_APPOINTMENT, {
    onError: (error) => {
      const errorMessage = error?.graphQLErrors?.[0]?.extensions?.exception?.data?.message?.[0]?.messages?.[0]?.message;

      if (errorMessage === undefined) {
        snackbar.type = 'ERROR';
        snackbar.message = t(`errorMessage.${errorMessage}`);
        displaySnackbar(client, snackbar);
      }
      return;
    },
  });
  return result;
};
