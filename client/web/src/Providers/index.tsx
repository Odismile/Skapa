import React, { FC } from 'react';
import moment from 'moment';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import 'moment/locale/fr';

import Theme from '../Theme';
import UserProvider from './UserProvider';
import { createClient } from '../Services/ApolloClient';
import { getAccessToken } from '../Services/LocalStorage';

interface ProviderProps {}

const Provider: FC<ProviderProps> = (props) => {
  const token = getAccessToken();
  const client = createClient(token ?? '');

  return (
    <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment} locale="fr">
      <ApolloProvider client={client}>
        <ThemeProvider theme={Theme}>
          <UserProvider>{props.children}</UserProvider>
        </ThemeProvider>
      </ApolloProvider>
    </MuiPickersUtilsProvider>
  );
};

export default Provider;
