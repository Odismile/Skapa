import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    onGoingItem_bloc: {
      borderRadius: 12,
      border: 'solid 1px #f4f4f4',
      background: '#fff',
      boxShadow: '0px 2px 4px rgba(0,0,0,0.11)',
      marginBottom: 10,
      "& .cardMedia_content": {
        borderRadius: 10,
        position: 'relative',
        marginBottom: 10,
      },
      "& .media": {
        borderRadius: 10,
        height: 77,
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
      "& .header_item": {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 5,
        width: '100%',
      },
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
      "& .infos_content ": {
        marginBottom: 4,
        "& p": {
          margin: 0,
          fontSize: 10,
        },
        "& label": {
          fontWeight: 600,
          margin: 0,
        },
      },
      "& .body_item": {
        
      },
      "& .infos_content": {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        width: '100%',
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
      "& .level_infos": {
        fontSize: 10,
        marginBottom: 0,
        
        "& label": {
          fontWeight: 700,
          
        },
        "& span": {
          color: '#e30057',
          fontWeight: 600,
          letterSpacing: 1,
          textTransform: 'uppercase',
          "& svg": {
            fontSize: "0.75rem",
            marginRight: 5,
            verticalAlign: -2,
          },
        },
      },
    },
    cardContentroot: {
      padding: 10, 
      "&:last-child": {
        paddingBottom: 10,
      }
    }
  }),
  { name: "onGoingItem" }
);