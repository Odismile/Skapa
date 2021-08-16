import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  mainContainer: {
    padding: '0px 20px',
    width: '100%',
    top:67,
    position: 'absolute',
    zIndex: 10,
    '& .linkBack':{
      color: 'white',
      fontSize: 16,
      fontStyle: 'italic',
      paddingBottom: 1,
      borderBottom: '1px solid white',
    }
  },
}));
