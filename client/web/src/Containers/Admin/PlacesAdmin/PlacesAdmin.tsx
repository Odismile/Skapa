import React, { useState } from 'react';
import { 
  Box,
  Button,
  IconButton, 
  Typography,
  Divider,
  TextareaAutosize,
  InputAdornment,
  List,
  ListItem,
  MenuItem,
  Select,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';


import SearchFilter from '../../../Components/SearchFilter/SearchFilter';
//import CardProjectsPending from '../CardProjectsPending';

import DrawerMenuAdmin from '../DrawerMenuAdmin';
import UserProfilAdmin from '../UserProfilAdmin';
import TextFieldComponent from '../../../Components/TextField/TextField';

// icons
import MenuIcon from '@material-ui/icons/Menu';
import Prohibition from '../../../Components/Icons/Prohibition';
import Plus from '../../../Components/Icons/Plus';
import Trash from '../../../Components/Icons/Trash';
import IconPhoto from '../../../Components/Icons/Photo';

import useStyles from './styles';


// image
import UserAvatar from '../../../Assets/images/user_avatar.jpg'; 
import CardCoaches from '../CardCoaches';
import requestPhoto from '../../../Assets/images/photo_request.png';
import givaudan from '../../../Assets/images/givaudan_logo.png';
import Cross from '../../../Components/Icons/Cross';


const ProjectsAdmin = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const onUploadFile = () => {};
  const onChangeDescription = () => {};
  const [projectDescription, setProjectDescription] = useState('');

  const onChangeProjectType = () => {};
  const typeProject = () => {};


  return (
    <Box className={classes.PlacesAdminPage}>
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
              <Typography className="title_page" variant="h2">Places</Typography>
              
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
              <Box className="places_list">
                {/* card place item */}
              </Box>

              <Divider orientation="vertical" flexItem />

              <Box className="editPlaces_content">
                <Box className="places_forms">
                  <Typography className="title_block" variant="h3">Add a new place</Typography>
                  <form className="formCoach">
                    <Box className="item_bloc">
                      <Box className="upload_bloc">
                        <input
                          accept="image/*"
                          className="upload_picture"
                          id="contained-button-file-picture"
                          multiple
                          type="file"
                          onChange={(e) => onUploadFile()}
                        />
                        <label htmlFor="contained-button-file-picture" className="upload_content"><IconPhoto /><span>Upload</span></label>
                      </Box>
                      <Box className="field_item title_field">
                        <TextFieldComponent
                          label="Title"
                          id="TitlePlaces"
                          placeholder="Title"
                          type="text"
                        />
                      </Box>
                    </Box>
                    <Box className="item_bloc">
                      <Typography className="title_itemBlock" variant="h3">Informations</Typography>
                      <Box className="field_item location_field">
                        <TextFieldComponent
                          label="Location"
                          id="LocationPlaces"
                          placeholder="Location"
                          type="text"
                        />
                      </Box>
                      <Box className="grid_field">
                        <Box className="field_item capacity_field">
                          <TextFieldComponent
                            label="Capacity"
                            id="CapacityPlaces"
                            placeholder="Capacity"
                            type="text"
                          />
                        </Box>
                        <Box className="field_item typeOfSpace_field selectBox_item">
                          <Select
                            defaultValue="option element"
                            fullWidth
                            className="selectBox"
                            onChange={onChangeProjectType}
                            value={typeProject}
                            IconComponent={KeyboardArrowDownIcon}
                            MenuProps={{
                              anchorOrigin: {
                                vertical: 'bottom',
                                horizontal: 'left',
                              },
                              PaperProps: {
                                className: 'dropDownSelect',
                              },
                              transformOrigin: {
                                vertical: 'top',
                                horizontal: 'left',
                              },
                              getContentAnchorEl: null,
                            }}
                          >
                            <MenuItem >Element of option 1</MenuItem>
                            <MenuItem >Element of option 2</MenuItem>
                            <MenuItem >Element of option 3</MenuItem>
                          </Select>
                        </Box>
                      </Box>
                      <Box className="field_item dailyRent_field">
                        
                      </Box>
                    </Box>
                    <Box className="item_bloc availability_field">
                      <Typography className="title_itemBlock" variant="h3">Availability</Typography>
                      <Typography className="text_infos">This coach is available </Typography>
                      <Typography className="link_add"><Link to="/">Add Availabilities</Link></Typography>
                      <List className="list_availability">
                        <ListItem className="list_item" disableGutters={true}>
                          <Typography className="text">Monday</Typography>
                          <IconButton color= "primary" className="btn_availability" >
                            <Cross />
                          </IconButton>
                        </ListItem>
                        <ListItem className="list_item" disableGutters={true}>
                          <Typography className="text">Tuesday</Typography>
                          <IconButton color= "primary" className="btn_availability" >
                            <Cross />
                          </IconButton>
                        </ListItem>
                        <ListItem className="list_item" disableGutters={true}>
                          <Typography className="text">Thursday</Typography>
                          <IconButton color= "primary" className="btn_availability" >
                            <Cross />
                          </IconButton>
                        </ListItem>
                        <ListItem className="list_item" disableGutters={true}>
                          <Typography className="text">Wednesday</Typography>
                          <IconButton color= "primary" className="btn_availability" >
                            <Cross />
                          </IconButton>
                        </ListItem>
                        <ListItem className="list_item" disableGutters={true}>
                          <Typography className="text">Friday</Typography>
                          <IconButton color= "primary" className="btn_availability" >
                            <Cross />
                          </IconButton>
                        </ListItem>
                      </List>
                    </Box>
                    <Box className="item_bloc presentation_field">
                      <Typography className="title_itemBlock" variant="h3">Description</Typography>
                      <Typography className="labeled" variant="h4">Presentation</Typography>
                      <Box className="field_item textarea_item">
                        <TextareaAutosize
                          minRows="8"
                          className="textarea_input"
                          placeholder="Lorem Ipsum"
                          defaultValue=""
                          onChange={onChangeDescription}
                          value={projectDescription}
                          maxLength={240}
                        />
                      </Box>
                    </Box>
                    <Box className="btn_groups">
                      <Button className="btn btn_save" variant="contained" color="primary">
                        <span>Save</span>
                      </Button>
                    </Box>
                  </form>
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
