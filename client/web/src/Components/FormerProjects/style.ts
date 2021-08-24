import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    marginRight: -10,
    "@media (min-width: 768px)": {
      marginRight: 0,
    },
    '& .box': {
      //width: 110,
      height: 95,
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 2px 4px #0000001C',
      border: '1px solid #F4F4F4',
      borderRadius: 12,
      position: 'relative',
      
    },
    '& .container': {
      height: 105,
    },
    '& .badge': {
      display: "flex",
      justifyContent: 'flex-end',
            height: "100%",
      '& .btn_badge': {
        backgroundColor: '#ECE8FF',
        color: '#8870FF',
        height: 20,
        borderRadius: 13,
        fontSize: 10,
        padding: '0px 10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        alignSelf: "flex-end",
      },
    },
  },
}));
