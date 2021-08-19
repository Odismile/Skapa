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
      },
      "& .btn-favori": {
        position: 'absolute',
        top: 8,
        right: 8,
        zIndex: 1,
        padding: 0,
        "&:hover, &:focus": {
          '& svg': {
            '& path': {
              fill: '#e30057',
              d: "path('M19.4,1.8c-1-1.1-2.4-1.8-3.9-1.8s-2.9,0.6-3.9,1.8l-1.1,1.2L9.4,1.8c-2.2-2.4-5.7-2.4-7.8,0 c-2.2,2.4-2.2,6.2,0,8.5l1.1,1.2l7.8,8.5l7.8-8.5l1.1-1.2C20.4,9.2,21,7.6,21,6S20.4,2.9,19.4,1.8z')",
            },
          }
        },
        "& svg": {
          width: 20,
          height: 21,
          "& path": {
            fill: "#fff",
          }
        }
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
    '& .detail-top': {
      display: "flex",
      justifyContent: "space-between",
      '& svg': {
        '& path': {
          stroke: "#5BD3A0",
        }
      },
      '& .trending': {
        color: '#5BD3A0',
        textTransform: 'uppercase',
        fontSize: 10,
        display: "flex",
        "& svg": {
          width: 14,
          height: 7,
          marginRight: 5,
          marginTop: 3,
        }
      },
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
            '& p':{
              marginRight: 4,
            }
        }
    },
    '& .info':{
        display: 'flex',
        justifyContent: 'space-between',
        '& p':{
            fontSize: 10,
            marginBottom: 0,
            color: '#000000',
            '&.bold':{
              fontWeight: 700,
            }
        },
        '& .active':{
            color: '#9A5CFF',
        }
    }
  },
}));
