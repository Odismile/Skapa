import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  (theme) => ({
    UsersAdmin: {
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
      "& .content_bloc": {
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
    },
    flexFx: {
      flex: '1 0 0%',
    },
    dataTable_wrapper: {
      height: "calc(100vh - 200px)",
      width: "100%",
      "& .MuiDataGrid-root": {
        border: "none",
        marginBottom: 0,
      },
      '& .MuiDataGrid-renderingZone': {
        maxHeight: 'calc(100vh - 300px) !important',
        maxWidth: '100%',
        overflow: 'auto',
        transform: 'none !important',
        width: '100% !important',
        //maxHeight: 'none !important',
        "&::-webkit-scrollbar": {
          height: 5,
          width: 5,
          borderRadius: 5,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#dfdfdf",
          height: 5,
          borderRadius: 5,
        },
        "&::-webkit-scrollbar-track": {
          borderRadius: 5,
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
      "& .MuiDataGrid-columnHeader": {
        "&[data-field='Status'], &[data-field='Rating']": {
          "& .MuiDataGrid-columnHeaderTitleContainer": {
            justifyContent: 'center',
            width: '100%',
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            textAlign: 'center',
          }
        },
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
        minWidth: '100% !important',
        width: 'calc(100% - 40px) !important',
        "& .MuiDataGrid-row": {
          maxWidth: "100%",
          //overflow: 'hidden',
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
        "&[data-field='Status'], &[data-field='Rating']": {
          textAlign: 'center',
          position: 'relative',
          color: '#8870ff',
          zIndex: 1,
          "&:empty": {
            "&:before": {
              opacity: '0',
              
            },
          },
          "&:before": {
            background: '#ece8ff',
            borderRadius: 16,
            content: "''",
            display: 'block',
            height: 32,
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'calc(100% - 40px)',
            zIndex: -1,
          },
        },
        "&[data-field='Rating']": {
          "&:before": {
            maxWidth: 70,
          }
        },
      },
      "& .MuiDataGrid-footerContainer": {
        //display: 'none',
        "& p, & div": {
          margin: 0,
        },
        "& button": {
          padding: 0,
        },
      },
    },
  }),
  { name: 'UsersAdmin' },
);
