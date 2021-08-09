import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
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
  loginForm: {
    maxWidth: 380,
    margin: 'auto',
  },
  loginContainer: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkContainer: {
    marginTop: 32,
    textAlign: 'center',
  },
  link: {
    cursor: 'pointer',
  },
}));

export default useStyles;
