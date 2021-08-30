import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(  theme => ({
  onBoard:{ 
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    "& .welcome": {
      fontSize: 32,
      textAlign: "center",
      fontStyle: "italic",
      fontWeight: "600",
      margin: "0 0 30px 0",
      color: "#000",
    },
    "& .user": {
      position: "relative",
      width: 137,
      margin: "30px auto 0 auto",
      "& .user-profile": {
        width: 120,
        height: 120,
        margin: "0 auto",
        borderRadius: "50%",
        overflow: "hidden",
        "& img": {
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }
      },
      "& .user-organisation-image": {
        position: "absolute",
        top: -30,
        left: -10,
        width: 70,
        height: 70,
        margin: "0 auto",
        borderRadius: "50%",
        overflow: "hidden",
        //display: "flex",
        display: 'none',
        alignItems: "center",
        justifyContent: "center",
        "& img": {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          padding: "2px",
          background: "#fff",
        }
      },
      "& .user-name": {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 700,
        lineHeight: "25px",
        textAlign: "center",
        color: "#000000"
      },
      "& .user-organisation": {
        fontSize: 18,
        fontWeight: 400,
        lineHeight: "25px",
        textAlign: "center",
        color: "#000000"
      }
    },
    "& .welcome-loader": {
      marginTop: 88,
      "& p": {
        textAlign: "center",
        fontSize: 16,
        fontStyle: "italic",
        fontWeight: "300",
      },
    },
  },

}));
