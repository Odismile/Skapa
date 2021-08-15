import { makeStyles } from '@material-ui/core/styles';
import imgCard from '../../Assets/images/lab.svg';
import noir from '../../Assets/images/noir.svg';

export default makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    position: 'relative',
    '& .category':{
      backgroundColor: '#e3ddff',
      borderRadius: 13,
      color: '#9a5cff',
      display: "flex",
      alignItems: "center",
      height: 20,
      fontSize: 10,
      fontWeight: 400,
      padding: '0 10px',
      position: 'absolute',
      top: 8,
      left: 8,
      textTransform: 'uppercase',
      zIndex: 1,
      },
      '& .bgBlack':{
          position: 'absolute',
          top:0,
          height: 79,
          width: '100%',
          backgroundColor: 'rgba(0,0,0, 0.3)',
          borderRadius: 13,
          zIndex: 0,
      }
  },
  media: {
    height: 79,
    borderRadius: 10,
  },
  content: {
    padding: 0,
    paddingTop: 10,
    '& .title': {
      fontSize: 14,
      fontWeight: 700,
      width: '50%',
      color: '#000000',
    },
    '& .details':{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        width: '100%',
        '& .name-adress':{
            fontSize: 10,
            width: '60%',
            color: '#000000',
            marginBottom: 0,
            '& span':{
                fontWeight: 700,
            }
        },
        '& .avatarGroup>div':{
            height: 28,
            width: 28,
        },
        '& .teams':{
            display: 'flex',
            alignItems: 'center',
        }
    },
    '& .info':{
        display: 'flex',
        justifyContent: 'space-between',
        '& p':{
            fontSize: 10,
            marginBottom: 0,
            color: '#000000',
        },
        '& .active':{
            color: '#9A5CFF',
        }
    }
  },
}));
