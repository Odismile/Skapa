import { makeStyles } from '@material-ui/core/styles';
import { findLastIndex } from 'lodash';

export default makeStyles(
  theme => ({
    modal :{
      "& .modal-content": {
        background: "#ffffff",
        position: "absolute",
        top: "50%",
        left: "50%",
        minWidth: "300px",
        transform: "translate(-50%, -50%)",
        borderRadius: 12,
        padding: 14,
        display: "flex",
        flexDirection:"column",
        maxHeight: "80%",
        "&:focus-visible": {
          outline: "none"
        }  
      },
      "& .modal-top": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 5,
        borderBottom: "1px solid #dfdfdf",
        height: 50,
        flex: "1 0",
      },
      "& .modal-title": {
        fontSize: 18,
        color: "#000000",
        fontWeight: "700",
        marginBottom: 0,
        marginTop: 0,  
      },
      "& .btn-close": {
        padding: 0,
        "& svg": {
          width: 15,
          height: 15,
        }
      },
      "& .modal-body": {
        height: "calc(100% - 50px)",
        flex: "1 1 100%",
        marginTop: 8,
        overflow: "hidden auto",
        padding: "0 0"
      }
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
        "&:focus": {
          border: "1px solid #8870ff",
        },
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
