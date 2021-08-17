import { makeStyles } from '@material-ui/core/styles';
import { Autoplay } from 'swiper';

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
        '& .btn-favori': {
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 1,
          padding: 0,
          '&:focus, &:hover': {
            '& path': {
              fill: '#e30057',
              stroke: '#e30057'
            },
          },
        },
        '& .iconHeart': {
          width: 21,
          height: 20,
          '& path': {
            stroke: '#8277FF',
            width: 21,
            height: 20,
          },
        },
        '& .iconOrganisation': {
          position: 'absolute',
          top: -5,
          left: -8,
          width: 30,
          height: 30,
        },
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
        display: 'flex',
        alignItems: 'center',
        '&.recommanded': {
          color: '#5bd3a0',
          '& svg ': {
            height: 12,
            width: 'auto',
            paddingRight: 5,
            '& path': {
              stroke: '#5bd3a0',
            },
          },
        },
        '&.top-rated': {
          color: '#E30057',
          '& svg ': {
            height: 12,
            paddingRight: 5,
            width: 'auto',
            '& path': {
              stroke: '#E30057',
            },
          },
        },
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
  check: {
    '& .checkbox': {
      width: 20,
      height: 20,
      borderRadius: 5,
      color: '#8870FF',
    },
  },
  drawerContribute: {
    maxHeight: '75%',
    width: '100%',
  },
  drawerPaperContribute: {
    background: '#fff',
    borderRadius: '12px 12px 0 0',
    border: '1px solid #f4f4f4',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.11)',
    maxHeight: '75%',
    padding: '35px 30px 30px',
  },
  addProject_drawerContent: {
    position: 'relative',
    "& .btn_handleDrawer": {
      background: "#e5e5e5",
      borderRadius: 8,
      height: 8,
      position: "absolute",
      left: "50%",
      top: -25, 
      transform: "translateX(-50%)",
      width: 110,
    },
    '& .header': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& .btn_done': {
        height: 35,
        backgroundColor: '#8870FF',
        fontSize: 14,
        color: 'white',
        padding: '10px 28px',
      },
    },
    '& .content': {
      '& .selectText': {
        color: '#979797',
        fontWeight: 400,
        fontStyle: 'italic',
        marginTop: 12,
      },
      '& >div':{
        marginTop: 10,
      }
    },
  },
}));
