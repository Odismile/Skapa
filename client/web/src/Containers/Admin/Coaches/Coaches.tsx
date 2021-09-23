import React from 'react';
import { 
  Box, 
  IconButton, 
  Typography,
  Divider,
} from '@material-ui/core';

import SearchFilter from '../../../Components/SearchFilter/SearchFilter';
//import CardProjectsPending from '../CardProjectsPending';

import DrawerMenuAdmin from '../DrawerMenuAdmin';
import UserProfilAdmin from '../UserProfilAdmin';

// icons
import MenuIcon from '@material-ui/icons/Menu';
import Prohibition from '../../../Components/Icons/Prohibition';
import Plus from '../../../Components/Icons/Plus';
import Trash from '../../../Components/Icons/Trash';

import useStyles from './styles';


// image
import UserAvatar from '../../../Assets/images/user_avatar.jpg'; 
import CardCoaches from '../CardCoaches';


const ProjectsAdmin = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box className={classes.CoachesAdminPage}>
      {/* drawer Menu admin */}
      <Box className="asideLeftWrapper">
        <DrawerMenuAdmin open={mobileOpen} onClose={handleDrawerToggle} />
      </Box>

      <main className={classes.content}>
        <Box className="wrap_content">
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
            <Box className="top_header">
              {/* page title */}
              <Typography className="title_page" variant="h2">Coaches</Typography>
              
              {/* user profile connected */}
              <UserProfilAdmin photoAvatar={UserAvatar} userName="Pierre-Marie" userJob="Administrateur" />
            </Box>
            {/* filter bloc */}
            <Box className="filter_list">
              <SearchFilter placeholder="Look for a project" />
              <IconButton className="btn warning_btn" aria-label="warning">
                <Prohibition />
              </IconButton>
              <IconButton className="btn add_btn" aria-label="add">
                <Plus />
              </IconButton>
              <IconButton className="btn remove_btn" aria-label="remove">
                <Trash />
              </IconButton>

            </Box>
          </Box>
          <Box className="mainContent_admin" component="article">
            {/* list of projects */}
            <Box className="content_bloc">
              <Box className="coaches_list">
                  {/* card coach group */}
                <Box className="coaches_group">
                  {/* card coach item */}
                  <CardCoaches />
                  <CardCoaches />
                  <CardCoaches />
                  <CardCoaches />
                </Box>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box className="editCoaches_content">
                <Typography className="title_block" variant="h3">Add a new coach</Typography>
                <Box className="coaches_forms">
                
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </main>
    </Box>
  );
};




export default ProjectsAdmin;
