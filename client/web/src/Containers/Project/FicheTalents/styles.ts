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
    padding: "8px 10px 26px",
    backgroundColor: 'white',
    '& .title': {
      color: '#000000',
      marginBottom: 5,
    },
    '& .boxBtn': {
      display: 'flex',
      justifyContent: 'center',
      margin: '20px 0px',
      '& .btnAdd': {
        backgroundColor: '#8870FF',
        height: 35,
        width: 118,
        color: 'white',
        fontSize: 12,
        fontWeight: 600,
      },
    },
    '& .profile': {
      '& >div:first-child': {
        border: 'none',
        boxShadow: 'none',
      },
    },
    '& .textSuggest': {
      textAlign: 'center',
      fontSize: 14,
      marginTop: 20,
      color: '#000000',
      fontStyle: 'italic',
    },
    '& .bio': {
      marginBottom: 10,
      '& .link': {
        display: 'none',
      },
    },
    '& .skills, & .bio': {
      marginBottom: 20,
    },
    "& .former-project": {
      marginBottom: 10,
    },
    "& .pitch": {
      "& h6": {
        marginBottom: 0,
      },
    },
  },
}));
