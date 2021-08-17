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
          '&:focus, &:hover': {
            "& path": {
              fill: "#8277FF",
            }
          }
        },
        "& .head-title": {
          maxWidth: "55%",
          marginBottom: 8,
          fontSize: 14,
          fontWeight: 700,
          marginTop: 0,
          whiteSpace: 'nowrap',
          textOverflow: "ellipsis",
          overflow: 'hidden'
        },
        '& .iconHeart':{
          width: 21,
          height: 20,
          "& path": {
            stroke: "#8277FF",
            width: 21,
            height: 20,
          }
        },
        '& .iconOrganisation':{
          position: 'absolute',
          top: -5,
          left: -8,
          width: 30,
          height: 30,
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
        color: '#5BD3A0',
        fontWeight: 600,
        display: "flex",
        // alignItems: "center",
        position: 'absolute',
        top: 12,
        right: 0,
        '&.recommanded': {
          color: '#5bd3a0',
          "& svg ": {
            height: 12,
            width: "auto",
            paddingRight: 5,
            "& path": {
              stroke: "#5bd3a0",
            }
          }
        },
        '&.top-rated': {
          color: '#E30057',
          "& svg ": {
            height: 12,
            paddingRight: 5,
            width: "auto",
            "& path": {
              fill: "#E30057",
            }
          }
        }
      },
      '& .level-rate': {
        display: "flex",
        alignItems: "center",
        padding: "0!important",
      },
      '& .name-adress': {
        fontSize: 10,
        color: '#000000',
        marginBottom: 0,
        paddingRight: 10,
        "&:last-child": {
          paddingRight: 0
        },
        '& span': {
          fontWeight: 700,
        },
      },
    },
  },
  check: {
    "& .checkbox": {
        width: 20,
        height: 20,
        borderRadius: 5,
        color: "#8870FF",
    }
},
}));
