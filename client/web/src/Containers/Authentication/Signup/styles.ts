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
    textfield:{
      width: '100%',
      margin: '8px 0px',
      '& .Mui-focused':{
        color: '#a1a1a1',
      },
      '& label':{
        color: '#a1a1a1',
        fontStyle: 'italic',
      },
      '& div input':{
        border: '1px solid #a1a1a1',
        color: '#000000',
        fontSize: 14,
        padding: 8,
      },
      '& div:focus':{
        border: 'none',
      },
      '& div':{
        marginTop: 24,
      },
      '& div:before':{
        border: 'none',
      },
      '& div:after':{
        border: 'none',
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
