import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    appExterneItem_bloc: {
      background: 'none',
      borderRadius: 12,
      boxShadow: 'none',
      marginBottom: 10,
      "& .cardMedia_content": {},
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
          verticalAlign: '-3px',
        },
      },
      "& .infos_content": {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        width: '100%',
        "& p": {
          fontSize: 10,
          marginBottom: 0,
        },
        "& label": {
          fontWeight: 600,
          margin: 0,
        },
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
      "& .slider_daysLeft": {
        "& .text_dayLeft": {
          color: "#8870ff",
          fontSize: 10,
          fontWeight: 700,
          margin: "8px 0 0",
        },
      }
    },
    cardContentroot: {
      border: 'solid 1px #f4f4f4',
      background: '#fff',
      boxShadow: '0px 2px 4px rgba(0,0,0,0.11)',
      borderRadius: 12,
      padding: 10, 
      "&:last-child": {
        paddingBottom: 10,
      }
    }
  }),
  { name: "onGoingItem" }
);