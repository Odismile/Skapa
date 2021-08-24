import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  (theme) => ({
    review_bloc: {
      '& .titre': {
        color: '#000000',
        marginBottom: 8,
        marginTop:23,
      },
      "& .btn-favori": {
        display: "none",
      },
      "& .checkbox": {
        display: "none",
      },
    },
  }),
  { name: 'Review' },
);
