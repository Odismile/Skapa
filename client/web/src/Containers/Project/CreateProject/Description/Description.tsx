import React from 'react';
import { Box, IconButton, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Info from '../../../../Components/Icons/Info/Info';
import IconPhoto from '../../../../Components/Icons/Photo/Photo';
import TextFieldComponent from '../../../../Components/TextField/TextField';
import useStyles from './styles';

const Description = () => {
  const classes = useStyles();
  return (
    <Box className={classes.description}>
      {/* upload picture */}
      <Box className="upload_bloc">
        <input accept="image/*" className="upload_picture" id="contained-button-file" multiple type="file" />
        <label htmlFor="contained-button-file" className="upload_content">
          <IconPhoto />
          <span>Upload a picture </span>
        </label>
      </Box>

      {/* Forms content */}
      <Box className="form_bloc">
        <form className="formDescription">
          <Box className="item_bloc">
            <Box className="title_bloc" component="header">
              <Typography variant="h2">Lorem Ipsum Sit Amet </Typography>
              <IconButton aria-label="edit" className="btn_edit btn_title">
                <EditIcon />
              </IconButton>
              <Typography className="subTitle" variant="h3">
                Basic informations
              </Typography>
            </Box>
            <Box className="content_bloc" component="section">
              <Box className="field_item typeProject_item">
                <TextFieldComponent label="Type project" id="TypeProject" placeholder="Type project" type="text" />
              </Box>
              <Box className="field_item">
                <TextFieldComponent label="Ville" id="VilleProject" placeholder="Ville " type="text" />
              </Box>
              <Box className="grid_field">
                <Box className="field_item field_date">
                  <TextField
                    id="dateStarts"
                    label="Starts"
                    type="date"
                    defaultValue="12/05/21"
                    className="input_date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
                <Box className="field_item field_date">
                  {/* <DatePicker
                    label="Basic example"
                    value={selectedDate}
                    onChange={handleDateChange}
                    animateYearScrolling
                  /> */}

                  <TextField
                    id="dateEnd"
                    label="Ends"
                    type="date"
                    defaultValue="12/05/21"
                    className="input_date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="item_bloc">
            <Box className="title_bloc" component="header">
              <Typography variant="h2">Project description</Typography>
              <IconButton aria-label="info" className="btn_info btn_title">
                <Info />
              </IconButton>
            </Box>
            <Box className="content_bloc" component="section">
              <Box className="field_item textarea_item">
                <TextareaAutosize minRows="8" className="textarea_input" placeholder="Lorem Ipsum" defaultValue="" />
                <Typography className="textLeft">0/240 symbols</Typography>
              </Box>
            </Box>
          </Box>
          <Box className="item_bloc">
            <Box className="title_bloc" component="header">
              <Typography variant="h2">Skills recquired</Typography>
              <IconButton aria-label="info" className="btn_info btn_title">
                <Info />
              </IconButton>
            </Box>
            <Box className="content_bloc skills_bloc" component="section">
              <Box className="selected_skills">
                <Box className="inputGroup">
                  <input id="Adobe_XD_selected" name="Adobe XD" type="checkbox" />
                  <label htmlFor="Adobe_XD_selected">Adobe XD</label>
                </Box>
              </Box>
              {/* <Box className="all_skills">
                <Box className="inputGroup selected">
                  <input id="Adobe_XD" name="Adobe XD" type="checkbox" />
                  <label htmlFor="Adobe_XD">Adobe XD</label>
                </Box>
                <Box className="inputGroup">
                  <input id="UX_Design" name="UX Design" type="checkbox" />
                  <label htmlFor="UX_Design">UX Design</label>
                </Box>
                <Box className="inputGroup">
                  <input id="Scribing" name="Scribing" type="checkbox" />
                  <label htmlFor="Scribing">Scribing</label>
                </Box>
                <Box className="inputGroup">
                  <input id="3D" name="3D" type="checkbox" />
                  <label htmlFor="3D">3D</label>
                </Box>
                <Box className="inputGroup">
                  <input id="after_Effect" name="After Effect" type="checkbox" />
                  <label htmlFor="after_Effect">After Effect</label>
                </Box>
                <Box className="inputGroup">
                  <input id="Design_Sprint" name="Design Sprint" type="checkbox" />
                  <label htmlFor="Design_Sprint">Design Sprint</label>
                </Box>
                <Box className="inputGroup">
                  <input id="Illustrator" name="Illustrator" type="checkbox" />
                  <label htmlFor="Illustrator">Illustrator</label>
                </Box>
                <Box className="inputGroup selected">
                  <input id="Photoshop" name="Photoshop" type="checkbox" />
                  <label htmlFor="Photoshop">Photoshop</label>
                </Box>
                <Box className="inputGroup">
                  <input id="UX_Design_2" name="UX Design" type="checkbox" />
                  <label htmlFor="UX_Design_2">UX Design</label>
                </Box>
                <Box className="inputGroup">
                  <input id="Scribing_2" name="Scribing" type="checkbox" />
                  <label htmlFor="Scribing_2">Scribing</label>
                </Box>
                <Box className="inputGroup">
                  <input id="3D_2" name="3D" type="checkbox" />
                  <label htmlFor="3D_2">3D</label>
                </Box>
                <Box className="inputGroup">
                  <input id="after_Effect_2" name="After Effect" type="checkbox" />
                  <label htmlFor="after_Effect_2">After Effect</label>
                </Box>
                <Box className="inputGroup">
                  <input id="Design_Sprint_2" name="Design Sprint" type="checkbox" />
                  <label htmlFor="Design_Sprint_2">Design Sprint</label>
                </Box>
                <Box className="inputGroup">
                  <input id="Illustrator_2" name="Illustrator" type="checkbox" />
                  <label htmlFor="Illustrator_2">Illustrator</label>
                </Box>
                <Box className="inputGroup">
                  <input id="Photoshop_2" name="Photoshop" type="checkbox" />
                  <label htmlFor="Photoshop_2">Photoshop</label>
                </Box>
              </Box> */}
            </Box>
          </Box>
          <Box className="item_bloc">
            <Box className="title_bloc" component="header">
              <Typography variant="h2">Video Pitch</Typography>
              <IconButton aria-label="info" className="btn_info btn_title">
                <Info />
              </IconButton>
            </Box>
            <Box className="content_bloc videoPitch_bloc" component="section">
              <Box className="upload_bloc">
                <input accept="videos/*" className="upload_picture" id="contained-button-file" multiple type="file" />
                <label htmlFor="contained-button-file" className="upload_content">
                  <IconPhoto />
                  <span>
                    Upload a video <br />
                    (youtube, mp4.)
                  </span>
                </label>
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Description;
