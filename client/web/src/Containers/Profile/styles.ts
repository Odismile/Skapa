import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {},
    mainContainer: {
      padding: '15px 22px 30px 22px',
      "& .user": {
        position: "relative",
        width: 137,
        margin: "0 auto 0 auto",
        "& .user-profile": {
          width: 90,
          height: 90,
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
          top: -10,
          left: 10,
          width: 46,
          height: 46,
          margin: "0 auto",
          borderRadius: "50%",
          overflow: "hidden",
          display: "flex",
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
      },
      "& .perso-information": {
        paddingTop: 20,
        "& h2": {
          fontSize: 14,
          fontWeight: 700,
          marginTop: 0,
          marginBottom: 10,
          color: "#000"
        },
        "& .job-radio": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        },
        "& legend, & label": {
          fontSize: 10,
          fontWeight: 600,
          color: "#000",
          fontStyle: "italic",
        }
      }
    },
    form: {
      display: "flex",
      flexDirection: "column"
    },
    input: {},
    radio: {
      color: "#8870ff",
      padding: 0,  
      '&$checked': {
        color: '#8870ff',
        "& ~ span": {
          color: "#8870ff",
        }
      },
      
    },
    checked: {
      color: '#8870ff',
    },
    formControlLabelRoot: {
      color: '#000',
      margin: 0,
      paddingRight: 30
    },
    formControlLabel: {
      color: '#000',
      margin: 0,
      paddingLeft: 6,
      fontStyle: "normal"
    }
  }),
);
