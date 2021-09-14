import React from 'react';
import { 
  Box, 
  Button, 
  Drawer, 
  Hidden, 
  IconButton, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Toolbar, 
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow, 
  Paper
} from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';

import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import MenuAdmin from './MenuAdmin/MenuAdmin';
import SearchFilter from '../../Components/SearchFilter/SearchFilter';

// icons
import MenuIcon from '@material-ui/icons/Menu';
import Prohibition from '../../Components/Icons/Prohibition';

import useStyles from './styles';

// image
import mainLogoWhite from '../../Assets/images/logo-white.svg';
import topInnovator from '../../Assets/images/top_innovator.png';
import UserAvatar from '../../Assets/images/user_avatar.jpg';


const columns = [
  {
    field: 'Name',
    headerName: 'Name',
    width: 140,
    editable: false,
  },
  {
    field: 'Type',
    headerName: 'Type',
    width: 120,
    editable: true,
  },
  {
    field: 'Creator',
    headerName: 'Creator',
    //width: 175,
    editable: true,
  },
];

const rows = [
  { id: 1, Name: 'Lorem Ipsum Sit Amet', Type: 'Innovation', Creator: 'E. Dupont' },
  { id: 2, Name: '2 Lorem Ipsum Sit Amet', Type: 'Innovation 2', Creator: 'E. Dupont' },
  { id: 3, Name: '3 Lorem Ipsum Sit Amet', Type: 'Innovation 3', Creator: 'E. Dupont' },
  { id: 4, Name: '4 Lorem Ipsum Sit Amet', Type: 'Innovation 4', Creator: 'E. Dupont' },
  { id: 5, Name: '5 Lorem Ipsum Sit Amet', Type: 'Innovation 5', Creator: 'E. Dupont' },
  { id: 6, Name: '6 Lorem Ipsum Sit Amet', Type: 'Innovation 6', Creator: 'E. Dupont' },
  { id: 7, Name: '7 Lorem Ipsum Sit Amet', Type: 'Innovation 7', Creator: 'E. Dupont' },
  { id: 8, Name: '8 Lorem Ipsum Sit Amet', Type: 'Innovation 8', Creator: 'E. Dupont' },
  { id: 9, Name: '9 Lorem Ipsum Sit Amet', Type: 'Innovation 9', Creator: 'E. Dupont' },
  
];


const Admin = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box className="sideBarLeft">
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
    <Box className={classes.AdminPage}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
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

      <main className={classes.content}>
        <div className="wrap_content">
          <IconButton
            color= "inherit"
            aria-label= "open drawer"
            edge= "start"
            onClick={handleDrawerToggle}
            className="menuButton"
          >
            <MenuIcon />
          </IconButton>
          <Box className="header_admin" component="header">
            {/* page title */}
            <Typography className="title_page" variant="h2">Projets</Typography>
            {/* user profile connected */}
            <Box className="user_profile">
              <Avatar alt="User avatar" src={UserAvatar} className="user_avatar" />
              <Box className="user_infos">
                <Typography className="user_name">Pierre-Marie</Typography>
                <Typography className="user_job">Administrateur</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="mainContent_admin" component="article">
            {/* filter bloc */}
            <Box className="filter_list">
              <SearchFilter placeholder="Look for a project" />
              <IconButton className=" warning_btn" aria-label="warning">
                <Prohibition />
              </IconButton>
            </Box>
          
            {/* list of projects */}
            <Box className="allProjects_list">
              <Box className="tri_btns">
                <Typography className="title_block" variant="h3">All projects</Typography>
                <span className={classes.flexFx}></span>
                <Button color="secondary" variant="outlined" className="btn btn_ongoing active">
                  Ongoing
                </Button>
                <Button color="secondary" variant="outlined" className="btn btn_finished">
                  Finished
                </Button>
              </Box>
              <Box className={classes.dataTable_wrapper}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  checkboxSelection
                  disableSelectionOnClick
                />
              </Box>
            </Box>
          </Box>
        </div>
      </main>
    </Box>
  );
};

export default Admin;
