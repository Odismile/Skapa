import React, { useRef, useState } from 'react';
import { Box, Button, Container, Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import classNames from "classnames";


import useStyles from "./styles";



const Team = () => {
  const classes = useStyles();

  return (
    <Box className={classes.team_bloc}>
      <p>Team !</p>
    </Box>
  );
};

export default Team;
