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
      "& .tuto_img" : {
        margin: 0,
        textAlign: "center",
      },
      "& .tuto_text": {
        textAlign: "center",
        
      },
     },
    },
    footerPage: {
      
    },
  }),
  { name: "onboarding" }
);
