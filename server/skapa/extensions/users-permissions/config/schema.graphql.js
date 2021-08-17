const _ = require("lodash");

/**
 * Throws an ApolloError if context body contains a bad request
 * @param contextBody - body of the context object given to the resolver
 * @throws ApolloError if the body is a bad request
 */
function checkBadRequest(contextBody) {
  if (_.get(contextBody, "statusCode", 200) !== 200) {
    const message = _.get(contextBody, "error", "Bad Request");
    const exception = new Error(message);
    exception.code = _.get(contextBody, "statusCode", 400);
    exception.data = contextBody;
    throw exception;
  }
}

module.exports = {
  type: {
    UsersPermissionsPermission: false, // Make this type NOT queriable.
  },
  definition: /* GraphQL */ `
    type UsersPermissionsCustomizeMe {
      id: ID!
      username: String!
      email: String!
      confirmed: Boolean
      blocked: Boolean
      lastname: String
      surname: String
      isFirstConnection: Boolean
      role: UsersPermissionsMeRole
    }

    type UsersPermissionsLoginCustomizePayload {
      jwt: String
      user: UsersPermissionsCustomizeMe!
    }

    input UsersPermissionsRegisterCustomInput {
      username: String!
      email: String!
      password: String!
      surname: String
      lastname: String
      isFirstConnection: Boolean
    }
  `,
  mutation: `
    loginCustom(input: UsersPermissionsLoginInput!): UsersPermissionsLoginCustomizePayload!
    registerCustom(input: UsersPermissionsRegisterCustomInput!): UsersPermissionsLoginPayload!
  `,
  resolver: {
    Mutation: {
      loginCustom: {
        resolverOf: "plugins::users-permissions.auth.callback",
        resolver: async (obj, options, { context }) => {
          context.params = {
            ...context.params,
            provider: options.input.provider,
          };
          context.request.body = _.toPlainObject(options.input);

          await strapi.plugins["users-permissions"].controllers.auth.callback(
            context
          );
          let output = context.body.toJSON
            ? context.body.toJSON()
            : context.body;

          checkBadRequest(output);
          return {
            user: output.user || output,
            jwt: output.jwt,
          };
        },
      },
      registerCustom: {
        description: "Register a user",
        resolverOf: "plugins::users-permissions.auth.register",
        resolver: async (obj, options, { context }) => {
          context.request.body = _.toPlainObject(options.input);

          await strapi.plugins["users-permissions"].controllers.auth.register(
            context
          );
          let output = context.body.toJSON
            ? context.body.toJSON()
            : context.body;

          checkBadRequest(output);
          return {
            user: output.user || output,
            jwt: output.jwt,
          };
        },
      },
    },
  },
};
