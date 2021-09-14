import React from 'react';
import { Box, Link, List, ListItem } from '@material-ui/core';


import useStyles from './styles';

// icons
import Home from '../../../Components/Icons/Home'
import Award from '../../../Components/Icons/Award'
import Users from '../../../Components/Icons/Users'
import Map from '../../../Components/Icons/Map'
import Film from '../../../Components/Icons/Film'

const Coachs = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.MenuAdminList}>
      <List className="list">
        <ListItem disableGutters={true}>
          <Link className="nav_link"><span className="icon"><Home /></span>Dashboard</Link>
        </ListItem>
        <ListItem disableGutters={true}>
          <Link className="nav_link"><span className="icon"><Award /></span>Coaches</Link>
        </ListItem>
        <ListItem disableGutters={true}>
          <Link className="nav_link"><span className="icon"><Users /></span>Users</Link>
        </ListItem>
        <ListItem disableGutters={true}>
          <Link className="nav_link"><span className="icon"><Map /></span>Places</Link>
        </ListItem>
        <ListItem disableGutters={true}>
          <Link className="nav_link"><span className="icon"><Film /></span>Projects</Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Coachs;
