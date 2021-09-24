import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  (theme) => ({
    CoachesAdminPage: {
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
      "& .title_block": {
        color: '#000',
        fontSize: 14,
        fontWeight: 700,
        marginBottom: 10,
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
        width: '100%',
        "@media (min-width: 960px)": {
          display: 'flex',
          justifyContent: 'space-between',
          height: 'calc(100vh - 200px)',
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
      "& .coaches_list": {
        height: '100%',
        overflow: 'hidden auto',
        paddingRight: 15,
        width: '100%',
        "@media (min-width: 960px)": {
          flex: '1 0 50%',
          paddingRight: 30,
        },
        "& .coaches_group": {
          "& .title_group": {
            fontSize: 14,
            fontWeight: 700,
            margin: 10
          },
        },
      },
      "& .editCoaches_content": {
        "@media (min-width: 960px)": {
          flex: '1 0 50%',
          paddingLeft: 30,
        },
        "& .coaches_forms": {
          height: '100%',
          overflow: 'hidden auto',
          paddingRight: 15,
        },
        "& .title_block": {
          color: '#000',
          fontSize: 19,
          fontWeight: 700,
          margin: 0,
        },
        "& .item_bloc": {
          "& .title_itemBlock": {
            color: '#000',
            fontSize: 12,
            fontWeight: 700,
            lineHeight: 1.4,
          },
          "& .textField_content": {
            marginBottom: 10,
            "& > div": {
              marginBottom: 0,
              marginTop: 16,
            },
            "& > label": {
              color: '#000',
              fontSize: 10,
              fontStyle: 'normal',
              fontWeight: 700,
              margin: 0,
            },
            "& input": {
              fontSize: 10,
              height: 34,
            },
          },
          "& .upload_bloc": {
            background: '#eee',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 80,
            width: 80,
            "& .upload_picture": {
              display: 'none',
            },
            "& .upload_content": {
              textAlign: 'center',
              "& svg": {
                fill: '#8870ff',
                fontSize: '1.25rem',
              },
              '& span': {
                display: 'block',
                fontSize: 10,
                fontStyle: 'italic',
                fontWeight: 300,
              },
            },
            "& .upload_image": {
            },
          },
        },
        "& .grid_field": {
          display : 'flex',
          flexDirection: 'row',
        },
        "& .level_field": {
          width: 90,
        },
        "& .company_field": {
          marginLeft: 10,
          width: 175,
        },
      },
    },
   
  }),
  { name: 'Admin' },
);
