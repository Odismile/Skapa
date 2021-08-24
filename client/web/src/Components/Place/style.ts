import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  box: {},
  root: {
    boxShadow: '0px 2px 4px #0000001C',
    border: '1px solid #F4F4F4',
    borderRadius: 12,
    padding: '7px 10px',
    position: 'relative',
    flexDirection: 'column',
    '& .card': {
      boxShadow: 'none',
    },
    '& .media': {
      height: 75,
      borderRadius: 10,
      position: 'relative',
      '& .bitmap': {
        position: 'absolute',
        top: 6,
        left: 6,
        zIndex: 10,
      },
      '& .bitmap-image': {
        width: 24,
        height: 24,
        borderRadius: '50%',
        background: '#D8D8D8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid #fff',
        margin: 0,
        padding: 0,
      },
      '& .btn-favori': {
        position: 'absolute',
        top: 6,
        right: 6,
        zIndex: 10,
        padding: 0,
        '& svg': {
          width: 20,
          height: 21,
          '&.iconHeartOutlined': {
            '& path': {
              fill: '#fff',
            },
          },
        },
      },
    },
    '& .content': {
      marginTop: 10,
      padding: 0,
      position: 'relative',
      '& .title': {
        fontSize: 14,
        fontWeight: 700,
        color: '#000000',
        marginBottom: 0,
      },
      '& .chips': {
        backgroundColor: '#DFFFF2',
        color: '#5BD3A0',
        height: 17,
        padding: '2px 7px',
        fontSize: 10,
        borderRadius: 13,
      },
      '& .name-money': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      '& .top-rated': {
        display: 'flex',
        alignItems: 'center',
        color: '#e30057',
        fontSize: 12,
        fontWeight: '600',
        textTransform: 'uppercase',
        margin: '5px 0',
        '& svg': {
          paddingRight: 4,
          width: 15,
          height: 25,
          '& path': {
            fill: '#e30057',
          },
        },
      },
      '& p': {
        fontSize: 10,
        color: '#000000',
        marginBottom: 5,
        '& span': {
          fontWeight: 700,
        },
        '&.equipement': {
          fontSize: 10,
          color: '#000000',
          display: 'flex',
          alignItems: 'center',
          '& .icon-equipement': {
            display: 'flex',
            alignItems: 'center',
            marginLeft: 7,
            '& .icon': {
              marginRight: 5,
              height: 12,
            },
          },
        },
      },
    },
  },
  addProject: {
    position: 'absolute',
    bottom: 4,
    right: 0,
  },
  check: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    '& .checkbox': {
      width: 20,
      height: 20,
      borderRadius: 5,
      color: '#8870FF',
      '& svg': {
        borderRadius: 4,
      }
    },
  },
  button: {
    borderRadius: 25,
    fontSize: 12,
    padding: '10px 15px',
    height: 'auto',
    lineHeight: 1.5,
  },
}));
