import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    '& .card': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 114,
      width: 105,
      borderRadius: 12,
      background: '#634ecb',
      boxShadow: '0px 2px 6px rgba(55,55,55,0.32)',
      padding: '12px 7px',
      textAlign: 'center',
      position: 'relative',
      '& p':{
        marginBottom: 0,
      },
      '& .head': {
        color: '#ffffff',
        fontSize: 10,
        fontWeight: 700,
        height: 26,
      },
      '& .number': {
        color: '#ffffff',
        fontWeight: 700,
        fontSize: 28,
        '&.center':{
          position: 'absolute',
          top: 46,
        }
      },
      '& .foot': {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: 700,
      },
    },
  },
}));

export default useStyles;
