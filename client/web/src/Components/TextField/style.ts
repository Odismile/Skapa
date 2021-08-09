import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => 
({
    textfield:{
      width: '100%',
      margin: '8px 0px',
      '& .Mui-focused':{
        color: '#a1a1a1',
      },
      '& label':{
        color: '#a1a1a1',
        fontStyle: 'italic',
      },
      '& div input':{
        border: '1px solid #a1a1a1',
        color: '#000000',
        fontSize: 14,
        padding: 8,
      },
      '& div:focus':{
        border: 'none',
      },
      '& div':{
        marginTop: 24,
      },
      '& div:before':{
        border: 'none',
      },
      '& div:after':{
        border: 'none',
      }
    },
  })
);

export default useStyles;
