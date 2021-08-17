import React from 'react';
import {
  Box,
  List, 
  ListItem,
  TextField,
  Typography,
} from '@material-ui/core';
import PrimaryHeader from '../../Components/Header/Header';
import DailyRate from '../../Components/DailyRate/DailyRate';
import Filter from '../../Components/Icons/Filter';
import Search from '../../Components/Icons/Search';


import useStyles from './styles';


const Coachs = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainPage}>
      <Box className="wrapPage">
        <PrimaryHeader />
        {/* List coachs */}

        <List className={classes.list_coachs}>
          <ListItem disableGutters={true} className="item_coach">
            {/* coach item */}
            <p>coach item</p>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Coachs;
