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
import MenuAdmin from '../MenuAdmin/';
import SearchFilter from '../../../Components/SearchFilter/SearchFilter';
import CardProjectsPending from '../CardProjectsPending';

// icons
import MenuIcon from '@material-ui/icons/Menu';
import Prohibition from '../../../Components/Icons/Prohibition';

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
];

const Projects = () => {
  const classes = useStyles();
};




export default Projects;
