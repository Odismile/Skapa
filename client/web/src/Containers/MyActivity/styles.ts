import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    box:{
      padding: '0px 20px',
      '&>div':{
        marginBottom: 10,
      }
    }
  }),
);
