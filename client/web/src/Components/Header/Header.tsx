import React from 'react';
import { Box, Button, Typography, IconButton, Drawer, Link, List, ListItem } from '@material-ui/core';
//import { Link } from 'react-router-dom';
import classNames from "classnames";
import useStyles from './style';

// image
import mainLogoWhite from '../../Assets/images/logo-white.svg';


// icons
import Burger from '../../Components/Icons/Burger/Burger';
import Award from '../../Components/Icons/Award/Award';
import HeartLine from '../../Components/Icons/HeartLine/HeartLine';
import Cross from '../../Components/Icons/Cross/Cross';
import Plus from '../../Components/Icons/Plus/Plus';
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
        <Box className="menu_wrap">
          <IconButton className="btn btn_burger" aria-label="menu burger" onClick={handleDrawer}>
            <Burger />
          </IconButton>
        </Box>
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
      <Box className={classes.header_content}>
        <Typography className="titlePage">Create your own project</Typography>
      </Box>
      <Drawer
        className={classes.drawerMenu}
        anchor="left"
        open={open}
        onClose={handleDrawer}
        BackdropProps= {
          {className:'backDrop_menuMobile'}
        }
        classes={{
          paper: classes.drawerPaperMenu,
          
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Box className={classes.MenuList}>
          
            <IconButton className="btn btn_burger" aria-label="close" onClick={handleDrawer}>
              <Cross />
            </IconButton>
          
          <List className="list">
            <ListItem disableGutters={true}><Link className="nav_link">Profil</Link></ListItem>
            <ListItem disableGutters={true}><Link className="nav_link">My activity</Link></ListItem>
            <ListItem disableGutters={true}><Link className="nav_link">Projects</Link></ListItem>
            <ListItem disableGutters={true}><Link className="nav_link">Talents</Link></ListItem>
            <ListItem disableGutters={true}><Link className="nav_link">Places</Link></ListItem>
            <ListItem disableGutters={true}><Link className="nav_link">Wishlist</Link></ListItem>
            <ListItem disableGutters={true}><Link className="nav_link">Coaching</Link></ListItem>
            <ListItem disableGutters={true}><Link className="nav_link">Wallet</Link></ListItem>
          </List>
          <Button color="secondary" variant="contained" href="/project/create-project" className="btn_createProject" ><Plus /> Create new project</Button>
          <Typography className="disconnect_wrap">
            <Link className="disconnect_link">Logout</Link>
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
};

export default PrimaryHeader;
