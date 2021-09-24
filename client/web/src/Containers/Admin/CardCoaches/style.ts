import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  (theme) => ({
    carcCoachContainer: {
      "&.selected": {
        
        "& .CoachesItem": {
          borderColor: '#8870ff',
          borderWidth: 2,
          borderStyle: 'solid',  
        }
      },
    },
    CoachesItem: {
      background: '#fff',
      border: '1px solid #f4f4f4',
      borderRadius: 12,
      boxShadow: '0px 2px 4px rgba(0,0,0,0.11)',
      marginBottom: 40,
      margin: '0 auto',
      maxWidth: 350,
      overflow: 'initial',
      position: 'relative',
      width: '100%',
      
      "& .card_content": {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '10px 10px 24px',
      },
      "& .cardMedia_content": {
        borderRadius: 12,
        height: 66,
        position: 'relative',
        
        width: 66,
        "& .media": {
          borderRadius: 10,
          height: 'inherit',
          width: 'inherit',
        },
        "& .labeled": {
          background: '#fff',
          borderRadius: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 24,
          lineHeight: '100%',
          margin: 0,
          padding: 2,
          position: 'absolute',
          top: -4, left: -4,
          width: 24,
          "& img": {
            height: 'auto',
            maxWidth: '100%',
            width: 'inherit',
          }
        },
      },
      "& .desc_content": {
        padding: '0 10px',
        "& .coach_title": {
          fontSize: 14,
          fontWeight: 700,
          marginBottom: 8,
        },
        "& .coach_infos": {
          color: '#000',
          fontSize: 10,
          lineHeight: 1.4,
          "& strong": {
            fontWeight: 700,
          },
          "& span": {
            fontWeight: 400,
            paddingLeft: 5,
          },
        },
        "& .coach_infos_2": {
          color: '#000',
          fontSize: 10,
          lineHeight: 1.4,
          "& strong": {
            fontWeight: 700,
          },
          "& span": {
            fontWeight: 400,
            paddingLeft: 5,
          },
          "& .level": {
            paddingLeft: 0,
            
          },
          "& .rate": {

          },
        },
      },
      "& .check_content": {
        minWidth: 76,
        position: 'relative',
        "& .top_rated": {
          color: '#e30057',
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          "& svg": {
            fontSize: '.75rem',
            marginRight: 5,
          },
        },
        "& .checkbox": {
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-40%)',
        },
      },
      "& .card_actions": {
        padding: 0,
        position: 'absolute',
        left: 0, bottom: -18,
        width: '100%',
        "& .btns-group" : {
          textAlign: 'center',
          width: '100%',
          "& .btn_sendMail": {
            background: '#8870ff',
            boxShadow: '0px 2px 4px rgba(136,112,255,0.42)',
            borderRadius: 18,
            color: '#fff',
            fontSize: 12,
            fontWeight: 600,
            height: 35,
            minWidth: 138,
            padding: 0,
            textAlign: 'center',
            "& span": {

            },
          }
        },
      },
    },
  }), {name: 'CardCoaches'},
);
