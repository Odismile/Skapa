import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  "@global": {
    "*, *:before, *:after": {
      boxSizing: 'border-box',
    },
  }, 
  mainPage:  {
    height: "100%",
    maxWidth: "40rem",
    marginLeft: 'auto',
    marginRight: 'auto',
    maxHeight: '42.5rem',
    padding: '2.5rem 1.875rem 1.875rem',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: "100%",
    zIndex: 0,
    "& .wrapPage": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      width: "100%",
    },
  },
  main_header: {
    "& .logo": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      margin: 0,
      "& img": {
        maxWidth: "100%",
        width: 105,
      },
    },
  },
  mainContainer: {
    padding: '2.5rem 0',
    "& .createProfile_start": {
      margin: '0 auto',
      textAlign: 'center',
      "& h1": {
        color: '#000',
        fontSize: '1.75rem',
        margin: "0 0 1.875rem ",
        textAlign: 'center',
      },
    },
  },
  footerPage: {
    "& .link-footer": {
      color: '#8870ff',
      fontSize: '1rem',
      fontWeight: 600,
      margin: 0,
      textAlign: "right",
      "@media(min-width: 640px)": {
        textAlign: 'center',
      },
      '& a': {
        color: 'inherit',
        textDecoration: 'none',
        borderBottom: '1px solid',
      },
    }
  },
  radio: {
    margin: '8px 0px',
    '& legend': {
      fontSize: 14,
      fontStyle: 'italic',
    },
    '& div>label': {
      marginRight: 12,
      '&>span': {
        fontSize: 14,
      },
    },
    '& .Mui-checked':{
      color: '#8870FF',
    },
    '& div>label>span:last-child':{
      marginBottom: 0,
    },
    '& .custom_radio>label>span>span>div>svg':{
      fill: '#8870FF',

    }
  },
  languages:{
    margin: '8px 0px',
    width: '100%',
    '& legend': {
      fontSize: 14,
      fontStyle: 'italic',
    },
  },
  btnNext:{
    display: 'flex',
    justifyContent: 'center',
    marginTop: 16,
    '& button':{
      backgroundColor: '#8870ff',
      borderRadius: 20,
      color: 'white',
      padding: '6px 24px',
      textTransform: 'capitalize',
      '&:hover':{
        backgroundColor: '#8870ff',
        color: 'white',
      }
    }
  },


}));
