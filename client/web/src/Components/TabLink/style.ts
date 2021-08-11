import { makeStyles } from '@material-ui/core/styles';



export default makeStyles (
  theme => ({
    tabList: {
      height: 15,
      marginBottom: 20,
      marginTop: 20,
      "& .tab_list": {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        "& .tab_link": {
          color: '#000',
          display: "inline-flex",
          fontSize: 14,
          fontWeight: 400,
          padding: "0 8px",
          position: 'relative',
          textDecoration: "none",
          "&:before": {
            background: theme.palette.primary.main,
            content: "''",
            height: 15,
            position: 'absolute',
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            width: 1,
          },
          "&.active": {
            color: theme.palette.primary.main,
            fontWeight: 700,
          },
          "&:last-child": {
            "&:before": {
              display: 'none',
            }
          },
        },
      },
      "& .tab_content": {

      },
    },
  }),
  { name: "TabLink" }
);


