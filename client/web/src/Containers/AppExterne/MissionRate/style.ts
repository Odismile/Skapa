import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  theme => ({
    rateList: {
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      margin: '0 0 6px',
      padding: 0,
      "& label": {
        fontSize: 10,
        fontWeight: 700,
        lineHeight: 1.25,
        margin: "0 8px 0 0",
      },
      "& > span": {
        "& svg": {
          fontSize: '1.25rem',
        },
      },
     "& span": {
      "& span": {
        "& span": {
          color: "#ece8ff",
        },
      },
     },
    },
  }),
  { name: "rateList" }
);