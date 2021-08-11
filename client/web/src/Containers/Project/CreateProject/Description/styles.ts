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
      },
    },
  }),
  { name: "Description" }
);
