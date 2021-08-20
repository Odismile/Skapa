import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    card:{
      marginBottom: 10,
      padding: 11,
      borderRadius: 12,
      border: 'solid 1px #f4f4f4',
      background: '#ffffff',
      boxShadow: '0px 2px 4px rgba(0,0,0,0.11)',
      '& .foot':{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 16,
        '& .bnt-contribute':{
          color: 'white',
          width: 118,
          height: 35,
          borderRadius: 17,
          backgroundColor: '#8870ff',
          fontSize: 12,
          fontWeight: 600,
        }
      },
    }
  }),
);
