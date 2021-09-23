import React from 'react';
import { Box } from "@material-ui/core";
//import { Link } from 'react-router-dom';
//import classNames from "classnames";


import useStyles from "./styles";
import SearchFilter from '../../../../Components/SearchFilter/SearchFilter';



const Places = () => {
  const classes = useStyles();

  return (
    <Box className={classes.places_bloc}>
      <SearchFilter />
    </Box>
  );
};

export default Places;
