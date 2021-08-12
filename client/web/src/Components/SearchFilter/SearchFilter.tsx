import { Box, IconButton, InputBase, Paper } from "@material-ui/core";
import useStyles from './style';
import Filter from '../../Components/Icons/Filter/Filter';
import Search from '../../Components/Icons/Search/Search';



const SearchFilter = () => {
  const classes = useStyles();

  return (
    <Box className="search-bloc">
      <Paper component="form" className={classes.root}>
        <Box className="input-search">
          <InputBase
            className={classes.input}
            placeholder="Look for projects by title, type, creator.."
            inputProps={{ 'aria-label': 'Look for projects by title, type, creator..' }}
          />
          <IconButton type="submit" className="search-icon" aria-label="search">
            <Search />
          </IconButton>
        </Box>
        <IconButton color="primary" className="filter-icon" aria-label="directions">
          <Filter />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default SearchFilter;

