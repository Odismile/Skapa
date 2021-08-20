import { Box, IconButton, InputBase, Modal, Paper, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Filter from '../../Components/Icons/Filter/Filter';
import Search from '../../Components/Icons/Search/Search';
import Cross from '../Icons/Cross';
import SearchProject from '../SearchProject/SearchProject';
import useStyles from './style';

interface SearchFilterProps {
  onChangeFitlerText?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
  placeholder?: string,
}

const SearchFilter: FC<SearchFilterProps> = ({ onChangeFitlerText, placeholder }) => {
  const classes = useStyles();
  const { t } = useTranslation();

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
            placeholder={placeholder ? placeholder : t(`project.textInputFilter`)}
            inputProps={{ 'aria-label': 'Look for projects by title, type, creator..' }}
            onChange={onChangeFitlerText}
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
