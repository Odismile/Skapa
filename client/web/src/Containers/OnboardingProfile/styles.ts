import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  radio: {
    margin: '8px 0px',
    '& legend': {
      fontSize: 14,
      color: '#000000',
      fontWeight: 600,
      fontStyle: 'italic',
    },
    '& div>label': {
      marginRight: 12,
      '&>span': {
        fontSize: 14,
      },
    },
    '& div>label>span:last-child': {
      marginBottom: 0,
    },
    '& .custom_radio': {
      '&>label>span>span>div>svg': {
        fill: '#8870FF',
      },
      '&>label>span.Mui-checked>span>div>svg:last-child': {
        transform: 'scale(1.4)',
      },
      '&>label>span.Mui-checked ~ span': {
        color: '#8870FF',
      },
    },
  },
  languages: {
    margin: '8px 0px',
    width: '100%',
    '& legend': {
      fontSize: 14,
      fontStyle: 'italic',
      color: '#000000',
      fontWeight: 600,
    },
  },
  btnNext: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 20,
    '& button': {
      backgroundColor: '#8870ff',
      borderRadius: 25,
      color: 'white',
      height: 50,
      padding: '6px 24px',
      textTransform: 'capitalize',
      width: 115,
      '&:hover': {
        backgroundColor: '#8870ff',
        color: 'white',
      },
    },
  },
  footerPage: {
    '& .link-footer': {
      color: '#8870ff',
      fontSize: '1rem',
      fontWeight: 600,
      margin: 0,
      textAlign: 'right',
      displa: 'flex',
      justifyContent: 'flex-end',
      '@media(min-width: 640px)': {
        textAlign: 'center',
      },
      '& a': {
        color: 'inherit',
        textDecoration: 'none',
        borderBottom: '1px solid #8870ff',
      },
    },
  },
}));
