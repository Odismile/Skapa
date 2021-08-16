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
		color: '#000000',
        fontSize: 14,
        fontStyle: 'italic',
        fontWeight: "600",
        marginBottom: 0,
      },
      '& div input':{
        border: 'solid 1px #dfdfdf',
        boxShadow: 'inset 0px 1px 3px rgba(0,0,0,0.5)',
        borderRadius: 25,
        boxSizing: "border-box",
        color: '#000',
        fontSize: 12,
        padding: "8px 16px",
        height: 40,
        '&::-webkit-input-placeholder': {
          color: '#979797',
          fontStyle: 'italic',
          opacity: 1,
        },
      },
      '& div:focus':{
        border: 'none',
      },
      '& div':{
        marginTop: 20,
        marginBottom: 10,
        //marginTop: 24,
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
