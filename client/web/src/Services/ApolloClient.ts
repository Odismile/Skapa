import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { setContext } from '@apollo/client/link/context';
import { getMainDefinition } from '@apollo/client/utilities';
import { onError } from '@apollo/client/link/error';
import { split } from '@apollo/client/core';

import { forceLogout } from '../Hooks/useForceLogout';
import { API_URL, WS_URL } from '../Constants/Config';

export const createClient = (token: string) => {
  const httpLink = createHttpLink({
    uri: API_URL,
  });

  const wsLink = new WebSocketLink({
    uri: WS_URL || 'ws:localhost:1337/graphql',
    options: {
      reconnect: true,
      connectionParams: { authToken: token },
    },
  });

  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }));

  const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors && graphQLErrors.length > 0) {
      const code = graphQLErrors[0].extensions && graphQLErrors[0].extensions.code;
      switch (code) {
        case 'USER_EXPIRED_TOKEN':
          forceLogout();
          break;
      }
    }
    if (networkError) {
      // console.log(`[Network error]: ${networkError}`);
    }
  });

  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    errorLink.concat(authLink.concat(httpLink)),
  );

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
    name: 'react-web-client',
    queryDeduplication: false,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });
};
