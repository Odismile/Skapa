import React from 'react';
import { Box, IconButton, InputBase, Modal, Paper, Popper, Typography } from "@material-ui/core";
import useStyles from './style';
import Filter from '../../Components/Icons/Filter/Filter';
import Search from '../../Components/Icons/Search/Search';
import SearchProject from '../SearchProject/SearchProject';
import Cross from '../Icons/Cross';




const SearchFilter = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    

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
        <IconButton color="primary" className="filter-icon" onClick={handleOpen}>
          <Filter />
        </IconButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className={classes.modal}
        >
          <Box className="modal-content">
            <Box className="modal-top">
              <Typography component="h2" className="modal-title">
                Filter
              </Typography>
              <IconButton className="btn-close" onClick={handleClose}>
                <Cross />
              </IconButton>
            </Box>
            <Box className="modal-body">
              <SearchProject />
            </Box>
          </Box>
          
        </Modal>
      </Paper>
    </Box>
  );
};

export default SearchFilter;

