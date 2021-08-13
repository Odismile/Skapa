module.exports = ({ env }) => ({
  // ...
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: env("SENDGRID_MAILER_EMAIL"),
      defaultReplyTo: env("SENDGRID_MAILER_EMAIL"),
      testAddress: env("SENDGRID_MAILER_EMAIL"),
    },
  },
  graphql: {
    endpoint: '/graphql',
    shadowCRUD: true,
    playgroundAlways: true, //Change this to false in prod env
    depthLimit: 7,
    amountLimit: 100,
    apolloServer: {
      tracing: false,
    },
  },
  // ...
});
