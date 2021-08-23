import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    projectPage: {
      width: "100%",
    },
    content: {
      marginTop: 16,
      marginBottom: 10,
      boxShadow: '0px 2px 4px #0000001C',
      padding: 10,
      border: '1px solid #F4F4F4',
      borderRadius: 12,
      '& .btnContribute': {
        display: 'flex',
        justifyContent: 'center',
        '& button': {
          backgroundColor: '#8870FF',
          height: 35,
          width: 118,
          color: '#ffffff',
          fontWeight: 600,
          fontSize: 12,
          marginTop: 16,
        },
      },
    },
    // drawer contribute
    drawerContribute: {
      maxHeight: "75%",
      width: "100%",
    },
    drawerPaperContribute: {
      background: "#fff",
      borderRadius: "12px 12px 0 0",
      border: "1px solid #f4f4f4",
      boxShadow: "0px 2px 4px rgba(0,0,0,0.11)",
      maxHeight: "75%",
      padding: "35px 30px 30px",
    },
    contribute_drawerContent: {
      
      position: "relative",
      /*
      "& .btn_handleDrawer": {}
      */
      "& .btn_handleDrawer": {
        background: "#e5e5e5",
        borderRadius: 8,
        height: 8,
        position: "absolute",
        left: "50%",
        top: -25, 
        transform: "translateX(-50%)",
        width: 110,
      },
      "& .header_content": {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 20,
        "& .title_text": {
          color: "#383838",
          fontSize: "1rem",
          fontWeight: 700,
          lineHeight: 1.4,
          margin: "0 10px 0 0",
        },
        "& .btn_done": {
          borderRadius: 33,
          fontSize: 12,
          fontWeight: 400,
          height: 33,
          width: 83,
        },
      },
      "& .body_content": {
        "& .contribute_media": {
          borderRadius: 10,
          height: 75,
          marginBottom: 10,
          width: "100%",
          position: "relative",
          "& .category": {
            backgroundColor: '#e3ddff',
            borderRadius: 13,
            color: '#9a5cff',
            display: "flex",
            alignItems: "center",
            height: 20,
            fontSize: 10,
            fontWeight: 400,
            padding: '0 10px',
            position: 'absolute',
            top: 8,
            left: 8,
            textTransform: 'uppercase',
            zIndex: 1,
          },
          "& .btn-favori": {
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 1,
            padding: 0,
            '&:focus, &:hover': {
              '& svg': {
                '& path': {
                  fill: '#e30057',
                  d: "path('M19.4,1.8c-1-1.1-2.4-1.8-3.9-1.8s-2.9,0.6-3.9,1.8l-1.1,1.2L9.4,1.8c-2.2-2.4-5.7-2.4-7.8,0 c-2.2,2.4-2.2,6.2,0,8.5l1.1,1.2l7.8,8.5l7.8-8.5l1.1-1.2C20.4,9.2,21,7.6,21,6S20.4,2.9,19.4,1.8z')",
                },
              }
            },
            "& svg": {
              width: 20,
              height: 21,
              "& path": {
                fill: "#fff"
              }
            }
          }
        },
        "& .contribute_picture": {
          backgroundColor: "#ece8ff",
          height: "inherit",
          width: "100%",
        },
        "& .subtitle_text, & .text": {
          color: "#000",
          fontWeight: 400,
          marginBottom: 12,
          textAlign: "center",
        },
        "& .subtitle_text": {
          fontSize: 14,
          fontWeight: 700,
        },
        "& .text": {
          fontSize: 12,
        },
        "& .text_status": {
          fontSize: 9,
          display: "flex",
          alignItems: "baseline",
          justifyContent: "center",
          marginBottom: 10,
          fontStyle: "italic",
          color: "#000",
          "& .amount_value": {
            backgroundColor: "#dffff2",
            borderRadius: 22,
            color: "#5bd3a0",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 10,
            minHeight: 16,
            lineHeight: "100%",
            margin: "0 4px",
            minWidth: 60,
            padding: "4px 10px",
          },
        },
        "& .amount_item": {
          borderRadius: 22,
          height: 42,
          maxWidth: 155,
          margin: "0 auto 10px",
          "& div": {
            height: "inherit",
            margin: 0,
            "& > div": {
              margin: 0,
            },
          },
          "& input": {
            color: "#979797",
            fontSize: 12,
            fontWeight: 400,
            textAlign: "center",
          }
        },
        "& .list_relativeuser": {
          padding: "16px 32px 20px",
          "& li": {
            display: "flex",
            alignItems: "center",
            margin: "0 0 10px",
            padding: 0,
            "&:last-child": {
              marginBottom: 0,
            }
          },
          "& .user_avatar": {
            background: "#e2deff",
            borderRadius: 10,
            height: 40,
            margin: "0 10px 0 0",
            width: 40,
            minWidth: 40,
            overflow: "hidden",
            "& img": {
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              width: "100%",
            },
          },
          "& .user_infos": {
            textAlign: "left",
            "& p": {
              margin: 0,
              fontSize: 9,
              fontWeight: 400,
              color: "#000",
              fontStyle: "italic",
              "& .price": {
                fontStyle : "normal",
              }
            },
          },
        },
        "& .btn_contribute": {
          borderRadius: 18,
          display: "flex",
          alignItem: "center",
          fontSize: 12,
          fontWeight: 400,
          height: 33,
          margin: "0 auto",
          width: 118,
        }
      },
    },
  }),
  { name: "Project" }
);
