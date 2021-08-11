import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  textField: {
    '& input': {
      fontSize: '1rem',
    },
  },
  messageBox: {
    backgroundColor: '#ED655F2b',
    padding: 6,
    borderRadius: 4,
    '& p': {
      fontSize: '0.875rem',
      color: '#ED655F',
    },
  },
  btnFullWidth:{
    display: 'flex',
    justifyContent: 'center',
    '& button':{
      width: "100%",
      backgroundColor: '#8870ff',
      borderRadius: 25,
      fontSize: 16,
      color: 'white',
      padding: '6px 24px',
      textTransform: 'capitalize',
      '&:hover':{
        backgroundColor: '#8870ff',
        color: 'white',
      }
    }
  },
  loginForm: {},
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    maxWidth: 380,
    margin: 'auto',
  },
  linkContainer: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 600,
  },
  link: {
    cursor: 'pointer',
    borderBottom: "1px solid #8277FF",
  },
  imgContainer: {
    marginBottom: 40,
  },
  img: {
    width: '100%',
    height: '100%',
    maxHeight: 84,
    objectFit: 'contain',
  },
  [theme.breakpoints.down(500)]: {
    loginContainer: {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },
}));

export default useStyles;
