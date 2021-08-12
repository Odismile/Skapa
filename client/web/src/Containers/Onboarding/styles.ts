import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    sliderTuto: {
      marginTop: 75,
     "& .swiper-container" : {
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
  }),
  { name: "onboarding" }
);