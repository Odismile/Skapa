import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  (theme) => ({
    
    PlacesAdminPage: {
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
      //background: 'cyan',
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
      "& .places_list": {
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
      "& .editPlaces_content": {
        "@media (min-width: 960px)": {
          flex: '1 0 50%',
          paddingLeft: 30,
        },
        "& .coaches_forms": {
          height: '100%',
          overflow: 'hidden auto',
          paddingRight: 15,
          position: 'relative',
        },
        "& .title_block": {
          color: '#000',
          fontSize: 19,
          fontWeight: 700,
          margin: '0 0 10px',
        },
        "& .item_bloc": {
          maxWidth: '70%',
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
            position: 'absolute',
            top: 0,
            right: 0,
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
        "& .availability_field": {
          marginBottom: 20,
          maxWidth: '100%',
          paddingTop: 10,
          "& .title_itemBlock": {},
          "& .text_infos": {
            color: '#000',
            fontSize: 10,
            marginBottom: 10,
          },
          "& .link_add": {
            color: '#8870FF',
            fontSize: 12,
            fontWeight: 600,
            margin: 0,
            "& a": {
              borderBottom: '1px solid #8870FF',
              color: '#8870FF',
              textDecoration: 'none',
            },
          },
          "& .list_availability": {
            display: 'flex',
            flexWrap: 'wrap',
            "& .list_item": {
              background: '#ece8ff',
              borderRadius: 4,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 20,
              marginRight: 7,
              marginBottom: 5,
              padding: '0 8px',
              minWidth: 70,
              width: 'auto',
              "& .text": {
                fontSize: 10,
                marginBottom: 0,
                
              },
              "& .btn_availability": {
                marginLeft: 10,
                padding: 0,
                "& svg": {
                  fill: '#8870ff;',
                  fontSize: '.5rem',
                },
              },
            },
          },
        },
        "& .presentation_field": {
          marginBottom: 10,
          maxWidth: '100%',
          width: '100%',
          "& .title_itemBlock": {
            marginBottom: 3,
          },
          "& .labeled": {
            color: '#000',
            fontSize: 10, 
            fontWeight: 700,
            marginBottom: 6,
          },
          "& .textarea_input": {
            boxSizing: "border-box",
            boxShadow: 'inset 0px 1px 3px rgba(0,0,0,0.5)',
            border: 'solid 1px #dfdfdf',
            borderRadius: 12,
            color: '#000000',
            display: 'block',
            fontFamily: 'Nunito',
            fontSize: 12,
            fontWeight: 400,
            height: '105px !important',
            padding: "10px 16px",
            resize: 'none',
            width: '100%',
            "&:focus-visible": {
              outline: 'none',
            },
            '&:focus':{
              border: '1px solid #8870FF',
              background: "rgb(242,241,253)",
              boxShadow: "inset 0px 1px 3px rgb(136 112 255 / 50%)",
            },
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
        "& .btn_groups": {
          textAlign: 'right',
          "& .btn_save": {
            borderRadius: 25,
            color: '#fff',
            fontSize: 12,
            fontWeight: 600,
            height: 35,
          }
        }
      },
    },
  }),
  { name: 'Admin' },
);
