import React from 'react';
import { 
  Box, 
  Button, 
  Drawer, 
  Hidden, 
  IconButton, 
  Typography,
  Badge,
  Divider,
  
} from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';

import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import MenuAdmin from './MenuAdmin/MenuAdmin';
import SearchFilter from '../../Components/SearchFilter/SearchFilter';
import CardProjectsPending from './CardProjectsPending';

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
    flex: 1,
    editable: false,
    sortable: false,
    headerName: 'Name',
    minWidth: 120,
    disableColumnMenu: true,
  },
  {
    field: 'Type',
    headerName: 'Type',
    width: 120,
    
    editable: false,
    sortable: false,
    disableColumnMenu: true,
    disableExtendRowFullWidth: true,
  },
  {
    field: 'Creator',
    flex: .5,
    headerName: 'Creator',
    minWidth: 150,
    editable: false,
    sortable: false,
    disableColumnMenu: true,
  },
];

const rows = [
  { id: 1, Name: '1 Lorem Ipsum Sit Amet', Type: 'Innovation 1', Creator: 'E. Dupont' },
  { id: 2, Name: '2 Lorem Ipsum Sit Amet', Type: 'Innovation 2', Creator: 'E. Dupont' },
  { id: 3, Name: '3 Lorem Ipsum Sit Amet', Type: 'Innovation 3', Creator: 'E. Dupont' },
  { id: 4, Name: '4 Lorem Ipsum Sit Amet', Type: 'Innovation 4', Creator: 'E. Dupont' },
  { id: 5, Name: '5 Lorem Ipsum Sit Amet', Type: 'Innovation 5', Creator: 'E. Dupont' },
  { id: 6, Name: '6 Lorem Ipsum Sit Amet', Type: 'Innovation 6', Creator: 'E. Dupont' },
  { id: 7, Name: '7 Lorem Ipsum Sit Amet', Type: 'Innovation 7', Creator: 'E. Dupont' },
  { id: 8, Name: '8 Lorem Ipsum Sit Amet', Type: 'Innovation 8', Creator: 'E. Dupont' },
  { id: 9, Name: '9 Lorem Ipsum Sit Amet', Type: 'Innovation 9', Creator: 'E. Dupont' },

  { id: 10, Name: '10 Lorem Ipsum Sit Amet', Type: 'Innovation 10', Creator: 'E. Dupont' },
  { id: 11, Name: '11 Lorem Ipsum Sit Amet', Type: 'Innovation 11', Creator: 'E. Dupont' },
  { id: 12, Name: '12 Lorem Ipsum Sit Amet', Type: 'Innovation 12', Creator: 'E. Dupont' },
  { id: 13, Name: '13 Lorem Ipsum Sit Amet', Type: 'Innovation 13', Creator: 'E. Dupont' },
  { id: 14, Name: '14 Lorem Ipsum Sit Amet', Type: 'Innovation 14', Creator: 'E. Dupont' },
  { id: 15, Name: '15 Lorem Ipsum Sit Amet', Type: 'Innovation 15', Creator: 'E. Dupont' },
  { id: 16, Name: '16 Lorem Ipsum Sit Amet', Type: 'Innovation 16', Creator: 'E. Dupont' },
  { id: 17, Name: '17 Lorem Ipsum Sit Amet', Type: 'Innovation 17', Creator: 'E. Dupont' },
  { id: 18, Name: '18 Lorem Ipsum Sit Amet', Type: 'Innovation 18', Creator: 'RAKOTOARISON ANDRIAMANANKASINA Tovo Johnny' },
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
            <Box className="content_bloc">
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
                        //autoHeight
                        rows={rows}
                        columns={columns}
                        //pageSize={5}
                        headerHeight={40}
                        //autoPageSize={true}
                        checkboxSelection
                        disableSelectionOnClick
                        disableColumnFilter
                        hideFooterRowCount= {true}
                        rowHeight={40}
                      />
                    
                </Box>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box className="pendingProjects_content">
                <Typography className="title_block" variant="h3">Projects pending validation <Badge className="nbr" color="secondary" badgeContent={9}></Badge></Typography>
                <Box className="pendingProjects_list">
                  {/* list of pending Projects */}
                  <CardProjectsPending />
                  <CardProjectsPending />
                  <CardProjectsPending />
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      </main>
    </Box>
  );
};

export default Admin;
