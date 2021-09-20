import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  (theme) => ({
    ProjectAdminPage: {
      display: 'flex',
      "& .asideLeftWrapper": {

      },
      "& .menuButton": {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
    },
    drawer: {
      display: 'flex',
      [theme.breakpoints.up('sm')]: {
        width: 185,
        flexShrink: 0,
      },
      "& .sideBarLeft": {
        background: '#8870ff',
        borderRadius: "0 40px 40px 0",
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: "30px 30px 15px",
        "& .logo": {
          margin: '0 0 80px',
          textAlign: 'center',
          "& img": {
            height: 53,
            maxWidth: '100%',
          },
        },
        
        "& .topInnovator": {
          margin: 0,
          textAlign: 'center',
          "& img": {
            height: 'auto',
            maxWidth: '100%',
          },
        },
      },
    },
    flexFx: {
      flex: '1 0 0%',
    },
    drawerPaper: {
      border: 'none',
      width: 185,
    },
    content: {
      flexGrow: 1,
      padding: '1.25rem 1rem',
      "@media (min-width: 960px)": {
        padding: '1.25rem 2rem 2rem 3rem',
      },
      "& .header_admin": {
        
        "& .top_header": {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '0 0 20px',
        },
        "& .title_page": {
          color: '#000',
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: .56,
          lineHeight: 1.25,
          margin: 0,
        },
        "& .filter_list": {
          display: 'flex',
          alignItems: 'center',
          maxWidth: "50%",
          marginBottom: 30,
          "& .input-search": {
            width: 305,
          },
          "& .btn": {
            border: '1px solid #8870ff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 8,
            "& svg": {
              fill: "#8870ff",
              fontSize: "1rem",
            },
            "&:hover": {
              background: "rgba(242,241,253,1)",
            },
          },
        },
      },
      "& .mainContent_admin": {
        
      },
      "& .allProjects_list": {
        "@media (min-width: 960px)": {
          flexBasis: '55%',
          width: '55%',
          paddingRight: '2rem',
        },
        "& .tri_btns": {
          display: 'flex',
          alignItems: 'center',
          marginBottom: 20,
          width: "100%",
          "& h3": {
            color: "#383838",
            fontSize: 14,
            fontWeight: 400,
            marginBottom: 0,
          },

          "& .btn": {
            borderRadius: 16,
            border: '1px solid #8870ff',
            color: "#8870ff",
            fontSize: 12,
            fontWeight: 400,
            textAlign: 'center',
            padding: '0 10px',
            height: 32,
            margin: '0 5px 0 0',
            "&:hover": {
              backgroundColor: '#ece8ff',
            },
            "&:last-child": {
              marginRight: 0,
            },
          },
        },
      },
      "& .title_block": {
        color: '#8870ff',
        fontSize: 14,
        fontWeight: 700,
        marginBottom: 20,
        "& .nbr": {
          background: '#ece8ff',
          borderRadius: 20,
          fontSize: 10,
          fontWeight: 700,
          marginLeft: 10,
          padding: 0,
          "& span": {
            position: 'static',
            transform: 'none',
            padding: 0,
          },
        },
      },
      "& .content_bloc": {
        
        overflow: 'hidden',
        "@media (min-width: 960px)": {
          display: 'flex',
          justifyContent: 'space-between',
          height: 'calc(100vh - 200px)',
        },
      },
      "& .pendingProjects_content": {
        
        
        "@media (min-width: 960px)": {
          flexBasis: '45%',
          padding: '0 0 0 30px',
          width: '45%',
        },
      },
      "& .pendingProjects_list": {
        "@media (min-width: 960px)": {
          height: 'calc(100% - 40px)',
          overflow: 'hidden auto',
          paddingRight: '1rem',
        },
      },
    },
    dataTable_wrapper: {
      height: "calc(100vh - 245px)",
      width: "100%",
      "& .MuiDataGrid-root": {
        border: "none",
        marginBottom: 0,
      },
      '& .MuiDataGrid-renderingZone': {
        maxHeight: 'calc(100vh - 380px) !important',
        maxWidth: 'calc(100% - 20px)',
        overflow: 'hidden auto',
        transform: 'none !important',
        //maxHeight: 'none !important',
        "&::-webkit-scrollbar": {
          width: 5,
          borderRadius: 5,
        },
        "&::-webkit-scrollbar-track": {
          //boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#dfdfdf",
        },
      },
      '& .MuiDataGrid-row': {
          //maxHeight: 'none !important',
      },
      "& .MuiDataGrid-main": {
        //backgroundColor: "darkcyan",
      },
      "& .MuiDataGrid-columnsContainer": {
        border: "none",
      },
      "& .MuiDataGrid-columnHeaderWrapper": {
        padding: '0 20px',
        minWidth: '100% !important',
        width: 'calc(100% - 40px)',
        "& .MuiDataGrid-columnHeaderCheckbox": {

        },
      },
      "& .MuiDataGrid-columnSeparator": {
        display: 'none',
      },
      "& .MuiDataGrid-columnHeaderTitleContainer": {
        // padding: "0 1rem",
      },
      "& .MuiDataGrid-columnHeaderTitle": {
        color: '#000',
        fontSize: 14,
        fontWeight: 600,
        "&:focus": {
          outline: 'none',
        },
      },
      "& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-cell:focus-within": {
        outline: 'none',
      },
      "& .MuiDataGrid-checkboxInput": {
        color: '#8870ff',
      },
      "& .MuiDataGrid-window": {
        background: '#fff',
        borderRadius: 12,
        border:  '1px solid #f4f4f4',
        boxShadow: '0px 2px 4px rgba(0,0,0,0.11)',
        padding: '20px',
        overflowX: 'hidden',
        overflowY: 'hidden !important',
        "@media (min-width: 1024px)": {
        },
      },

      "& .MuiDataGrid-dataContainer": {
        
        "& .MuiDataGrid-row": {
          maxWidth: "calc(100% - 40px)",
          overflow: 'hidden',
          "&:hover": {
            background: "rgb(242,241,253)",
          },
        },
      },
      "& .MuiDataGrid-viewport": {
        minWidth: '100% !important',
        maxWidth: '100% !important',
      },
      "& .MuiDataGrid-cell": {
        borderColor: "#e8e8e8",
        color: '#383838',
        fontSize: 12,
        fontWeight: 400,
        //lineHeight: 'unset !important',
        //maxHeight: 'none !important',
        whiteSpace: 'normal',
        "&:focus": {
          outline: 'none',
        },
      },
      "& .MuiDataGrid-footerContainer": {
        //display: 'none',
        "& p": {
          margin: 0,
        },
        "& button": {
          padding: 0,
        },
      },
    },
    modal_detail_project: {

    },
  }),
  { name: 'Admin' },
);
