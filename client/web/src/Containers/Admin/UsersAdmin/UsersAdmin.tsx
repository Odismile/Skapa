import React from 'react';
import { 
  Box, 
  IconButton, 
  Typography,
} from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import SearchFilter from '../../../Components/SearchFilter/SearchFilter';
import DrawerMenuAdmin from '../DrawerMenuAdmin';
import UserProfilAdmin from '../UserProfilAdmin';

import useStyles from './styles';

// icons
import MenuIcon from '@material-ui/icons/Menu';
import Prohibition from '../../../Components/Icons/Prohibition';
import Plus from '../../../Components/Icons/Plus';
import Trash from '../../../Components/Icons/Trash';

import UserAvatar from '../../../Assets/images/user_avatar.jpg'; 

const columns = [

  {
    field: 'Name',
    editable: false,
    sortable: false,
    headerName: 'Name',
    minWidth: 175,
    disableColumnMenu: true,
  },
  {
    field: 'Job',
    headerName: 'Job',
    width: 150,
    editable: false,
    sortable: false,
    disableColumnMenu: true,
    disableExtendRowFullWidth: true,
  },
  {
    field: 'Company',
    headerName: 'Company',
    width: 100,
    editable: false,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: 'Status',
    headerName: 'Status',
    width: 90,
    editable: false,
    sortable: false,
    disableColumnMenu: true,
    disableExtendRowFullWidth: true,
  },
  {
    field: 'Seniority',
    headerName: 'Seniority',
    width: 150,
    editable: false,
    sortable: false,
    disableColumnMenu: true,
    disableExtendRowFullWidth: true,
  },
  {
    field: 'Rating',
    headerName: 'Rating',
    width: 120,
    editable: false,
    sortable: false,
    disableColumnMenu: true,
    disableExtendRowFullWidth: true,
  },
];


const rows = [
  { 
    id: 1, 
    Name: 'Laurent Dupont', 
    Job: 'UX Designer', 
    Company: 'GTR Gaz', 
    Status: 'Intern',
    Seniority: '3-8 years experience',
    Rating: 'Top rated'
  },
  { 
    id: 2, 
    Name: 'Emma Gautier', 
    Job: 'Design Thinker', 
    Company: 'Company', 
    Status: 'Extern',
    Seniority: '3-8 years experience',
    Rating: ''
  },
  { 
    id: 3, 
    Name: 'Alexandra Béziers', 
    Job: 'Product Designer', 
    Company: 'Company', 
    Status: 'Intern',
    Seniority: '3-8 years experience',
    Rating: 'Top rated'
  },
  { 
    id: 4, 
    Name: 'Lorem ipsum', 
    Job: 'UX Designer', 
    Company: 'Company', 
    Status: 'Intern',
    Seniority: '3-8 years experience',
    Rating: 'Top rated'
  },
  { 
    id: 5, 
    Name: 'Lorem ipsum', 
    Job: 'UX Designer', 
    Company: 'Company', 
    Status: 'Intern',
    Seniority: '3-8 years experience',
    Rating: ''
  },
  { 
    id: 6, 
    Name: 'Lorem ipsum', 
    Job: 'UX Designer', 
    Company: 'Company', 
    Status: 'Intern',
    Seniority: '3-8 years experience',
    Rating: ''
  },
  { 
    id: 7, 
    Name: 'Lorem ipsum', 
    Job: 'UX Designer', 
    Company: 'Company', 
    Status: 'Intern',
    Seniority: '3-8 years experience',
    Rating: 'Top rated'
  },
  { 
    id: 8, 
    Name: 'Lorem ipsum', 
    Job: 'UX Designer', 
    Company: 'Company', 
    Status: 'Intern',
    Seniority: '3-8 years experience',
    Rating: ''
  },
  { 
    id: 9, 
    Name: 'Lorem ipsum', 
    Job: 'UX Designer', 
    Company: 'Company', 
    Status: 'Intern',
    Seniority: '3-8 years experience',
    Rating: ''
  },
  { 
    id: 10, 
    Name: 'Lorem ipsum', 
    Job: 'UX Designer', 
    Company: 'Company', 
    Status: 'Intern',
    Seniority: '3-8 years experience',
    Rating: ''
  },
  { 
    id: 11, 
    Name: 'Lorem ipsum', 
    Job: 'UX Designer', 
    Company: 'Company', 
    Status: 'Intern',
    Seniority: '3-8 years experience',
    Rating: ''
  },
  { 
    id: 12, 
    Name: 'Lorem ipsum', 
    Job: 'UX Designer', 
    Company: 'Company', 
    Status: 'Intern',
    Seniority: `3-8 years experience`,
    Rating: ''
  },
  { 
    id: 13, 
    Name: 'Lorem ipsum', 
    Job: 'UX Designer', 
    Company: 'Company', 
    Status: 'Intern',
    Seniority: '3-8 years experience',
    Rating: ''
  },
];

const UsersAdmin = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box className={classes.UsersAdmin}>
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
              <Typography className="title_page" variant="h2">Projets</Typography>
              
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
              <Box className="allProjects_list">
                {/* <Box className="tri_btns">
                  <Typography className="title_block" variant="h3">All projects</Typography>
                  <span className={classes.flexFx}></span>
                  <Button color="secondary" variant="outlined" className="btn btn_ongoing active">
                    Ongoing
                  </Button>
                  <Button color="secondary" variant="outlined" className="btn btn_finished">
                    Finished
                  </Button>
                </Box> */}
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
            </Box>
          </Box>
        </Box>
      </main>
    </Box>
  );
};

export default UsersAdmin;
