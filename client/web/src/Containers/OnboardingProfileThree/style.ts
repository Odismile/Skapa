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
    boxShadow: 'inset 0px 1px 3px rgba(0,0,0,0.5)',
    borderRadius: 12,
    height: 305,
    maxHeight: 305,
    overflow: 'hidden auto',
    padding: 10,
  },
  skills:{
    fontSize: 12,
    display: 'flex',
    flexWrap: 'wrap',
    margin: -2.5,
    maxWidth: '100%',
    '& .inputGroup': {
      backgroundColor: '#fff',
      borderRadius: 0,
      display: 'block',
      margin: 2.5,
      overflow: 'hidden',
      '& label':{
        borderRadius: 20,
        color: '#000',
        border: '1px solid #979797',
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: 12,
        height: 30,
        lineHeight: '100%',
        padding: '5px 12px',
        textAlign: 'center',
        transition: 'all .15s ease-in-out',
      },
      '& input':{
        display: 'none',
      },
      '& input:checked ~ label': {
        backgroundColor: "#ece8ff",
        borderColor: '#b9b3ff',
              color: '#8870FF',
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
