import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(  theme => ({
  search:{
    position: 'relative',
    '& .icon':{
      position: 'absolute',
      bottom: 38,
      right: 13,
    }
  },
  content:{
    width: '100%',
    border: 'solid 1px #dfdfdf',
    boxShadow: 'inset 0px 1px 3px rgb(0 0 0 / 50%)',
    padding: 5,
    borderRadius: 6,
    maxHeight: 305,
    overflow: 'auto',
    height: 305,
  },
  skills:{
    fontSize: 12,
    display: 'flex',
    maxWidth: '100%',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    '& .inputGroup': {
      backgroundColor: 'white',
      borderRadius: 20,
      border: '1px solid #8870FF',
      margin: 5,
      display: 'block',
      overflow: 'hidden',
      '& label':{
        color: '#8870FF',
        padding: '8px 10px',
        display: 'inline-block',
      },
      '& input':{
        display: 'none',
      },
      '& input:checked ~ label': {
        backgroundColor: "#ece8ff",
      }
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
