import { ApolloClient } from '@apollo/client';

export type SnackbarStatus = 'ERROR' | 'WARNING' | 'INFO' | 'SUCCESS';

export interface SnackbarType {
  type?: SnackbarStatus;
  message?: string;
  isOpen: boolean;
}
export interface ShowSnackBarArgs {
  type: SnackbarStatus;
  message: string;
  client: ApolloClient<object>;
}
