import React, { useRef, useState } from 'react';
import { Box, Button, Container, Typography, IconButton } from "@material-ui/core";
import { Link } from 'react-router-dom';
import classNames from "classnames";

import TextField from '../../../../Components/TextField/TextField';
import IconPhoto from '../../../../Components/Icons/Photo/Photo';
import EditIcon from '@material-ui/icons/Edit';

import useStyles from "./styles";



const Description = () => {
  const classes = useStyles();

  return (
    <Box className={classes.description_bloc}>
      {/* upload picture */}
      <Box className="upload_bloc">
        <input
          accept="image/*"
          className="upload_picture"
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file" className="upload_content">
            <IconPhoto /><span>Upload a picture </span>
        </label>
      </Box>
      
      {/* Forms content */}
      <Box className="form_bloc">
        <Box className="item_bloc">
          <Box className="title_bloc" component="header">
            <Typography variant="h2">Lorem Ipsum Sit Amet  </Typography>
            <IconButton aria-label="edit" className="btn_edit">
              <EditIcon/>
            </IconButton>
            <Typography className="subTitle" variant="h3">Basic informations</Typography>
          </Box>
          <Box className="content_bloc" component="section">
            <TextField label="Type project" id="TypeProject" placeholder="Type project" type="text" />
            <TextField label="Ville" id="VilleProject" placeholder="Ville " type="text" />

          </Box>
        </Box>

        <Box className="title_bloc">

        </Box>
      </Box>
    </Box>
  );
};

export default Description;
