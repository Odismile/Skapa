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
        "& .upload-profile": {
          display: "flex",
          justifyContent: "center",
          "& input": {
            display: "none",
          },
          "& label": {
            cursor: "pointer",
            color: "#8870FF",
            fontSize: 12,
            fontWeight: 600,
            textAlign: "center",
            marginTop: 7,
            borderBottom: "1px solid #8870FF"
          }
        }
      },
      "& .box-item": {
        marginBottom: 20,
        "& .box-title": {
          fontSize: 14,
          fontWeight: 700,
          marginTop: 0,
          marginBottom: 10,
          color: "#000"
        },
      },
      "& .perso-information": {
        "& > div": {
          marginBottom: 5,
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
        },
      },
      "& .bio": {
        '& .textarea_input': {
          color: '#000',
          border: 'solid 1px #dfdfdf',
          borderRadius: 12,
          boxShadow: 'inset 0px 1px 3px rgba(0,0,0,0.5)',
          fontFamily: 'Nunito',
          fontSize: 12,
          padding: 16,
          height: 182,
          resize: 'none',
          width: '100%',
          '&::-webkit-input-placeholder': {
            color: '#979797',
            fontStyle: 'italic',
          },
          '&:focus': {
            outline: 'none',
          },
        },
      },
      "& .daily-rate": {
        '& .money':{
          color: '#8870FF',
          fontSize: 12,
          fontWeight: 700,
        },
        '& .text':{
          fontSize: 10,
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
      "& .skills-bloc": {
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
            justifyContent: "center"
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
      "& .language-bloc": {
        "& .label": {
          color: "#000",
          fontSize: 12,
        }
      },
      "& .pitch": {
        "& .upload-video": {
          display: "flex",
          justifyContent: "flex-end",
          "& input": {
            display: "none",
          },
          "& label": {
            cursor: "pointer",
            color: "#8870FF",
            fontSize: 12,
            fontWeight: 600,
            textAlign: "center",
            marginTop: 7,
            borderBottom: "1px solid #8870FF"
          }
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
    },
    labelrate:{
      top: -18,
      '& span':{
        borderRadius: 'none!important',
        color: '#8870FF',
        backgroundColor: 'transparent',
        fontSize: 10,
      }
    },
    videoUpload: {
      overflow: "hidden",
      borderRadius: 12,
    },
    btnvalidate: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 16,
      '& button': {
        backgroundColor: '#8870ff',
        borderRadius: 25,
        color: 'white',
        padding: '6px 24px',
        textTransform: 'capitalize',
        '&:hover': {
          backgroundColor: '#8870ff',
          color: 'white',
        },
      },
    },
  }),
);
