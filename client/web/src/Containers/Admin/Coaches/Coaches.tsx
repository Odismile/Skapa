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
} from '@material-ui/core';
import { Link } from 'react-router-dom';

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
  const onUploadFile = () => {    };
  const onChangeDescription = () => {};
  const [projectDescription, setProjectDescription] = useState('');


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
                  <Typography className="title_group" variant="h3">Design Thinking Process</Typography>
                  <CardCoaches 
                    selectedCard='selected'
                    PhotoCoach= {requestPhoto}
                    Organism = {givaudan}
                    JobCoach = "UX Designer"
                    NameCoach = "Emma Vatier"
                    AddressCoach = "Interne - Paris"
                    LevelCoach = "Senior"
                    RateCoach = {432}
                  />
                  <CardCoaches 
                    //selectedCard='selected'
                    PhotoCoach= {requestPhoto}
                    Organism = {givaudan}
                    JobCoach = "UX Designer"
                    NameCoach = "Emma Vatier"
                    AddressCoach = "Interne - Paris"
                    LevelCoach = "Senior"
                    RateCoach = {432}
                  />
                </Box>
                <Box className="coaches_group">
                  {/* card coach item */}
                  <Typography className="title_group" variant="h3">Design to Change Process</Typography>
                  <CardCoaches 
                    //selectedCard='selected'
                    PhotoCoach= {requestPhoto}
                    Organism = {givaudan}
                    JobCoach = "UX Designer"
                    NameCoach = "Emma Vatier"
                    AddressCoach = "Interne - Paris"
                    LevelCoach = "Senior"
                    RateCoach = {432}
                  />
                  <CardCoaches 
                    //selectedCard='selected'
                    PhotoCoach= {requestPhoto}
                    Organism = {givaudan}
                    JobCoach = "UX Designer"
                    NameCoach = "Emma Vatier"
                    AddressCoach = "Interne - Paris"
                    LevelCoach = "Senior"
                    RateCoach = {432}
                  />
                </Box>
                <Box className="coaches_group">
                  {/* card coach item */}
                  <Typography className="title_group" variant="h3">Digitalization Process</Typography>
                  <CardCoaches 
                    //selectedCard='selected'
                    PhotoCoach= {requestPhoto}
                    Organism = {givaudan}
                    JobCoach = "UX Designer"
                    NameCoach = "Emma Vatier"
                    AddressCoach = "Interne - Paris"
                    LevelCoach = "Senior"
                    RateCoach = {432}
                  />
                </Box>
              </Box>

              <Divider orientation="vertical" flexItem />

              <Box className="editCoaches_content">
                <Box className="coaches_forms">
                <Typography className="title_block" variant="h3">Add a new coach</Typography>
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
                      <Box className="field_item name_field">
                        <TextFieldComponent
                          label="Name"
                          id="nameCoach"
                          placeholder="Name"
                          type="text"
                        />
                      </Box>
                    </Box>
                    <Box className="item_bloc">
                      <Typography className="title_itemBlock" variant="h3">Informations</Typography>
                      <Box className="field_item job_field">
                        <TextFieldComponent
                          label="Job"
                          id="JobCoach"
                          placeholder="Job"
                          type="text"
                        />
                      </Box>
                      <Box className="grid_field">
                        <Box className="field_item level_field">
                          <TextFieldComponent
                            label="Level"
                            id="LevelCoach"
                            placeholder="Level"
                            type="text"
                          />
                        </Box>
                        <Box className="field_item company_field">
                          <TextFieldComponent
                            label="Company"
                            id="CompanyCoach"
                            placeholder="Company"
                            type="text"
                          />
                        </Box>
                      </Box>
                      <Box className="field_item rate_field">
                        <TextFieldComponent
                          label="Rate"
                          id="RateCoach"
                          placeholder="Rate"
                          type="text"
                          InputProps = {{
                            endAdornment: <InputAdornment position="end">kg</InputAdornment>
                          }}
                        />
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
                      <Typography className="labeled" variant="h4">Coach Presentation</Typography>
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
