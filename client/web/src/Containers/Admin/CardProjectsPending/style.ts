import { makeStyles } from '@material-ui/core/styles';
import { Autoplay } from 'swiper';

export default makeStyles((theme) => ({
  ProjectItem_pending: {
    background: '#fff',
    border: '1px solid #f4f4f4',
    borderRadius: 12,
    boxShadow: '0px 2px 4px rgba(0,0,0,0.11)',
    marginBottom: 10,
    "& .cardMedia_content": {
      marginBottom: 10,
      position: 'relative',
      "& .media": {
        borderRadius: 10,
        height: 77,
        aspectRatio: '315/77',
        width: '100%',
      },
      "& .labeled": {
        borderRadius: 13,
        background: "#ece8ff",
        color: "#634ecb",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 10,
        fontWeight: 400,
        height: 20,
        minWidth: 66,
        position: 'absolute',
        top: 8,
        left: 8,
        zIndex: 1,
      },
    },
    "& .header_item": {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 10,
      width: '100%',
      '& h2': {
        fontSize: 14,
        fontWeight: 700,
        marginRight: 20,
      },
      "& .date_range": {
        fontSize: 10,
        fontWeight: 600,
        margin: 0,
        whiteSpace: 'nowrap',
        "& svg": {
          fontSize: '.875rem',
          marginRight: 5,
          verticalAlign: -2,
        },
      },
    },
    "& .body_item": {
      "& p": {
        margin: 0,
        fontSize: 10,
      },
      "& label": {
        fontWeight: 600,
        margin: 0,
      },
      "& .infos_text": {
        marginBottom: 10,
      },
      "& .skills_recquired": {
        display: 'flex',
        marginBottom: 5,
        "& label": {
          fontSize: 10,
          fontWeight: 700,
          marginRight: 5,
          padding: '3px 0',
          whiteSpace: 'nowrap',
        },
        "& .skills_list": {
          display: 'flex',
          flexWrap: 'wrap',
          "& .skill_item": {
            borderRadius: 13,
            background: "#ece8ff",
            color: "#634ecb",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 10,
            fontWeight: 400,
            height: 20,
            minWidth: 67,
            margin: "0 3px 5px 0",
          },
        }
        ,
      },
    },
    "& .card-actions": {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 10px 10px',
    },
    "& .team_bloc": {
      display: 'flex',
      alignItems: 'center',
      "& .team_title": {
        fontSize: 10,
        display: 'inline-flex',
        fontWeight: 700,
        lineHeight: 1.25,
        marginRight: 5,
      },
    },
    "& .btns-group": {
      display: 'flex',
      alignItems: 'center',
      "& .btn": {
        border: 'none',
        borderRadius: 35,
        height: 35,
        padding: 0,
        marginLeft: 10,
        width: 35,
        "& svg": {
          fill: '#fff',
        },
      },
      "& .btn_validate": {
        background: '#13ba75',
        "& svg": {
          fontSize: 15,
        },
      }
      ,
      "& .btn_remove": {
        background: '#e30057',
        "& svg": {
          fontSize: 11,
        },
      },
    },
  },
  card_root: {
    padding: 10,
  },
}));
