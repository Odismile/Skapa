import React, { useRef, useState } from 'react';
import { Box, Button, Container, Typography, IconButton, TextField } from "@material-ui/core";
import { Link } from 'react-router-dom';
import classNames from "classnames";

import TextFieldComponent from '../../../../Components/TextField/TextField';
import IconPhoto from '../../../../Components/Icons/Photo/Photo';
import Calendar from '../../../../Components/Icons/Calendar/Calendar';
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
        <form className="formDescription">
          <Box className="item_bloc">
            <Box className="title_bloc" component="header">
              <Typography variant="h2">Lorem Ipsum Sit Amet  </Typography>
              <IconButton aria-label="edit" className="btn_edit">
                <EditIcon/>
              </IconButton>
              <Typography className="subTitle" variant="h3">Basic informations</Typography>
            </Box>
            <Box className="content_bloc" component="section">
              <Box className="field_item typeProject_item">
                <TextFieldComponent label="Type project" id="TypeProject" placeholder="Type project" type="text" />
              </Box>
              <Box className="field_item">
                <TextFieldComponent label="Ville" id="VilleProject" placeholder="Ville " type="text" />
              </Box>
              <Box className="grid_field">
                <Box className="field_item">
                <TextField
                  id="date"
                  label="Starts"
                  type="date"
                  variant="outlined"
                  defaultValue="12/05/21"
                  className="dateField"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                  {/* <IconButton aria-label="date" className="btn_append btn_datePicker">
                    <Calendar/>
                  </IconButton> */}
                </Box>
                {/* <Box className="field_item">
                  <TextFieldComponent label="Ends" id="EndsProject" placeholder="dd/mm/yy" type="text" />
                </Box> */}
              </Box>
            </Box>
          </Box>
          <Box className="item_bloc">

          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Description;
