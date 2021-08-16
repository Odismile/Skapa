import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  content: {
    maxHeight: 330,
    height: 330,
    overflow: 'auto',
    '& .choice': {
      display: 'flex',
      maxWidth: '375px',
      flexWrap: 'wrap',
      height: '100%',
      margin: 'auto',
      justifyContent: 'center',
      gap: 5,
    },
    '& .inputGroup': {
      maxWidth: 132,
      width: 132,
      height: 100,
      overflow: "hidden",
      position: 'relative',
      '& label': {
        color: '#8870FF',
        borderRadius: 12,
        width: '100%',
        border: 'solid 1px #8870ff',
        display: 'flex',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        fontWeight: 700,
        overflow: "hidden",
      },
      '& input': {
        display: 'none',
      },
      '& input:checked ~ label': {
        backgroundColor: '#ece8ff',
        border: 'solid 2px #8870ff',
      },
      '& .bgIcon':{
          fill: "#8870ff",
          position: 'absolute',
          bottom: -2,
          right: "-22.5%",
          opacity: '0.08',
          height: 98,
          width: 98,
          "& svg": {
            
          }
      }
    },
  },
  btnNext: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 16,
    '& button': {
      backgroundColor: '#8870ff',
      borderRadius: 258,
      color: 'white',
      padding: '6px 24px',
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: '#8870ff',
        color: 'white',
      },
    },
  },
  bloc:{
    margin: 'auto',
    '& .title':{
      textAlign: 'center',
    }
  }
}));
