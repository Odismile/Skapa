import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  card: {
    padding: 11,
    borderRadius: 12,
    border: 'solid 1px #f4f4f4',
    background: '#ffffff',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.11)',
    marginBottom: 10,
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
        fontSize: 10,
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
        marginBottom: 0,
      },
      '& .date': {
        marginBottom: 0,
        fontSize: 10,
        color: '#000000',
        display: 'flex',
        alignItems: 'center',
        '& span': {
          marginLeft: 6,
        },
        '& svg': {
          height: 13,
          width: 13,
        },
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
    '& .skillsContent': {
      display: 'flex',
      alignItems: 'baseline',
      '& .title': {
        fontWeight: 700,
        fontSize: 10,
        marginBottom: 0,
        color: '#000000',
        minWidth: 78,
      },
      '& .skillsWrap': {
        display: 'flex',
        flexWrap: 'wrap',
        '& .skills': {
          margin: 2,
          borderRadius: 12,
          backgroundColor: '#ece8ff',
          color: '#634ecb',
          height: 20,
          padding: '3px 8px',
          fontSize: 10,
        },
      },
    },
    '& .level': {
      marginTop: 4,
      fontWeight: 700,
      fontSize: 10,
      marginBottom: 0,
      color: '#000000',
      '& span': {
        color: '#E30057',
        marginLeft: 13,
      },
    },
  },
  iconFilled:{
    color: '#8870FF',
  },
  iconEmpty:{
    color: '#ECE8FF!important',
  },
  disabled:{
    opacity: '1!important',
  },
  rating:{
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: 10,
    fontWeight: 700,
    alignItems: 'center',
    color: '#000000',
    '& .rate':{
      marginLeft: 6,
      '& svg':{
        height: 16,
        width: 16,
      }
    }
  }
}));

export default useStyles;
