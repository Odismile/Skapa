import { makeStyles } from '@material-ui/core/styles';

export default makeStyles (
  theme => ({
    "@global": {
      "* .backDrop_menuMobile": {
        backgroundColor: "transparent"
      },
      "* .dropDownSelect": {
        borderRadius: 15,
        "&> ul": {
          borderRadius: 15, 
          paddingBottom: 0,
          paddingTop: 0,
          "& li": {
            color: "#000",
            fontSize: "1rem",
            lineHeight: 1.2,
            minHeight: 22,
            margin: 0,
            paddingBottom: 8,
            paddingTop: 8,
            "&:hover": {
              backgroundColor: "#ece8ff",  
              color: "#8870ff",
            },
          },
          "& .Mui-selected, & .Mui-selected:hover": {
            backgroundColor: "#ece8ff",
            color: "#8870ff",
          },
        }
      },
      "* .flexFX": {
        flex: "1 0 0",
      },
    },
    header_block: {
      background: theme.palette.primary.main,
      borderRadius: "0 0 15px 15px",
      marginBottom: 50,
      padding: "20px",
      position: "relative",
    },
    header_top: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: "0 0 20px",
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
            fill: "#8870ff",
            color: "red",
            borderColor: "#000",
          },
          "&:active, &.active": {
            background : "#fff",
            borderColor: "#fff",
            color: "#000",
            "& svg": {
              fill: "#8870ff",
            },
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
        margin: 0,
        textAlign: "center",
      },
      "& .btn_createProject": {
        background: "#fff",
        borderRadius: 30,
        border: "2px solid  #8870ff",
        boxShadow: "0px -2px 12px 2px rgba(108,89,206,0.43)",
        display: "flex",
        fontWeight: 600,
        fontSize: "1rem",
        height: 50,
        margin: "0 auto -40px",
        maxWidth: 218,
        width: "100%",
        "& svg": {
          fontSize: ".875rem",
          marginRight: 10,
        },
      },
    },
    user_infos_content: {
      maxWidth: 480,
      margin: "0 auto 10px",
      width: "100%",
    },
    user_infos: {
      background: "none",
      borderRadius: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 8,
      "& .user_avatar": {
        borderRadius: 60,
        height: 60,
        margin: 0,
        position: "relative",
        width: 60,
        "& > a": {
          display: "block", 
        },
        "& img": {
          borderRadius: 60,
          display: "block",
          height: "100%",
          objectPosition: "center top",
          objectFit: "cover",
          overflow: "hidden",
          width: "100%",
        },
        "& .labeled-img": {
          borderRadius: 30,
          left: -8, top: -8,
          height: 30,
          position: "absolute",
          width: 30,
          zIndex: 1,
        },
      },
      "& .user_status": {
        paddingLeft: 10,
        "& *" : {
          color: "#fff",
        },
        "& p": {
          fontSize: "1rem",
          fontWeight: 400,
          marginBottom: 4,
        },
        "& .user_balance": {
          background: "#dffff2",
          border: "none",
          borderRadius: 13,
          color: "#5bd3a0",
          display: "inline-block",
          fontSize: 12,
          fontWeight: 700,
          height: 26,
          margin: 0,
          minWidth: 80,
          padding: "5px 10px",
          textAlign: "center",
          whiteSpace: "nowrap",
          "& .unity": {
            color: "inherit",
            fontSize: "inherit",
            fontWeight: "inherit",
            paddingLeft: 3,
          },
        },


      },
      "& .btn_goto": {
        "& svg": {
          fill: "#fff",
          fontSize: "1.65rem",
        },
      },
    },
    drawerMenu: {
      width: 280,
    },
    drawerPaperMenu: {
      background: "#000",
      boxShadow: "6px 0px 9px rgba(55,55,55,0.32)",
      padding: "15px",
      overflow: "hidden",
      width: 280,
      "@media(min-height: 640px)": {
        padding: "20px 20px 30px",
      },
    },
    MenuList: {
      height: "100%",
      "& .btn_burger": {
        color: "#fff",
        height: 20,
        width: 20,
        marginBottom: 15,
        
        "& svg": {
          fill: "#fff",
        },
      },
      "& .list": {
        maxHeight: "calc(100% - 175px)",
        overflow: "hidden auto",
        margin: "15px auto",
        padding: "0 0 0 70px",
        maxWidth: 220,
        "@media(min-height: 640px)": {
          marginBottom: 30,
        },
        "& > li": {
        },
        "& a": {
          color: "#fff",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: 400,
          padding: "4px 0",
          textDecoration: "none",
          width: "100%",
          "@media(min-height: 640px)": {
            padding: "7px 0",
          },
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
        margin: "0 auto 15px",
        maxWidth: 218,
        width: "100%",
        "@media(min-height: 640px)": {
          marginBottom: 30,
        },
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
        borderBottom: "1px solid #fff",
        color: "#fff",
        cursor: "pointer",
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
