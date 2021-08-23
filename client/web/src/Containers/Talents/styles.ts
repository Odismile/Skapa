import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    box:{
      marginTop:10,
    },
    contentTop:{
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: 20,
      marginTop: 20,
    },
    contentBottom:{
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: 10,
      marginTop: 4,
    }
  }),
);
