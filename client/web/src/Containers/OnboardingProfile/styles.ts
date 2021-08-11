import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  radio: {
    margin: '8px 0px',
    '& legend': {
      fontSize: 14,
      fontStyle: 'italic',
    },
    '& div>label': {
      marginRight: 12,
      '&>span': {
        fontSize: 14,
      },
    },
    '& .Mui-checked':{
      color: '#8870FF',
    },
    '& div>label>span:last-child':{
      marginBottom: 0,
    },
    '& .custom_radio>label>span>span>div>svg':{
      fill: '#8870FF',

    }
  },
  languages:{
    margin: '8px 0px',
    width: '100%',
    '& legend': {
      fontSize: 14,
      fontStyle: 'italic',
    },
  },
  btnNext:{
    display: 'flex',
    justifyContent: 'center',
    marginTop: 16,
    '& button':{
      backgroundColor: '#8870ff',
      borderRadius: 20,
      color: 'white',
      padding: '6px 24px',
      textTransform: 'capitalize',
      '&:hover':{
        backgroundColor: '#8870ff',
        color: 'white',
      }
    }
  },


}));
