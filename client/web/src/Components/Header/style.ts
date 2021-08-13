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
      padding: "20px",
    },
    header_top: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: "0 0 30px",
      "& .logo": {
        height: 45,
        margin: "20px auto 0",
        width: 90,
        "& @media min(375px)": {
          height: 53,
          width: 105,
        },
      },
      "& .btn": {
        "& svg": {
          fill: "#fff",
        },
      },
      "& .menu_wrap": {
        width: 86,
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
            "& path": {
              stroke: "#fff",
            }
          }
        },
      },
    },
    header_content: {
      "& .titlePage": {
        color: "#fff",  
        fontSize: "1rem",
        margin: 0,
        textAlign: "center",
      }
    },
    drawerMenu: {
      width: 280,
    },
    drawerPaperMenu: {
      background: "#000",
      padding: "20px 20px 30px",
      width: 280,
    },
    MenuList: {
      height: "100%",
      "& .btn_burger": {
        color: "#fff",
        height: 20,
        width: 20,
        marginBottom: 30,
        "& svg": {
          fill: "#fff",
        },
      },
      "& .list": {
        maxHeight: "calc(100% - 165px)",
        overflow: "hidden auto",
        margin: "15px auto 30px",
        padding: "0",
        maxWidth: 95,
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
        borderRadius: 30,
        border: "2px solid  #8870ff",
        boxShadow: "0px -2px 12px 2px rgba(108,89,206,0.43)",
        display: "flex",
        fontWeight: 600,
        fontSize: "1rem",
        height: 50,
        margin: "0 auto 30px",
        maxWidth: 218,
        width: "100%",
        "& svg": {
          fontSize: ".875rem",
          marginRight: 10,
        },
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
