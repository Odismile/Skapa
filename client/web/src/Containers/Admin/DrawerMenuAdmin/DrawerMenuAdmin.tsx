import React from 'react';
import { Box, Hidden } from '@material-ui/core';
import Drawer, { DrawerProps }from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';

import MenuAdmin from '../MenuAdmin';

import useStyles from './styles';

// image
import mainLogoWhite from '../../../Assets/images/logo-white.svg';
import topInnovator from '../../../Assets/images/top_innovator.png';

// icons




const DrawerMenuAdmin = (props: Pick<DrawerProps, 'open' |  'onClose' > ) => {
  const classes = useStyles();

  const drawer = (
    <Box className={classes.sideBarLeft}>
      {/* logo Skapa */}
      <figure className="logo">
        <img src={mainLogoWhite} alt="logo" />
      </figure>
      {/* menu List */}
      <MenuAdmin />
      {/* top innovator */}
      <span className={classes.flexFx}></span>
      <figure className="topInnovator">
        <img src={topInnovator} alt="top innovator" />
      </figure>
    </Box>
  )


  return (
    <Box className={classes.DrawerMenuAdmin}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            elevation={2}
            variant="temporary"
            open={props.open}
            onClose={props.onClose}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
            {/* <Typography>menu desktop here !</Typography> */}
          </Drawer>
        </Hidden>
      </nav>
    </Box>
  );
};

export default DrawerMenuAdmin;
