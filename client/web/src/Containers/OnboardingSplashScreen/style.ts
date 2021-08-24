import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  congrat: {
    textAlign: 'center',
    color: '#000000',
    fontStyle: 'italic',
    fontWeight: 600,
  },
  imgSplash: {
    marginTop: 20,
    width: '100%',
    height: 230,
  },
  btnNext: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 20,
    '& button': {
      backgroundColor: '#8870ff',
      borderRadius: 50,
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
