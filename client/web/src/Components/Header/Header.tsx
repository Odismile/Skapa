import React from 'react';
import { Box, Button, Card, Typography, IconButton, Drawer, Link, List, ListItem } from '@material-ui/core';
//import { Link } from 'react-router-dom';
import useStyles from './style';

// image
import mainLogoWhite from '../../Assets/images/logo-white.svg';
import photoUser from '../../Assets/images/photo-card.png';
import Givaudan from '../../Assets/images/givaudan_logo-2.png';
import UserAvatar from '../../Assets/images/user_avatar.jpg';
import DesignThinkerPicto from '../../Assets/images/thinker_picto.png';

// icons
import Burger from '../../Components/Icons/Burger/Burger';
import Award from '../../Components/Icons/Award/Award';
import HeartLine from '../../Components/Icons/HeartLine/HeartLine';
import Cross from '../../Components/Icons/Cross/Cross';
import Plus from '../../Components/Icons/Plus/Plus';
import ChevronRight from '../../Components/Icons/ChevronRight/ChevronRight';
import { clearLocalStorage, isAuthenticated } from '../../Services';
import { COACHS, CREATE_PROJECT, DETAILS_TALENTS, LOGIN, PROJECT, TALENT, WISHLIST } from '../../Routes';
import { useLocation, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { isConnected } from '../../Utils/utils';
import { useCurrentUser } from '../../Providers/UserProvider/hooks/useCurrentUser';
import { FC } from 'react';
import { LocationInterface } from '../../types/types';

import UserTalentList from '../MyActivity/UserTalentList/UserTalentList';




interface HeaderProps {
  noBack?: boolean;
}
const PrimaryHeader: FC<HeaderProps> = ({ noBack }) => {
  const classes = useStyles();
  const { user, photo, isReader, profil } = useCurrentUser();
  const { talentId, projectId, profilId } = useParams<LocationInterface>();

  const history = useHistory();
  const isInWishList = [WISHLIST].includes(history.location.pathname);

  const [open, setOpen] = React.useState(false);
  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };

  const logout = () => {
    clearLocalStorage();
    window.location.reload();
  };

  const params = useLocation();
  const activeWishList = params.pathname === WISHLIST ? 'btn btn_link active' : 'btn btn_link';
  const isShowProfilInfo = isConnected && [PROJECT].includes(history.location.pathname);
  const isShowBackButton =
    [DETAILS_TALENTS].includes(history.location.pathname) && !Boolean(talentId || projectId || profilId);

  const handleClickRoute = (path: string) => () => {
    history.push(path);
    if (open) handleDrawer();
  };
  if (!isAuthenticated()) {
    history.push(LOGIN);
  }
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

        <figure className="logo" onClick={handleClickRoute(PROJECT)}>
          <img src={mainLogoWhite} alt="logo" />
        </figure>

        {/* list of notification */}

        <Box className="notif_list">
          <IconButton className="btn btn_award" aria-label="Award" onClick={handleClickRoute(COACHS)}>
            <Award />
          </IconButton>
          {/* Add class active when route is /whislist */}
          <IconButton className={activeWishList} aria-label="Like" onClick={handleClickRoute(WISHLIST)}>
            <HeartLine />
          </IconButton>
        </Box>
        <Box className="user_profil">
          <figure className="user_avatar">
            <img src={UserAvatar} alt="user_pic" />
          </figure>
            <img src={DesignThinkerPicto} className="iconOrganisation" alt="organisation" />
        </Box>
      </Box>

      {/* content header */}
      <Box className={classes.header_content}>
        {/* show bloc for create-project page */}
        {/* titre projet */}
        <Typography style={{ display: 'none' }} className="titlePage">
          {isInWishList ? 'Wishlist' : !isShowProfilInfo ? 'Create your own project' : ''}
        </Typography>

        <Typography style={{ display: 'block' }} className="userName_connected">
          <span>Hello, Julie_Skapa</span>
        </Typography>

        {/* show bloc for project and talents page */}
        {/* info User */}
        {isShowProfilInfo && (
          <Box className={classes.user_infos_content}>
            <Card className={classes.user_infos} elevation={0}>
              <figure className="user_avatar">
                <Link href="" className="user_link" title="user_infos">
                  <img src={photo || photoUser} alt="user_photo" />
                  <Box component="span" className="labeled-img">
                    <img src={Givaudan} className="iconOrganisation" alt="Givaudan Logo" />
                  </Box>
                </Link>
              </figure>
              <Box className="user_status">
                <Typography className="user_hello">
                  Hello <span>{user?.surname || ''} !</span>
                </Typography>
                <Typography className="user_balance" component="span">
                  {profil?.currentBalance || 0}
                  <span className="unity">TT</span>
                </Typography>
              </Box>
              <Typography className="flexFX" component="span"></Typography>
              <IconButton className="btn btn_icon btn_goto">
                <ChevronRight className="icon_arrow" />
              </IconButton>
            </Card>
          </Box>
        )}

        {/* Btn go to creat project */}
        {isShowProfilInfo && !isReader && (
          <Button className="btn_createProject" color="primary" variant="outlined" type="button" href={CREATE_PROJECT}>
            <Plus /> Create new project
          </Button>
        )}
      </Box>

      {/* link back to home-page */}
      {!isShowProfilInfo && isShowBackButton && (
        <Typography className="wrap-backLink">
          <Link className="backLink" onClick={handleClickRoute(PROJECT)}>
            Back
          </Link>
        </Typography>
      )}

      {/* list card show when app-externe page  */}
      <UserTalentList />

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
              <Link className="nav_link" onClick={handleClickRoute(PROJECT)}>
                Projects
              </Link>
            </ListItem>
            <ListItem disableGutters={true}>
              <Link className="nav_link" onClick={handleClickRoute(TALENT)}>
                Talents
              </Link>
            </ListItem>
            <ListItem disableGutters={true}>
              <Link className="nav_link">Places</Link>
            </ListItem>
            <ListItem disableGutters={true}>
              <Link className="nav_link" onClick={handleClickRoute(WISHLIST)}>
                Wishlist
              </Link>
            </ListItem>
            <ListItem disableGutters={true}>
              <Link className="nav_link" onClick={handleClickRoute(COACHS)}>
                Coaching
              </Link>
            </ListItem>
            <ListItem disableGutters={true}>
              <Link className="nav_link">Wallet</Link>
            </ListItem>
          </List>
          <Button
            color="secondary"
            variant="contained"
            onClick={handleClickRoute(CREATE_PROJECT)}
            className="btn_createProject"
          >
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
