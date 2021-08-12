import React from 'react';
import { Box, Button, Typography, IconButton, Drawer } from '@material-ui/core';
import { Link } from 'react-router-dom';
import classNames from "classnames";
import useStyles from './style';

// image
import mainLogoWhite from '../../Assets/images/logo-white.svg';


// icons
import Burger from '../../Components/Icons/Burger/Burger';
import Award from '../../Components/Icons/Award/Award';
import HeartLine from '../../Components/Icons/HeartLine/HeartLine';
import Photo from '../../Components/Icons/Photo/Photo';


const PrimaryHeader = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleDrawer = () => {
    setOpen(prev => !prev);
  };
  
  return (
    <Box className={classes.header_block}>
      <Box className={classes.header_top}>
        {/* burger menu mobile */}
        <IconButton className="btn btn_burger" aria-label="menu burger" onClick={handleDrawer}>
          <Burger />
        </IconButton>
        {/* logo mobile */}
        <figure className="logo">
          <img src={mainLogoWhite} alt="logo"/>
        </figure>

        {/* list of notification */}
        <Box className="notif_list">
          <IconButton className="btn btn_award" aria-label="Award">
            <Award />
          </IconButton>
          <IconButton className="btn btn_lik" aria-label="Like">
            <HeartLine />
          </IconButton>
        </Box>
      </Box>
    
      <Drawer
        className={classes.drawerFilter}
        anchor="left"
        open={open}
        onClose={handleDrawer}
        classes={{
          paper: classes.drawerPaperFilter,
        }}
      >
        <Box className={classes.filterList}>
          <IconButton className="btn btn_burger" aria-label="close" onClick={handleDrawer}>
            <Burger />
          </IconButton>
          <Typography>Test menu drawer</Typography>
        </Box>
      </Drawer>
    </Box>
  );
};

export default PrimaryHeader;
