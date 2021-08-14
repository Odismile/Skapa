import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  boxLang: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    '& .contenuRadio': {
      display: 'flex',
    },
    '& .label': {
      fontSize: 14,
      width: '20%',
      marginBottom: 0,
    },
    '& .inputGroup': {
      backgroundColor: 'white',
      borderRadius: 20,
      border: '1px solid #8870FF',
      margin: 5,
      display: 'block',
      overflow: 'hidden',
      '& label': {
        color: '#8870FF',
        padding: '8px 10px',
        display: 'inline-block',
      },
      '& input': {
        display: 'none',
      },
      '& input:checked ~ label': {
        backgroundColor: '#ece8ff',
      },
    },
  },
}));

export default useStyles;
