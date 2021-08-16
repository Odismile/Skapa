import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => 
({
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
  linkContainer: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 600,
  },
  link: {
    cursor: 'pointer',
    borderBottom: "1px solid #8277FF",
    textDecoration: 'none',
    '&:hover':{
      textDecoration: 'none',
    }
  },
  button: {},
  })
);

export default useStyles;
