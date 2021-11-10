module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("URL", "http://localhost:1337"),
  admin: {
    auth: {
      secret: env(
        "JWT_ACCESS_TOKEN_SECRET",
        "264fae788acd172b209acc91663d866f"
      ),
    },
  },
});
