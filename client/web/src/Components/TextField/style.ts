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
        color: '#000000',
        fontSize: 14,
        padding: 8,
        border: 'solid 1px #dfdfdf',
        boxShadow: 'inset 0px 1px 3px rgba(0,0,0,0.5)',
        borderRadius: 20,
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
