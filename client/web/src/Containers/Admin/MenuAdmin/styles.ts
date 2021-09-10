import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  (theme) => ({
    MenuAdminList: {
      "& .list": {
        padding: 0,
        "& li": {
          padding: 0,
        },
      },
      "& .nav_link": {
        color: "#fff",
        fontSize: "1rem",
        fontWeight: 700,
      },
    },
  }),
  { name: 'MenuListAdmin' },
);
