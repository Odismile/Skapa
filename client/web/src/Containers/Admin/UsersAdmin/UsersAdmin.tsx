import React from 'react';
import { 
  Box, 
  Button, 
  IconButton, 
  Typography,
  Badge,
  Divider,
} from '@material-ui/core';


import useStyles from './styles';

// icons
import Home from '../../../Components/Icons/Home'
import Award from '../../../Components/Icons/Award'
import Users from '../../../Components/Icons/Users'
import Map from '../../../Components/Icons/Map'
import Film from '../../../Components/Icons/Film'

const UsersAdmin = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.MenuAdminList}>
      
    </Box>
  );
};

export default UsersAdmin;
