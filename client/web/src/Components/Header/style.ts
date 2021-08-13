import { makeStyles } from '@material-ui/core/styles';

export default makeStyles (
  theme => ({
    "@global": {
      "* .backDrop_menuMobile": {
        backgroundColor: "transparent"
      },
    },
    header_block: {
      background: theme.palette.primary.main,
      borderRadius: "0 0 15px 15px",
    },
    header_top: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: 20,
      "& .logo": {
        height: 53,
        margin: "20px 30px 0 auto",
        width: 105,
      },
      "& .btn": {
        "& svg": {
          fill: "#fff",
        },
      },
      "& .btn_burger": {
        marginLeft: -12,
      },
      "& .notif_list": {
        "& .btn": {
          border: "1px solid #fff",
          height: 40,
          width: 40,
          marginRight: 6,
          "&:focus, &:hover": {
            background : "#000",
            borderColor: "#000",
          },
          "&:last-child": {
            marginRight: 0,
          },
          "& svg": {
            fontSize: "1.25rem",
          }
        },
      },
    },
    header_content: {
      "& .titlePage": {
        color: "#fff",
        fontSize: "1rem",
        textAlign: "center",
      }
    },
    drawerMenu: {
      width: 250,
      "@media(min-width: 640px)": {
        width: 300,
      },
    },
    drawerPaperMenu: {
      background: "#383838",
      padding: "20px 20px 30px",
      width: 250,
    },
    MenuList: {
      height: "100%",
      "& .btn_burger": {
        color: "#fff",
        height: 20,
        width: 20,
        "& svg": {
          fill: "#fff",
        },
      },
      "& .list": {
        maxHeight: "calc(100% - 165px)",
        overflow: "hidden auto",
        margin: "15px -20px 15px 0",
        padding: "0 20px 0 0",
        "& > li": {
        },
        "& a": {
          color: "#fff",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: 400,
          padding: "7px 0",
          textDecoration: "none",
          width: "100%",
          "&:hover": {
            textDecoration: "none",
          }
        },
      },
      "& .btn_createProject": {
        borderRadius: 10,
        display: "flex",
        height: 60,
        margin: "0 auto 30px",
        maxWidth: 176,
        width: "100%",
      },
      "& .disconnect_wrap": {
        margin: 0,
        textAlign: "center",
        width: "100%",
        
      },
      "& .disconnect_link": {
        color: "#fff",
        borderBottom: "1px solid #fff",
        display: 'inline-block',
        fontSize: "1rem",
        fontStyle: "italic",
        fontWeight: 400,
        
        paddingBottom: 5,
        textDecoration: "none",
      },
      "& .MuiBackdrop-root": {
        background: "green",
      },
    },
    filterList: {

    },
    backDropMenu: {

    }
  }),
  { name: "Header" }
);
