import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(() => 
({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      padding: '24px 48px',
      boxSizing: 'border-box',
      alignItems: 'center',
      maxWidth: 640,
      minWidth: 320,
      minHeight: '100vh',
      margin: 'auto',
      '& a.link':{
        display: 'block',
        textAlign: 'center',
        marginTop: 44,
      }
    },
    button:{
      marginTop: 10,
      textTransform: 'inherit',
      padding: 20,
      width: '100%',
      backgroundColor: 'black',
      color: 'white',
      '&:hover':{
        backgroundColor: 'black',
        color: 'white',
      }
    }
  })
);

export default useStyles;
