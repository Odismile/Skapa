import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    mainPage: { },
    mainContainer: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 30,
    },
    congrats: {
      textAlign: "center",
      "& h1": {
        fontSize: 28,
        fontWeight: "700",
        marginTop: 38,
        color: "#8870ff",
      },
      "& svg": {
        marginBottom: 58,
        marginTop: 52,
      },
      "& p": {
        fontSize: 14,
        color: "#000000",
        marginTop: 0,
        marginBottom: 4,
        "& strong": {
          fontWeight: 700,
        },
        "& a": {
          fontWeight: 700,
        }
      }
    },
  }),
  { name: "Congrats" }
);
