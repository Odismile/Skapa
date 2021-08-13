import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(
  (theme) => ({
    review_bloc: {
      '& .titre': {
        color: '#000000',
        marginBottom: 8,
        marginTop:23,
      },
    },
  }),
  { name: 'Review' },
);
