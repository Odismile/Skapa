import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  content: {},
  tags: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    gap: 6,
    '&>div': {
      backgroundColor: '#ECE8FF',
      color: '#8870FF',
      height: 20,
      fontSize: 10,
    },
  },
  root: {
    marginTop: 15,
    boxShadow: '0px 2px 4px #0000001C',
    border: '1px solid #F4F4F4',
    borderRadius: 12,
    padding: 8,
    backgroundColor: 'white',
    '& .title': {
      color: '#000000',
      marginBottom: 5,
    },
    '& .pitch, .presentation, .tags': {
      marginTop: 20,
    },
    '& .tags': {
      '& div:first-child': {
        padding: '0px 7px',
      },
    },
    '& .divider': {
      marginTop: 23,
      marginBottom: 20,
      background: "#eeeeee"
    },
    '& div.btn': {
      marginTop: 20,
      display: 'flex',
      justifyContent: 'center',
      '& .btn-contibute': {
        color: 'white',
        backgroundColor: '#8870FF',
        fontWeight: 600,
        fontSize: 12,
        height: 35,
      },
    },
  },
}));
