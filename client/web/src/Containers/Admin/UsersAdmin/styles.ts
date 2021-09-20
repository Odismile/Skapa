import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  (theme) => ({
    MenuAdminList: {
      "& .list": {
        padding: 0,
        "& li": {
          marginBottom: 10,
          padding: 0,
          "&:last-child ": {
            marginBottom: 0,
          },
        },
      },
      "& .nav_link": {
        color: "#fff",
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        fontSize: "1rem",
        fontWeight: 700,
        textDecoration: 'none',
        "&:hover, &:focus, &:active, &.active": {
          textDecoration: 'none',
          "& .icon": {
            backgroundColor: "#fff",
            "& svg": {
              fill: '#8870ff',
            },  
          },
        },
        "& .icon": {
          backgroundColor: '#8870ff',
          borderRadius: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 40,
          marginRight: 10,
          transtion: 'all 200ms ease',
          width: 40,
          "& svg": {
            //fill: '#8870ff',
            fontSize: '1.25rem',
          }
        },
      },
    },
  }),
  { name: 'MenuListAdmin' },
);
