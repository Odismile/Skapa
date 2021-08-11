import React, { FC } from 'react';
import { Box, Typography} from '@material-ui/core';
import {Switch, Route, Link } from "react-router-dom";
import classNames from "classnames";

import Description from '../../Containers/Project/CreateProject/Description/Description';
import Team from '../../Containers/Project/CreateProject/Team/Team';
import Places from '../../Containers/Project/CreateProject/Places/Places';
import Review from '../../Containers/Project/CreateProject/Review/Review';

import useStyles from './style';


const TabLink = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.tabList}>
      <Box className="tab_list">
        <Link to="description" className="tab_link active">Description</Link>
        <Link to="team" className="tab_link">Team</Link>
        <Link to="places" className="tab_link">Places</Link>
        <Link to="review" className="tab_link">Review</Link>
      </Box>
      <Box className="tab_content">
        <Switch>
          <Route path="description" component={Description} />
          <Route path="team" component={Team} />
          <Route path="places" component={Places} />
          <Route path="review" component={Review} />
        </Switch>
      </Box>
    </Box>
  );
};

export default TabLink;
