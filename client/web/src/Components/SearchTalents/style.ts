import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    searchProject: {
      maxWidth: 320,
      margin: "0 auto",
      "& .form-control": {
        width: "100%",
        "& .form-control-item": {
          marginBottom: 14,
          "& h2": {
            fontSize: 14,
            fontWeight: "700",
            color: "#000000",
            marginTop: 0,
            marginBottom: 0,
          }
        },
        "& .form-control-content": {
          borderRadius: 12,
          padding: "10px 0px",
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
    },
    content:{
      width: '100%',
      border: 'solid 1px #dfdfdf',
      boxShadow: 'inset 0px 1px 3px rgb(0 0 0 / 50%)',
      padding: 5,
      borderRadius: 6,
      maxHeight: 305,
      overflow: 'auto',
      height: 305,
    },
    skills:{
      fontSize: 12,
      display: 'flex',
      maxWidth: '100%',
      flexWrap: 'wrap',
      // justifyContent: 'space-between',
      '& .inputGroup': {
        backgroundColor: 'white',
        borderRadius: 20,
        border: '1px solid #8870FF',
        margin: 5,
        display: 'block',
        overflow: 'hidden',
        '& label':{
          color: '#8870FF',
          padding: '8px 10px',
          display: 'inline-block',
        },
        '& input':{
          display: 'none',
        },
        '& input:checked ~ label': {
          backgroundColor: "#ece8ff",
        }
      }
    },
  }),
  { name: "SearchProject" }
);
