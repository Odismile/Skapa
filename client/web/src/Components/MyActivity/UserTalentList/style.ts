import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  rootCardList: {
    display: 'flex',
    justifyContent: 'space-between',
    '& .card': {
      //background: '#634ecb',
      background: 'rgba(99, 78, 203, 0.32)',
      borderRadius: 12,
      //boxShadow: '0px 2px 6px rgba(55,55,55,0.32)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 114,
      overflow: 'hidden',
      padding: '12px 6px',
      position: 'relative',
      textAlign: 'center',
      width: 105,
      '& p':{
        color: '#fff',
        marginBottom: 0,
      },
      "& .iconBg": {
        position: 'absolute',
        "& svg": {
          fill: "#ece8ff",
          opacity: '0.07',
          fontSize: '5.6rem',
        },
      },
      "& .iconBg-idea": {
        left: -16,
        bottom: -14,
      },
      "& .iconBg-times": {
        left: -12,
        bottom: -12,
      },
      '& .head': {
        fontSize: 10,
        fontWeight: 700,
        lineHeight: 1.4,
      },
      '& .number': {
        fontSize: 28,
        fontWeight: 400,
        lineHeight: '21px',
        '&.center':{
          position: 'absolute',
          top: 46,
        }
      },
      '& .foot': {
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 1.4 
      },
    },
  },
}));

export default useStyles;
