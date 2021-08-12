import React, { FC } from 'react';
import moment from 'moment';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@material-ui/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import 'moment/locale/fr';

import Theme from '../Theme';
import AuthProvider from './AuthProvider';
import UserProvider from './UserProvider';
import { createClient } from '../Services/ApolloClient';
import { getAccessToken } from '../Services/LocalStorage';
import { ItemsLanguageInfoProvider } from './ItemsProvider/hooks/ItemsProvider';

interface ProviderProps {}

const Provider: FC<ProviderProps> = (props) => {
  const token = getAccessToken();
  const client = createClient(token ?? '');

  return (
    <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment} locale="fr">
      <ApolloProvider client={client}>
        <ThemeProvider theme={Theme}>
          <AuthProvider>
            <UserProvider>
              <ItemsLanguageInfoProvider>{props.children}</ItemsLanguageInfoProvider>
            </UserProvider>
          </AuthProvider>
        </ThemeProvider>
      </ApolloProvider>
    </MuiPickersUtilsProvider>
  );
};

export default Provider;
