import React from 'react';
import { Box, Button, Link, List, ListItem, } from '@material-ui/core';
import { COACHS, CREATE_PROJECT, DETAILS_TALENTS, LOGIN, PROJECT, WISHLIST } from '../../Routes';
import { Route, Redirect, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import useStyles from './style';

const MenuList = () => {
  const classes = useStyles();

  return (
    <Box className={classes.menuRoot}>
      <List  className={classNames(classes.menuRoot, "list")}>
        <ListItem disableGutters={true}>
          <Link className="nav_link">Profile</Link>
        </ListItem>
        <ListItem disableGutters={true}>
          <Link className="nav_link">My activity</Link>
        </ListItem>
        <ListItem disableGutters={true}>
          <Link className="nav_link" href={PROJECT}>
            Projects
          </Link>
        </ListItem>
        <ListItem disableGutters={true}>
          <Link className="nav_link">Talents</Link>
        </ListItem>
        <ListItem disableGutters={true}>
          <Link className="nav_link">Places</Link>
        </ListItem>
        <ListItem disableGutters={true}>
          <Link className="nav_link" href={WISHLIST}>
            Wishlist
          </Link>
        </ListItem>
        <ListItem disableGutters={true}>
          <Link className="nav_link" href={COACHS}>
            Coaching
          </Link>
        </ListItem>
        <ListItem disableGutters={true}>
          <Link className="nav_link">Wallet</Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default MenuList;
