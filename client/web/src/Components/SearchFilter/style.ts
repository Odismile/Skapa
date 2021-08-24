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
        maxWidth: 640,
        transform: "translate(-50%, -50%)",
        borderRadius: 12,
        display: "flex",
        flexDirection:"column",
        margin: "0",
        maxHeight: "calc(100% - 10px)",
        padding: 15,
        width: "calc(100% - 10px)",
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
        padding: "0 14px"
      }
    },
    root: {
      display: 'flex',
      alignItems: 'center',
      boxShadow: "none",
      background: "none",
      "& .input-search": {
        display: "flex",
        flex: 1,
        position: "relative",
        "& .inputSearchField": {
          border: 'solid 1px #dfdfdf',
          borderRadius: 25,
          boxShadow: 'inset 0px 1px 3px rgba(0,0,0,0.5)',
          fontSize: 12,
          height: 40,
          padding: "0 46px 0 16px",
          "&.Mui-focused": {
            background: "rgb(242,241,253)",
            border: '1px solid #8870FF',
            boxShadow: "inset 0px 1px 3px rgb(136 112 255 / 50%)",
          },
          "& input": {
            "&::-webkit-input-placeholder": {
              color: '#979797',
              fontStyle: 'italic',
            },
            "&::-moz-input-placeholder": {
              color: '#979797',
              fontStyle: 'italic',
            },
          },
        },
        "& .search-icon": {
          padding: 0,
          height: 38,
          position: "absolute",
          right: 4,
          top: 1,
          width: 38,
          "& svg": {
            fill: "#8870FF",
          }

        },
        "& input": {
          display: 'block',
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
