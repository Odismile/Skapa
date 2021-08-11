import { makeStyles } from '@material-ui/core/styles';

export default makeStyles (
  theme => ({
    header_block: {
      background: theme.palette.primary.main,
    }
  }),
  { name: "Header" }
);
