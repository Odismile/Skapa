import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  (theme) => ({
    root: {
      width: '100%',
    },
    button: {
      borderRadius: 18,
      width: 120,
      padding: 10,
      height: 35,
    },
    completed: {
      display: 'inline-block',
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    customStepper: {
      padding: 0,
      justifyContent: 'center',
      alignItems: 'unset',
      marginTop: 20,
      marginBottom: 20,
      backgroundColor: 'transparent',
    },
    stepButton: {
      padding: 10,
      margin: '-10px -14px',
    },
    stepIcon: {
      display: 'none',
    },
    stepText: {
      color: 'black',
      marginBottom: 0,
      fontSize: 14,
    },
    stepActive: {
      color: '#8870FF!important',
    },
    connect: {
      borderRight: '1px solid #8870FF',
      width: 1,
      height: 20,
    },
    Btn: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      marginTop: 28,
      '& .link':{
        color: '#8870FF',
        fontSize: 14,
        marginTop: 20,
        textDecoration: 'none',
        borderBottom: "1px solid #8870ff",
      }
    },
  }),
  { name: 'TabLink' },
);
