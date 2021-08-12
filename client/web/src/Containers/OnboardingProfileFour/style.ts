import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  content: {
    maxHeight: 315,
    height: 315,
    overflow: 'scroll',
    '& .choice': {
      display: 'flex',
      width: '100%',
      flexWrap: 'wrap',
      height: '100%',
      justifyContent: 'space-between',
    },
    '& .inputGroup': {
      width: '48%',
      height: 100,
      position: 'relative',
      '& label': {
        color: '#8870FF',
        borderRadius: 12,
        width: '100%',
        border: 'solid 1px #8870ff',
        display: 'flex',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        fontWeight: 700,
      },
      '& input': {
        display: 'none',
      },
      '& input:checked ~ label': {
        backgroundColor: '#ece8ff',
        border: 'solid 2px #8870ff',
      },
      '& img':{
          position: 'absolute',
          bottom: 0,
          right: 0,
          opacity: '0.1',
      }
    },
  },
  btnNext: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 16,
    '& button': {
      backgroundColor: '#8870ff',
      borderRadius: 258,
      color: 'white',
      padding: '6px 24px',
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: '#8870ff',
        color: 'white',
      },
    },
  },
}));
