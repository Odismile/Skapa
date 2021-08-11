import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    "@global": {
      "*, *:before, *:after": {
        boxSizing: 'border-box',
      },
    },
    mainPage:  {
      height: "100%",
      maxWidth: "40rem",
      marginLeft: 'auto',
      marginRight: 'auto',
      maxHeight: '42.5rem',
      padding: '2.5rem 1.875rem 1.875rem',
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      width: "100%",
      zIndex: 0,
      "& .wrapPage": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
      },
    },
    main_header: {
      "& .logo": {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: 0,
        "& img": {
          maxWidth: "100%",
          width: 105,
        },
      },
    },
    mainContainer: {
      "& .onboard-profile-content": {
        display: "flex",
        flexDirection: "column",
        minHeight: 371,
        overflowY: "auto",
        justifyContent: "space-between",
      }
    },
    btnNext: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 16,
      '& button': {
        backgroundColor: '#8870ff',
        borderRadius: 20,
        color: 'white',
        padding: '6px 24px',
        textTransform: 'capitalize',
        '&:hover': {
          backgroundColor: '#8870ff',
          color: 'white',
        },
      },
    },
    footerPage: {
      "& .link-footer": {
        color: '#8870ff',
        fontSize: '1rem',
        fontWeight: 600,
        margin: 0,
        textAlign: "right",
        displa: "flex",
        justifyContent: "flex-end",
        "@media(min-width: 640px)": {
          textAlign: 'center',
        },
        '& a': {
          color: 'inherit',
          textDecoration: "none",
          borderBottom: "1px solid #8870ff",
        },
      }
    },
  }),
  { name: "onboarding" }
);
