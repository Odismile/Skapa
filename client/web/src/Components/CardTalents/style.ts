import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    boxShadow: '0px 2px 4px #0000001C',
    border: '1px solid #F4F4F4',
    borderRadius: 12,
    '& .content': {
      padding: 7,
      '& .head': {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '& div': {
          padding: '0px 10px',
        },
        '& .iconHeart':{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 21,
          height: 20,
        }
      },
      '& img': {
        height: 74,
        width: 74,
        borderRadius: 8,
      },
      '& .note': {
        marginBottom: 0,
        fontSize: 10,
        marginLeft: 12,
        color: '#5BD3A0',
        fontWeight: 600,
      },
      '& .name-adress': {
        fontSize: 10,
        color: '#000000',
        marginBottom: 0,
        '& span': {
          fontWeight: 700,
        },
      },
    },
    '& .foot': {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: 8,
      alignItems: 'center',
      '& .btnAdd': {
        backgroundColor: '#8870FF',
        borderRadius: 18,
        height: 35,
        color: 'white',
        fontSize: 12,
        width: 118,
      },
    },
    '& .tags': {
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 4,
      '&>div': {
        backgroundColor: '#ECE8FF',
        color: '#8870FF',
        height: 20,
        fontSize: 10,
      },
      '& span.number': {
        color: '#8870FF',
        fontSize: 10,
      },
    },
  },
}));
