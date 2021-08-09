import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { useApolloClient, useQuery } from '@apollo/client';

import useStyles from './styles';
import { SnackbarType } from '../../Interfaces/Snackbar';
import { GET_SNACKBAR_STATE } from '../../GraphQL/common/snackbar/query';

interface GlobalSnackbarProps {}

const GlobalSnackbar = (props: GlobalSnackbarProps) => {
  const client = useApolloClient();
  const classes = useStyles();

  const { data } = useQuery(GET_SNACKBAR_STATE, {
    fetchPolicy: 'cache-only',
  });

  const handleClose = (): void => {
    client.writeQuery({
      query: GET_SNACKBAR_STATE,
      data: {
        snackBar: {
          isOpen: false,
          __typename: 'SnackBar',
        },
      },
    });
  };

  if (data) {
    const { isOpen, message, type }: SnackbarType = data.snackBar
      ? data.snackBar
      : { isOpen: true, message: '', type: 'ERROR' };

    return (
      <Snackbar
        className={classes.root}
        open={isOpen}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} elevation={6} variant="filled" severity={String(type).toLowerCase() as any}>
          {message}
        </Alert>
      </Snackbar>
    );
  }

  return null;
};

export default GlobalSnackbar;
