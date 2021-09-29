import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  (theme) => ({
    carcPlacesContainer: {
      "&.selected": {
        "& .placeItem": {
          borderColor: '#8870ff',
          borderWidth: 2,
          borderStyle: 'solid',  
        }
      },
    },
    PlacesItem: {
      background: '#fff',
      borderRadius: 12,
      boxShadow: '0px 2px 4px rgba(0,0,0,0.11)',
      margin: '0 auto 10px',
      //maxWidth: 350,
      overflow: 'initial',
      position: 'relative',
      width: '100%',
      "& .card_content": {
        padding: '10px 8px',
      },
      "& .cardMedia_content": {
        background: '#e2deff',
        borderRadius: 10,
        height: 75,
        marginBottom: 10,
        position: 'relative',
        width: '100%',
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
          top: 5, left: 5,
          width: 24,
          "& img": {
            height: 'auto',
            maxWidth: '100%',
            width: 'inherit',
          }
        },
      },
      "& .desc_content": {
        "& .head_title": {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 5,
        },
        "& .place_title": {
          fontSize: 14,
          fontWeight: 700,
          margin: 0,
        },
        "& .place_price": {
          background: '#dffff2',
          borderRadius: 13,
          color: '#5bd3a0',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 17,
          fontSize: 10,
          fontWeight: 700,
          textAlign: 'center',
          margin: 0,
          padding: '0 6px',
        },
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
        
        "& .place_location, & .place_capacity, & .place_equipments": {
          color: '#000',
          fontSize: 10,
          lineHeight: 1.4,
          marginBottom: 5,
          "& strong": {
            fontWeight: 700,
          },
          "& span": {
            fontWeight: 400,
            paddingLeft: 5,
          },
        },
        "& .place_equipments": {
          margin: 0,
          "& .value": {
            "& svg ": {
              color: '#000',
              fontSize: '1rem',
              marginLeft: 10,
              verticalAlign: 'middle',
            },
          },
        },
        "& .place_location": {},
      },
      "& .check_content": {
        minWidth: 76,
        position: 'relative',
        "& .checkbox": {
          position: 'absolute',
          right: 20,
          bottom: 10,
        },
      },
    },
  }), {name: 'placesItem'},
);
