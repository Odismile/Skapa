import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    teamBloc: {
      "& .team-item": {
        marginBottom: 20,
        "& .team-item-top": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        },
        "& .price": {
          padding: "10px 15px",
          borderRadius: 25,
          background: "#dffff2",
          fontWeight: "600",
          color: "#5bd3a0",
        },
        "& h2": {
          fontSize: 14,
          fontWeight: "700",
          color: "#000",
          marginBottom: 13,
        },
        "& .cardtalent-item": {
          marginBottom: 10,
        },
        "& .link": {
          display: "flex",
          justifyContent: "flex-end",
          "& a": {
            borderBottom: "1px solid #8870FF",
          }
        }
      }
    },
  }),
  { name: "Team" }
);
