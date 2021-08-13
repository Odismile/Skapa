import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    '& .inputGroup': {
      backgroundColor: 'white',
      borderRadius: 20,
      border: '1px solid #8870FF',
      marginLeft: 5,
      display: 'block',
      overflow: 'hidden',
      height: 32,
      width: 62,
      fontSize: 12,
      '& label': {
        color: '#8870FF',
        display: 'flex',
        height: 32,
        width: 62,
        fontSize: 12,
        alignItems: 'center',
        justifyContent: 'center',
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
