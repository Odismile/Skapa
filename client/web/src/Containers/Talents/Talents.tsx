import { Box } from '@material-ui/core';
import CardTalents from '../../Components/CardTalents/CardTalents';
import RadioExtInt from '../../Components/RadioExtInt/RadioExtInt';
import SearchFilter from '../../Components/SearchFilter/SearchFilter';
import useStyles from './styles';

const Talents = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.content}>
        <RadioExtInt/>
      </Box>
      <SearchFilter />
      <Box className={classes.box}>
        <CardTalents />
      </Box>
      <Box className={classes.box}>
        <CardTalents />
      </Box>
      <Box className={classes.box}>
        <CardTalents />
      </Box>
    </>
  );
};

export default Talents;
