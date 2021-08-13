import { Box } from '@material-ui/core';
import Place from '../../Components/Place/Place';
import RadioExtInt from '../../Components/RadioExtInt/RadioExtInt';
import SearchFilter from '../../Components/SearchFilter/SearchFilter';
import useStyles from './styles';

const Places = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.content}>
        <RadioExtInt />
      </Box>
      <SearchFilter />
      <Box className={classes.box}>
        <Place />
      </Box>
      <Box className={classes.box}>
        <Place />
      </Box>
    </>
  );
};

export default Places;
