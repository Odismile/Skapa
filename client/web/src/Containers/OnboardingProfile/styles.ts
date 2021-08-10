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
    },
    '& .foot': {
      justifyContent: 'flex-end',
      display: 'flex',
      width: '100%',
      '& a':{
        color: '#8870FF',
        textDecoration: 'none',
        paddingBottom: 3,
        borderBottom: '1px solid #8870ff',
      }
    },
  },
  radio: {
    margin: '8px 0px',
    '& legend': {
      fontSize: 14,
      fontStyle: 'italic',
    },
    '& div>label': {
      marginRight: 12,
      '&>span': {
        fontSize: 14,
      },
    },
    '& .Mui-checked':{
      color: '#8870FF',
    }
  },
  languages:{
    margin: '8px 0px',
    width: '100%',
    '& legend': {
      fontSize: 14,
      fontStyle: 'italic',
    },
  },
  btnNext:{
    display: 'flex',
    justifyContent: 'center',
    marginTop: 16,
    '& button':{
      backgroundColor: '#8870ff',
      borderRadius: 20,
      color: 'white',
      padding: '6px 24px',
      textTransform: 'capitalize',
      '&:hover':{
        backgroundColor: '#8870ff',
        color: 'white',
      }
    }
  },
}));

export default useStyles;
