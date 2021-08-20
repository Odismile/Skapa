import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    box:{
      padding: '0px 20px',
      '&>div':{
        marginBottom: 10,
      }
    },
    mainContainer: {
      padding: '0px 22px',
      '& .empty-wishlist':{
        display: 'flex',
        justifyContent: 'center',
        fontSize: 14,
      }
    },
    tabSelected:{
      color: '#8870FF!important',
      textTransform: 'capitalize',
      fontWeight: 700,
      '& .number':{
        backgroundColor: '#ECE8FF!important',
      }
    },
    label:{
      color: 'black',
      textTransform: 'capitalize',
    },
    indicator:{
      display: 'none',
    },
    tab:{
      padding: 0,
      minHeight: 'unset',
    },
    tabs:{
      minHeight: 'unset',
      '& div>div>button:nth-child(2)':{
        borderRight: '1px solid #8870FF',
        borderLeft: '1px solid #8870FF',
      }
    }
  }),
);
