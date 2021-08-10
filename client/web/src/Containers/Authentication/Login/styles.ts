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
  btn: {
    paddingTop: 12,
    paddingBottom: 12,
    marginTop: 12,
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
    marginTop: 42,
    textAlign: 'center',
  },
  link: {
    cursor: 'pointer',
    borderBottom: "1px solid #8277FF",
  },
  imgContainer: {
    marginBottom: 24,
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
