import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  textfield: {
    width: '100%',
    margin: '0px 0px 15px 0px',
    '& .Mui-focused': {
      color: '#000000',
    },
    '& label': {
      color: '#000000',
      fontSize: 14,
      fontStyle: 'italic',
      fontWeight: '600',
      marginBottom: 0,
      transform: 'translate(0, 1.5px) scale(1)',
    },
    '& div input': {
      color: '#000000',
      fontSize: 14,
      padding: 16,
      border: 'solid 1px #dfdfdf',
      boxShadow: 'inset 0px 1px 3px rgba(0,0,0,0.5)',
      borderRadius: 25,
      '&:focus':{
        border: '1px solid #8870FF',
      }
    },
    '& div:focus': {
      border: 'none',
    },
    '& div': {
      marginTop: 20,
      marginBottom: 10,
      //marginTop: 24,
    },
    '& div:hover:before': {
      borderBottom: 'none!important',
    },
    '& div:after': {
      border: 'none',
    },
    '& div:before': {
      border: 'none',
    },
  },
}));

export default useStyles;
