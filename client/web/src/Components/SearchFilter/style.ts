import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    "@global" :{
      "#simple-popper" :{
        width: '100%',
        padding: "0px 20px",
        background: "#ffffff",
        top: "14px!important",
        maxHeight: 415,
        overflowY: 'auto',
      },
    },
    root: {
      display: 'flex',
      alignItems: 'center',
      boxShadow: "none",
      background: "none",
      "& .input-search": {
        fontSize: 14,
        padding: "10px 16px",
        border: 'solid 1px #dfdfdf',
        boxShadow: 'inset 0px 1px 3px rgba(0,0,0,0.5)',
        borderRadius: 25,
        display: "flex",
        flex: 1,
        "& .search-icon": {
          padding: 0,
        }
      },
      "& .filter-icon": {
        border: "1px solid #8870ff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 8,
        padding: 9,
      }
    },
    input: {
      flex: 1,
      marginBottom: 0,
      padding: 0,
      "& input": {
        padding: 0,
        "&::placeholder": {
          fontStyle: "italic",
          fontSize: 12
        }
      },
      
    },
    iconButton: {
      padding: "0px 0px 0px 8px",
    },
    teamBloc: {
    },
  }),
  { name: "SearchFilter" }
);
