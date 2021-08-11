import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    description_bloc: {
      paddingBottom: 30,
      "& .upload_bloc": {
        marginBottom: 20,
        "&  .upload_picture": {
          display: 'none',
        },
        "& .upload_content": {
          background: "#eee",
          borderRadius: 10,
          cursor: "pointer",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 80,
          width: "100%",
          "& svg": {
            fill: theme.palette.primary.main,
            fontSize: "1.25rem",
            marginBottom: 10,
          },
          "& > span": {
            color: "#000",
            fontSize: 10,
            fontWeight: 300,
            fontStyle: "italic",
          },
        },
      },

      "& .item_bloc": {
        maxWidth: 310,
        "& .title_bloc": {
          display: 'flex',
          alignItems: 'center',
          flexWrap: "wrap",
          marginBottom: 10,
          "& h2": {
            color: "#000",
            fontSize: 14,
            fontWeight: 700,
            margin: 0,
            lineHeight: "1.2",
          },
          "& .btn_edit": {
            fontSize: "1rem",
            marginLeft: 2,
            padding: 0,
            "& svg": {
              fill: theme.palette.primary.main,
              fontSize: "1rem",
            }
          },
          "& .subTitle": {
            color: "#979797",
            flexBasis: "100%",
            fontSize: 14,
            fontStyle: "italic",
            margin: "6px 0 0",
            width: "100%",
          },
        },
        "& .field_item": {
          position: 'relative',
          "& > div": {
            margin: "5px 0 0",
          },
          "& label ": {
            color: "#000",
            fontStyle: "normal",
            fontWeight: 700,
            "& + > div" : {
              marginBottom: 0,
            },
          },
          "& input": {
            borderRadius: 35,
            fontSize: 12,
            height: 33,
            padding: "0 20px",
            "&::-webkit-input-placeholder": {
              color: "#979797",
              fontStyle: "italic",
              opacity: 1,
            }
          },
          "& .btn_append": {
            padding: 0,
            position: "absolute",
            right: 0,
            "& svg": {
              fill: theme.palette.primary.main,
            }
          },
        },
        "& .dateField": {
          
        },
        "& .typeProject_item": {
          maxWidth: 107,
        },
        "& .grid_field": {
          display: 'flex',
          alignItems: 'center',
          "& .field_item": {
            marginRight: 10,
            width: 105,
            "& input": {
              padding: "0 15px",
            }
          }
        },
      },
    },
  }),
  { name: "Description" }
);
