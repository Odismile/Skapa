import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(  theme => ({
  search:{
    position: 'relative',
    '& .iconSearch':{
      position: 'absolute',
      top: "50%",
      right: 17,
      transform: "translateY(-14px)",
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
      backgroundColor: '#fff',
      borderRadius: 20,
      display: 'block',
      margin: 2.5,
      overflow: 'hidden',
      '& label':{
        color: '#000',
        border: '1px solid #979797',
        display: 'inline-flex',
        padding: '5px 12px',
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
