import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root:{
      width: "100%",
      height: "100%",
      "& .overlay": {
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: 1000,
        background: "rgba(0,0,0,0.60)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: 0,
        left: 0,
      }
    },
    loader: {
      color: "#8870FF",
    },
  }),
);
