import { makeStyles } from '@material-ui/core/styles';

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
        marginBottom: 0,
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
  modal_detail_project: {
    "& [role='dialog']": {
      borderRadius: 20,
      margin: '1rem',
      padding: 10,
      width: '100%',
    },
    "& .dialog-content": {
      padding: 0,
    },
    "& .media_content": {
      margin: '0 0 20px',
      position: 'relative',
      "& .media": {
        borderRadius: 16,
        height: 164,
        margin: 0,
        "& img": {
          display: 'block',
          borderRadius: 'inherit',
          maxWidth: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          width: '100%',
        }
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
        lineHeight: 1.2,
        margin: 0,
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
      alignItems: 'center',
      marginBottom: 10,
      padding: '0 20px',
      width: '100%',
      '& h2': {
        fontSize: 30,
        fontWeight: 700,
        marginRight: 20,
      },
      "& .date_range": {
        fontSize: 14,
        fontWeight: 600,
        margin: 0,
        whiteSpace: 'nowrap',
        "& svg": {
          fontSize: '1.25rem',
          marginRight: 10,
          verticalAlign: -5,
        },
      },
    },
    '& .body_item': {
      display: 'flex',
      padding: '0 20px',
      "& .left_content, & .right_content":  {
        flex: '1 0 50%',
        width: '50%',
      },
      "& .left_content":{
        paddingRight: 45,
      },
      "& .right_content":{
        paddingLeft: 45,
      },
    },
    "& .infos_text": {
      marginBottom: 10,
      "& p": {
        lineHeight: 1.2,
        fontSize: 14,
        margin: 0,
      },
      "& label": {
        fontWeight: 600,
        margin: 0,
      },
    },
    "& .team_bloc": {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 20,
      "& .team_title": {
        fontSize: 14,
        display: 'inline-flex',
        fontWeight: 700,
        lineHeight: 1.25,
        marginBottom: 0,
        marginRight: 10,
      },
    },
    "& .sliderRange_bloc": {
      marginBottom: 20,
      "& .sliderText": {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10,
        "& .sliderText_item": {
          color: '#000',
          fontSize: 15,
          lineHeight: 1.25,
          marginBottom: 0,
          "&.active": {
            color: '#8870ff',
          },
          "& .value": {
            
            fontWeight: 700,
          },
          "& .text": {
            fontWeight: 300,
          },
        },
      },
    },
    "& .presentation_bloc": {
      "& .title": {
        color: '#000',
        fontSize: 14,
        fontWeight: 700,
      },
      "& .presentation_desc": {
        "& .inner_desc": {
          border: 'dashed 1px #f4f4f4',
          borderRadius: 12,
          boxShadow: 'inset 0px 1px 3px rgba(0,0,0,0.5)',
          height: 84,
          padding: '10px 15px 10px 10px',
          marginBottom: 10,
          //maxWidth: 298,
          overflow: 'hidden auto',
          width: '100%',
          "& .text": {
            color: '#383838',
            fontSize: 12,
            fontWeight: 400,
            lineHeight: 1.4,
            marginBottom: 0,
          },
        },
        "& .wrap_link": {
          marginBottom: 0,
          lineHeight: 1.4,
          textAlign: 'right',
          "& .more_link": {
            borderBottom: '1px solid #8870ff',
            color: '#8870ff',
            cursor: 'pointer',
            display: 'inline-block',
            fontSize: 15,
            fontWeight: 700,
            textDecoration: 'none',
          },
        },
      },
    },
    "& .pitch_bloc": {
      marginBottom: 20,
      "& .title": {
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 1.25,
        margin: '0 0 10px',
      },
      "& .pitch_content": {
        background: 'rgb(101 101 101 / 60%)',
        borderRadius: 6,
        height: 168,
        //maxWidth: 300,
        width: '100%',
      },
    },
    "& .tags_bloc": {
      "& .title": {
        fontSize: 14,
        fontWeight: 700,
        lineHeight: 1.25,
        margin: '0 0 10px',
      },
      "& .tag_list": {
        display: 'flex',
        flexWrap: 'wrap',
      },
      "& .tag_item": {
        borderRadius: 13,
        background: "#ece8ff",
        color: "#634ecb",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        fontWeight: 400,
        height: 25,
        margin: "0 10px 5px 0",
        minWidth: 88,
        padding: '0 12px',
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
      "& .btn_close": {
        background: '#e30057',
        "& svg": {
          fontSize: 11,
        },
      },
    },
  },
  dialog_footer: {
    padding: 0,
  },
}));
