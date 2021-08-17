import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
  Drawer,
  Link,
  List,
  ListItem,
} from '@material-ui/core';
//import { Link } from 'react-router-dom';
import classNames from 'classnames';
import useStyles from './style';

// image
import mainLogoWhite from '../../Assets/images/logo-white.svg';
import photoUser from '../../Assets/images/photo-card.png';
import organisationImg from '../../Assets/images/organisation.png';

// icons
import Burger from '../../Components/Icons/Burger/Burger';
import Award from '../../Components/Icons/Award/Award';
import HeartLine from '../../Components/Icons/HeartLine/HeartLine';
import Cross from '../../Components/Icons/Cross/Cross';
import Plus from '../../Components/Icons/Plus/Plus';
import ChevronRight from '../../Components/Icons/ChevronRight/ChevronRight';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { clearLocalStorage, isAuthenticated } from '../../Services';
import { CREATE_PROJECT, LOGIN } from '../../Routes';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const PrimaryHeader = () => {
  const classes = useStyles();

  const history = useHistory();

  if (!isAuthenticated()) {
    history.push(LOGIN);
  }

  const [open, setOpen] = React.useState(false);
  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };

  const logout = () => {
    clearLocalStorage();
    window.location.reload();
  };

  const goToWishlist = () =>{
    history.push('/wishlist');
  }
  const params = useLocation();
  const activeWishList = params.pathname == '/wishlist' ? "btn btn_link active" : "btn btn_link";

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
          <img src={mainLogoWhite} alt="logo" />
        </figure>
        {/* list of notification */}

        <Box className="notif_list">
          <IconButton className="btn btn_award" aria-label="Award">
            <Award />
          </IconButton>
          {/* Add class active when route is /whislist */}
          <IconButton className={activeWishList} aria-label="Like" onClick={goToWishlist}>
            <HeartLine />
          </IconButton>
        </Box>
      </Box>
      <Box className={classes.header_content}>
        {/* show bloc for create-project page */}
        {/* titre projet */}
        <Typography style={{ display: 'none' }} className="titlePage">
          Create your own project
        </Typography>

        {/* show bloc for project and talents page */}
        {/* info User */}
        <Box className={classes.user_infos_content}>
          <Card className={classes.user_infos} elevation={0}>
            <figure className="user_avatar">
              <Link href="" className="user_link" title="user_infos">
                <img src={photoUser} alt="user_photo" />
                <Box component="span" className="labeled-img">
                  <img src={organisationImg} className="iconOrganisation" alt="organisation" />
                </Box>
              </Link>
            </figure>
            <Box className="user_status">
              <Typography className="user_hello">
                Hello <span>Alexander_UX !</span>
              </Typography>
              <Typography className="user_balance" component="span">
                12 0000<span className="unity">$</span>
              </Typography>
            </Box>
            <Typography className="flexFX" component="span"></Typography>
            <IconButton className="btn btn_icon btn_goto">
              <ChevronRight className="icon_arrow" />
            </IconButton>
          </Card>
        </Box>

        {/* Btn go to creat project */}
        <Button
          className="btn_createProject"
          color="primary"
          variant="outlined"
          type="button"
          href="/project/create-project"
        >
          <Plus /> Create new project
        </Button>
      </Box>
      <Drawer
        className={classes.drawerMenu}
        anchor="left"
        open={open}
        onClose={handleDrawer}
        BackdropProps={{ className: 'backDrop_menuMobile' }}
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
            <ListItem disableGutters={true}>
              <Link className="nav_link">Profile</Link>
            </ListItem>
            <ListItem disableGutters={true}>
              <Link className="nav_link">My activity</Link>
            </ListItem>
            <ListItem disableGutters={true}>
              <Link className="nav_link" href="/project">
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
              <Link className="nav_link">Wishlist</Link>
            </ListItem>
            <ListItem disableGutters={true}>
              <Link className="nav_link">Coaching</Link>
            </ListItem>
            <ListItem disableGutters={true}>
              <Link className="nav_link">Wallet</Link>
            </ListItem>
          </List>
          <Button color="secondary" variant="contained" href={CREATE_PROJECT} className="btn_createProject">
            <Plus /> Create new project
          </Button>
          <Typography className="disconnect_wrap">
            <Link className="disconnect_link" onClick={logout}>
              Logout
            </Link>
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
};

export default PrimaryHeader;
