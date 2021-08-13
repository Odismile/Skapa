import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root:{
      '& .people':{
        color: '#8870FF',
        fontSize: 12,
        fontWeight: 700,
      },
      '& .text':{
        fontSize: 10,
      }
    },
    label:{
      top: -18,
      '& span':{
        borderRadius: 'none!important',
        color: '#8870FF',
        backgroundColor: 'transparent',
        fontSize: 10,
      }
    }
  }),
);
