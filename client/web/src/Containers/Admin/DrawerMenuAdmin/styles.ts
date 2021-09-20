import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  (theme) => ({
    DrawerMenuAdmin: {},
    drawer: {
      display: 'flex',
      [theme.breakpoints.up('sm')]: {
        width: 185,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      background: 'none',
      border: 'none',
      borderRadius: "0 40px 40px 0",
      width: 185,
    },
    sideBarLeft: {
      background: '#8870ff',
      borderRadius: "0 40px 40px 0",
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: "30px 20px 15px",
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
   
    flexFx: {
      flex: '1 0 0%',
    },
  }),
  { name: 'DrawerMenu' },
);
