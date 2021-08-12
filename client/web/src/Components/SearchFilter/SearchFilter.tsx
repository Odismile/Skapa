import React from 'react';
import { Box, IconButton, InputBase, Paper, Popper } from "@material-ui/core";
import useStyles from './style';
import Filter from '../../Components/Icons/Filter/Filter';
import Search from '../../Components/Icons/Search/Search';
import SearchProject from '../SearchProject/SearchProject';




const SearchFilter = () => {
  const classes = useStyles();

    //Simple popper
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event:any) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    

  return (
    <Box className="search-bloc">
      <Paper component="form" className={classes.root}>
        <Box className="input-search">
          <InputBase
            className={classes.input}
            placeholder="Look for projects by title, type, creator.."
            inputProps={{ 'aria-label': 'Look for projects by title, type, creator..' }}
          />
          <IconButton className="search-icon" aria-label="search">
            <Search />
          </IconButton>
        </Box>
        <IconButton color="primary" className="filter-icon" aria-label="directions"  aria-describedby={id} onClick={handleClick}>
          <Filter />
        </IconButton>
        <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-start" >
          <SearchProject />
        </Popper>
      </Paper>
    </Box>
  );
};

export default SearchFilter;

