import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(  theme => ({
  onBoard:{
    // minHeight: 371,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    "& .welcome": {
      fontSize: 32,
      textAlign: "center",
      fontStyle: "italic",
      fontWeight: "600",
      margin: "0 0 30 0",
    },
    "& .profile-organisation": {
      position: "relative",
      width: 120,
      margin: "30px auto 0 auto",
      "& .figure-profile": {
        width: 120,
        height: 120,
        margin: "0 auto",
        borderRadius: "50%",
      },
      "& .figure-organisation": {
        position: "absolute",
        top: -20,
        left: -20,
        width: 60,
        height: 60,
        margin: "0 auto",
        borderRadius: "50%",
        padding: "5px",
        backgroundColor: "#ffffff",
      }
    }
  },
  btnNext: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 16,
    '& button': {
      backgroundColor: '#8870ff',
      borderRadius: 20,
      color: 'white',
      padding: '6px 24px',
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: '#8870ff',
        color: 'white',
      },
    },
  },
}));
