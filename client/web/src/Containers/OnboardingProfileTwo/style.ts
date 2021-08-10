import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 30,
    boxSizing: 'border-box',
    alignItems: 'center',
    maxWidth: 640,
    minWidth: 320,
    minHeight: '100vh',
    margin: 'auto',
    '& .body': {
      width: '100%',
      fontSize: 14,
      display: 'flex',
      flexDirection: 'column',
      '& .title': {
        fontSize: 14,
        color: 'black',
        fontStyle: 'italic',
        marginBottom: 8,
      },
      '& fieldset':{
        marginBottom: 16,
      },
      '& textarea':{
        height: 148,
        fontStyle: 'italic',
        borderRadius: 8,
        fontFamily: 'Poppins',
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
    '& .foot': {
      justifyContent: 'flex-end',
      display: 'flex',
      width: '100%',
      '& a': {
        color: '#8870FF',
        textDecoration: 'none',
        paddingBottom: 3,
        borderBottom: '1px solid #8870ff',
      },
    },
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
  input: {
    display: 'none',
  },
  form: {
    '& label>span:first-child': {
      borderRadius: '100%',
      height: 70,
      width: 70,
      border: '2px solid #8870ff',
      backgroundColor: 'white',
      color: '#8870ff',
    },
  },
  inputVideo:{
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
    }
  },
}));

export default useStyles;
