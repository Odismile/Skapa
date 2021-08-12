import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(  theme => ({
  onBoard:{
    minHeight: 371,
    overflowY: "auto",
    "& p": {
      fontSize: 14,
      textAlign: "center",
      fontStyle: "italic",
      fontWeight: "600",
    }
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
}));
