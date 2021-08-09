import { ApolloClient } from '@apollo/client';

import { SnackbarType } from '../Interfaces/Snackbar';
import { GET_SNACKBAR_STATE } from '../GraphQL/common/snackbar/query';

export const InitSnackbarData: SnackbarType = {
  type: 'ERROR',
  message: '',
  isOpen: true,
};

export const displaySnackbar = (client: ApolloClient<any>, data: SnackbarType) => {
  client.writeQuery({
    query: GET_SNACKBAR_STATE,
    data: {
      snackBar: {
        ...data,
        __typename: 'SnackBar',
      },
    },
  });
};
