import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    modal :{
      "& .modal-content": {
        background : "#ffffff",
        height: "80%",
        borderRadius: 12,
        overflow: "hidden",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: 14,
        display: "flex",
        flexDirection: "column",
        minWidth: 300,
        "& .modal-top": {
          display: "flex",
          justifyContent: "space-between",
          height: 50,
          flex: "1 0",
          alignItems: "center",
          padding: "0 0 15px 0",
          borderBottom: "1px solid #dfdfdf",
          "& h2": {
            fontSize: 16,
            color: "#000000",
            marginBottom: 0,
            fontWeight: 700,
          },
          "& .close-modal": {
            padding: 0,
          },
          "& svg": {
            width: 15,
            height: 15,
          }
        },
        "& .modal-body": {
          height: "calc(100% - 50px)",
          flex: "1 1 100%",
          overflow: "hidden auto",
          padding: 14,
        }
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
