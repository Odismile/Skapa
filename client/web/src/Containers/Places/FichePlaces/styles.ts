import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    boxShadow: '0px 2px 4px #0000001C',
    border: '1px solid #F4F4F4',
    borderRadius: 12,
    padding: 8,
    '& .title': {
      color: '#000000',
      marginBottom: 8,
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
    '& .list-picture': {
      display: "flex",
      justifyContent: "space-between",
      alignItems:  "center",
      "& figure": {
        width: "30%",
        height: "76px",
        overflow: "hidden",
        margin: 0,
        borderRadius: 5,
        "& img": {
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }
      }
    },
    "& .equipement": {
      "& .equipement-item": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: 12,
        color: "#000",
        "& svg": {
          width: 17,
        }
      }
    },
    '& .link': {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      "& a": {
        borderBottom: "1px solid #8870ff",
      }
    },
    '& .skills':{
        marginBottom: 20,
    },
  },
}));
