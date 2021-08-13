import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    searchProject: {
      maxWidth: 320,
      "& .form-control": {
        width: "100%",
        "& .form-control-item": {
          marginBottom: 14,
          "& h2": {
            fontSize: 14,
            fontWeight: "700",
            color: "#000000",
            marginTop: 0,
            paddingLeft: 18,
          }
        },
        "& .form-control-content": {
          borderRadius: 12,
          boxShadow: "inset 0px 1px 3px rgba(0,0,0,0.2)",
          padding: "10px 18px",
        },
        "& .form-control-label": {
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: 0,
          marginBottom: 8,
          "&:last-child": {
            marginBottom: 0,
          },
          "& span:nth-child(2)": {
            margin: 0,
            fontSize: 12,
            color: "#000000",
          },
          "& .form-checkbox": {
            color: "#8870FF",
            padding: 0,
            borderRadius: 4,
            width: 20,
            height: 20,
            borderWidth: 1,
          }
        }
      }
    }
  }),
  { name: "SearchProject" }
);
