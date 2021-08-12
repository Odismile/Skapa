import React  from 'react';
import { Box } from "@material-ui/core";
import useStyles from "./styles";
import SearchFilter from '../../../../Components/SearchFilter/SearchFilter';


const Team = () => {
  const classes = useStyles();

  return (
    <Box className={classes.teamBloc}>
      <SearchFilter />
    </Box>
  );
};

export default Team;
