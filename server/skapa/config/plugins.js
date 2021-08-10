module.exports = ({ env }) => ({
  // ...
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: "hmathieutsialonina@gmail.com",
      defaultReplyTo: "hmathieutsialonina@gmail.com",
      testAddress: "hmathieutsialonina@gmail.com",
    },
  },
  // ...
});
