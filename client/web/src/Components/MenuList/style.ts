import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  menuRoot: {
    "& .list": {
      maxHeight: "calc(100% - 175px)",
      overflow: "hidden auto",
      margin: "15px auto",
      padding: "0 0 0 70px",
      maxWidth: 220,
      "@media(min-height: 640px)": {
        marginBottom: 30,
      },
      "& > li": {
      },
      "& a": {
        color: "#fff",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: 400,
        padding: "4px 0",
        textDecoration: "none",
        width: "100%",
        "@media(min-height: 640px)": {
          padding: "7px 0",
        },
        "&:hover": {
          textDecoration: "none",
        }
      },
    },
  },
}),
{ name: "ProjectContent" }
);
