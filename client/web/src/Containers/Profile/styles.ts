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
        "& > div": {
          marginBottom: 5,
        },
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
        "& label": {
          fontSize: 10,
          fontWeight: 600,
          color: "#000",
          fontStyle: "italic",
        }
      },
      "& .content_bloc": {
        marginBottom: 15,
        "& legend": {
          fontSize: 10,
          fontWeight: 600,
          color: "#000",
          fontStyle: "italic",
        }
      },
      "& .skills_bloc": {
        "& .selected_skills, & .all_skills": {
          display: "flex",
          flexWrap: "wrap",
          margin: -2.5,
          paddingBottom: 10,
        },

        "& .all_skills": {
          borderRadius: 12,
          border: "1px solid #dfdfdf",
          boxShadow: "inset 0px 1px 3px rgba(0,0,0,0.5)",
          height: 162,
          overflow: "hidden auto",
          padding: 10,
        },
        '& .inputGroup': {
          backgroundColor: 'white',
          borderRadius: 20,
          border: "none",
          display: 'block',
          margin: 2.5,
          minWidth: 65,
          overflow: 'hidden',
          '& label':{
            color: '#000',
            border: '1px solid #979797',
            borderRadius: 20,
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: 12,
            lineHeight: "100%",
            padding: '5px 12px',
            height: 30,
            textAlign: "center",
            transition: "all .25s ease-in-out",
            width: "100%",
          },
          '& input':{
            display: 'none',
          },
          '& input:checked ~ label': {
            backgroundColor: "#eeecff",
            borderColor: '#b9b3ff',
            color: '#8870FF',
          }
        }
      },
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
