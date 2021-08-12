import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => 
({
    textfield:{
      width: '100%',
      margin: '0px 0px 15px 0px',
      "& .Mui-focused":{
        color: '#a1a1a1',
      },
      '& label':{
        fontSize: 19,
        fontStyle: 'italic',
        fontWeight: "600",
        color: '#000000',
      },
      '& div input':{
        color: '#000000',
        fontSize: 14,
        padding: 16,
        border: 'solid 1px #dfdfdf',
        boxShadow: 'inset 0px 1px 3px rgba(0,0,0,0.5)',
        borderRadius: 25,
      },
      '& div:focus':{
        border: 'none',
      },
      '& div':{
        marginTop: 24,
      },
      '& div:hover:before':{
        borderBottom: 'none!important',
      },
      '& div:after':{
        border: 'none',
      },
      '& div:before':{
        border: 'none',
      }
    },
  })
);

export default useStyles;
