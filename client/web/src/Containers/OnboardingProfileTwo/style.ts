import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(  theme => ({
  root:{
    '& .title':{
      color: "#000000",
      fontStyle: 'italic',
      fontWeight: 600,
      fontSize:14,
    }
  },
  bio:{
    width: '100%',
    '& textarea':{
      height: 148,
      fontStyle: 'italic',
      borderRadius: 8,
      fontFamily: 'Nunito',
      border: '1px solid #DFDFDF',
      padding: 10,
      color: '#979797',
      '&:focus':{
        outline: 'none',
        fontStyle: 'normal',
        color: 'black',
      }
    }
  },
  footerPage: {
    "& .link-footer": {
      color: '#8870ff',
      fontSize: '1rem',
      fontWeight: 600,
      margin: 0,
      textAlign: "right",
      "@media(min-width: 640px)": {
        textAlign: 'center',
      },
      '& a': {
        color: 'inherit',
        textDecoration: 'none',
        borderBottom: '1px solid',
      },
    }
  },
  btnNext: {
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
  input: {
    display: 'none',
  },
  form: {
    '& label>span:first-child': {
      borderRadius: '100%',
      height: 80,
      width: 80,
      minWidth: 80,
      border: '2px solid #8870ff',
      backgroundColor: 'white',
      color: '#8870ff',
    },
  },
  inputVideo:{
    width: '100%',
    '& .video':{
      width: '100%',
      backgroundColor: '#EEEEEE',
      height: 35,
      borderRadius: 7,
      display: 'flex',
      alignItems: 'center',
      padding: '0px 10px',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
      color: '#979797',
      fontStyle: 'italic',
      cursor: 'pointer',
      fontSize: 12,
    }
  },
}));
