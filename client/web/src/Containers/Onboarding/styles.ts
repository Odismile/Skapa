import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    root: {
      
    },
    mainPage:  {
      height: "100%",
      position: "absolute",
      width: "100%",
      zIndex: 0,
      "& .wrapPage": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
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
        },
        "& .tuto_text": {
          textAlign: "center",
          maxWidth: 240,
          margin: "60px auto 0 auto",
          fontSize: 22
        },
       },
      },
    footerPage: {
      
    },
  }),
  { name: "onboarding" }
);
