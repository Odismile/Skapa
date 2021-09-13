import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    slider_daysLeft_bloc: {
      position: 'relative',
      paddingTop: 10,
      
      "& .text_dayLeft": {
        color: "#8870ff",
        fontSize: 10,
        fontWeight: 700,
        margin: "4px 0 0",
      },
    },
  }),
  { name: "slider_daysLeft" }
);