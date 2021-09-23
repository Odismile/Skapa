import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    boxShadow: '0px 2px 4px #0000001C',
    border: '1px solid #F4F4F4',
    borderRadius: 12,
    padding: '7px 10px',
    position: 'relative',
    '& .media': {
      height: 75,
      borderRadius: 10,
      position: 'relative',
    },
    '& .contenus': {
      display: 'flex',
      justifyContent: 'space-between',
      padding: 10,
      '& .text': {
        fontSize: 14,
        color: '#000000',
        fontWeight: 700,
        marginBottom: 0,
      },
      '& .textMini': {
        fontSize: 10,
        color: '#000000',
        fontWeight: 600,
        marginBottom: 0,
        display: 'flex',
        '& .iconCalendar': {
          height: 13,
          width: 14,
          marginRight: 4,
        },
      },
      '& .BoxTeam': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        '& .avatar>div': {
          height: 26,
          width: 26,
        },
        '& .textMini': {
          fontWeight: 700,
          marginRight: 4,
        },
      },
    },
  },
  foot: {
    fontSize: 9,
    fontStyle: 'italic',
    textAlign: 'right',
    color: '#000000',
    marginTop: 13,
    '& span': {
      color: '#5BD3A0',
      backgroundColor: '#DFFFF2',
      borderRadius: 13,
      height: 17,
      width: 60,
      padding: '2px 8px',
      margin: '0px 5px',
      fontStyle: 'normal',
    },
  },
  badge: {
    fontSize: 10,
    color: '#8870FF',
    backgroundColor: '#ECE8FF',
    borderRadius: 13,
    position: 'absolute',
    top: 16,
    left: 16,
    padding: '3px 9px',
  },
  check: {
    position: 'absolute',
    top: 16,
    right: 16,
    '& .checkbox': {
      width: 20,
      height: 20,
      borderRadius: 5,
      color: '#8870FF',
    },
  },
}));
