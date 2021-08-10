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

    },
    sliderTuto: {
      marginTop: 75,
     "& .tuto_slider" : {
        display: "flex",
        flexDirection : "column",
        "& .swiper-pagination" : {
          position: "relative",
          order: "2",
          marginTop: 30,
          "& .swiper-pagination-bullet" : {
            width: 15,
            height: 15,
            background: "#ECE8FF",
            opacity: "1",
            "&.swiper-pagination-bullet-active" : {
              background: "#8870FF",
            }
          }
        },
        "& .tuto_img" : {
          margin: 0,
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 216,
        },
        "& .tuto_text": {
          textAlign: "center",
          maxWidth: 240,
          margin: "60px auto 0 auto",
          fontSize: 22,
          maxHeight: 95,
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 4,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
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
