import React from 'react';
import { Box, IconButton, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import Skeleton from 'react-loading-skeleton';
import EditIcon from '@material-ui/icons/Edit';
import Info from '../../../../Components/Icons/Info/Info';
import IconPhoto from '../../../../Components/Icons/Photo/Photo';
import TextFieldComponent from '../../../../Components/TextField/TextField';
import useStyles from './styles';
import { useItemsGetSkills } from '../../../../Providers/ItemsProvider/hooks/useItemsGetSkills';

const Description = () => {
  const classes = useStyles();

  const { data, loading } = useItemsGetSkills();

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
              <Box className="all_skills">
                {loading && (
                  <Box className="inputGroup">
                    <Skeleton count={3} height={25} />
                  </Box>
                )}

                {!loading &&
                  data?.items?.map((skill, index) => {
                    return (
                      <Box className="inputGroup" key={index}>
                        <input id={skill?.id ?? ''} name={skill?.label ?? ''} type="checkbox" />
                        <label htmlFor="UX_Design">{skill?.label}</label>
                      </Box>
                    );
                  })}
              </Box>
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
