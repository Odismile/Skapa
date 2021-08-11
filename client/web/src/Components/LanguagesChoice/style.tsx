import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  boxLang:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '8px 0px',
    width: '100%',
    '& .label':{
      fontSize: 14,
      width: '20%',
      marginBottom: 0,
    },
    '& .choice':{
      display: 'flex',
      width: '80%',
      justifyContent: 'flex-end',
      '&>div':{
        padding: '4px 12px',
        borderRadius: 20,
        border: '1px solid #8870FF',
        color: '#8870FF',
        margin: '0px 2px',
        cursor: 'pointer',
      }
    }
  }
}));

export default useStyles;
