import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .title': {
      color: '#000000',
      fontStyle: 'italic',
      fontWeight: 600,
      fontSize: 14,
      '& svg': {
        fill: '#8870ff',
        fontSize: '1.1rem',
        marginLeft: 6,
        verticalAlign: 'middle',
      },
    },
  },
  bio: {
    width: '100%',
    '& textarea': {
      height: 148,
      fontStyle: 'italic',
      borderRadius: 8,
      fontFamily: 'Nunito',
      border: '1px solid #DFDFDF',
      padding: 10,
      color: '#979797',
      '&:focus': {
        outline: 'none',
        fontStyle: 'normal',
        color: 'black',
      },
    },
    position: 'relative',
    '& .textLeft': {
      color: '#000',
      fontSize: 10,
      fontStyle: 'italic',
      margin: 0,
      position: 'absolute',
      right: 10,
      bottom: 10,
      zIndex: 1,
    },
  },
  footerPage: {
    '& .link-footer': {
      color: '#8870ff',
      fontSize: '1rem',
      fontWeight: 600,
      margin: 0,
      textAlign: 'right',
      '@media(min-width: 640px)': {
        textAlign: 'center',
      },
      '& a': {
        color: 'inherit',
        textDecoration: 'none',
        borderBottom: '1px solid',
      },
    },
  },
  btnNext: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 16,
    '& button': {
      backgroundColor: '#8870ff',
      borderRadius: 25,
      color: 'white',
      padding: '6px 24px',
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: '#8870ff',
        color: 'white',
      },
    },
  },
  input: {
    display: 'none',
  },
  form: {
    '& label>span:first-child': {
      borderRadius: '100%',
      height: 75,
      width: 75,
      minWidth: 75,
      border: '2px solid #8870ff',
      backgroundColor: 'white',
      color: '#8870ff',
      '& svg': {
        fontSize: '1.4rem',
      },
    },
    '& .addIcon': {
      fontSize: 40,
    },
  },
  inputVideo: {
    width: '100%',
    '& .video': {
      width: '100%',
      backgroundColor: '#EEEEEE',
      height: 35,
      borderRadius: 7,
      display: 'flex',
      alignItems: 'center',
      padding: '0px 10px',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
      color: '#979797',
      fontStyle: 'italic',
      cursor: 'pointer',
      fontSize: 12,
      '& svg': {
        color: '#8870ff',
        fontSize: '1rem',
      },
    },
    '& .tooltip': {
      padding: 0,
    },
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  videoUpload: {
    width: 'auto!important',
    height: '120px!important',
    marginTop: 10,
    '& video': {
      objectFit: 'cover',
    },
  },
}));
