import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  card: {
    padding: 11,
    borderRadius: 12,
    border: 'solid 1px #f4f4f4',
    background: '#ffffff',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.11)',
    '& .image': {
      height: 79,
      position: 'relative',
      '& .category': {
        borderRadius: 12,
        backgroundColor: '#ece8ff',
        color: '#8870ff',
        height: 20,
        position: 'absolute',
        top: 8,
        left: 8,
        padding: '0px 9px',
        display: 'flex',
        alignItems: 'center',
      },
    },
    '& .details': {
      marginTop: 10,
      display: 'flex',
      justifyContent: 'space-between',
      '& .title': {
        fontSize: 14,
        color: '#000000',
        fontWeight: 700,
        width: 217,
        marginBottom: 0,
      },
      '& .btn': {
        minWidth: 66,
        height: 20,
        borderRadius: 12,
        backgroundColor: '#5bd3a0',
        fontSize: 10,
        color: 'white',
        display: 'flex',
        padding: 0,
      },
    },
    '& .teams': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& .textTeam': {
        marginRight: 4,
      },
      '& .name-adress, .textTeam': {
        marginBottom: 0,
        fontSize: 10,
        color: '#000000',
        '& span': {
          fontWeight: 700,
        },
      },
      '& .imageTeam': {
        display: 'flex',
        alignItems: 'center',
        '& .avatar': {
          '& >div': {
            height: 26,
            width: 26,
          },
        },
      },
    },
    '& .info': {
      display: 'flex',
      justifyContent: 'space-between',
      '& p': {
        fontSize: 10,
        marginBottom: 0,
        color: '#000000',
        '&.bold': {
          fontWeight: 700,
        },
      },
      '& .active': {
        color: '#9A5CFF',
      },
    },
    '& .foot':{
      display: 'flex',
      justifyContent: 'center',
      marginTop: 16,
      '& button':{
        width: 118,
        height: 35,
        borderRadius: 18,
        background: '#8870ff',
        fontSize: 12,
        fontWeight: 600,
        color: '#ffffff',
      }
    }
  },
}));

export default useStyles;