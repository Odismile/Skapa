import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  content: {
    marginTop: 16,
    marginBottom: 10,
    boxShadow: '0px 2px 4px #0000001C',
    padding: 10,
    border: '1px solid #F4F4F4',
    borderRadius: 12,
    '& .btnContribute': {
      display: 'flex',
      justifyContent: 'center',
      '& button': {
        backgroundColor: '#8870FF',
        height: 35,
        width: 118,
        color: '#ffffff',
        fontWeight: 600,
        fontSize: 12,
        marginTop: 16,
      },
    },
  },
}));
