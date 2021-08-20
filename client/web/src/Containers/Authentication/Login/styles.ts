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
      color: '#E30057',
      margin: 0,
    },
  },
  btnFullWidth:{
    display: 'flex',
    justifyContent: 'center',
    marginTop: 5,
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
  linkContainer: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 600,
  },
  link: {
    cursor: 'pointer',
    borderBottom: "1px solid #8277FF",
    "&:hover" : {
      textDecoration: 'none',
    },
  },
  imgContainer: {
    marginTop: 100,
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

  mainPage:  {
    height: "100%",
    maxWidth: "40rem",
    marginLeft: 'auto',
    marginRight: 'auto',
    maxHeight: '42.5rem',
    padding: '2.5rem 1.875rem 1.875rem',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: "100%",
    zIndex: 0,
    "& .wrapPage": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      width: "100%",
    },
  },
}));

export default useStyles;
