import { makeStyles } from '@material-ui/core/styles';

export default makeStyles (
  theme => ({
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
    drawerFilter: {
      width: 250,
      
    },
    drawerPaperFilter: {

    },
    filterList: {},
  }),
  { name: "Header" }
);
