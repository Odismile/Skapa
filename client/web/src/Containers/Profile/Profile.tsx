import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Slider, TextareaAutosize, Typography } from '@material-ui/core';
import React from 'react';
import PrimaryHeader from '../../Components/Header';
import useStyles from './styles';

import image_profile from '../../Assets/images/image_profile.png';
import image_organisation from '../../Assets/images/organisation.png';
import TextFieldComponent from '../../Components/TextField/TextField';
import LanguagesChoice from '../../Components/LanguagesChoice/LanguagesChoice';
import ReactPlayer from 'react-player';

const Profile = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('junior');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <>
      <Box className={classes.root}>
      <PrimaryHeader />
        <Box className={classes.mainContainer}>
          <FormControl component="fieldset" className={classes.form}>
            <Box className="user box-item">
              <figure className="user-organisation-image">
                <img src={image_organisation} alt="user-organisation" />
              </figure>
              <figure className="user-profile">
                <img src={image_profile} alt="profile" />
              </figure>
              <Box className="upload-profile">
                <input
                  accept="image/*"
                  className="upload_picture"
                  id="contained-button-file-picture"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file-picture" className="upload_content">Change picture</label>
              </Box>
            </Box>
            <Box className="perso-information box-item">
              <Typography component="h2" className="box-title">Personal informations</Typography>
              <TextFieldComponent
                name="name"
                id="name"
                label="Your name"
                type="text"
                value="Alexander Logan"
              />
              <TextFieldComponent
                name="email"
                id="email"
                label="Email"
                type="text"
                value="alex.logan@grtgaz.fr"
              />
              <TextFieldComponent
                name="phone"
                id="phone"
                label="Phone"
                type="text"
                value="+33 6 78 56 43 56"
              />
              <TextFieldComponent
                name="position"
                id="position"
                label="Your position"
                type="text"
                value="UX Designer"
              />
              <TextFieldComponent
                name="organisation"
                id="organisation"
                label="Name of your organisation"
                type="text"
                value="GRT gaz"
              />
              <Box className="content_bloc job_bloc" component="section">
                <FormLabel component="legend">Job seniority</FormLabel>
                <RadioGroup aria-label="jobseniority" name="jobseniority1" value={value}  onChange={handleChange} className="job-radio">
                <FormControlLabel 
                  value="junior"
                  classes={{root: classes.formControlLabelRoot, label: classes.formControlLabel}}
                  control={<Radio disableRipple
                  classes={{root: classes.radio, checked: classes.checked}} />}
                  label="Junior" />
                <FormControlLabel
                  value="senior"
                  classes={{root: classes.formControlLabelRoot, label: classes.formControlLabel}}
                  control={<Radio disableRipple
                  classes={{root: classes.radio, checked: classes.checked}} />}
                  label="Senior" />
              </RadioGroup>
              </Box>
              <Box className="content_bloc language-bloc">
                <FormLabel component="legend">Languages level</FormLabel>
                <LanguagesChoice title="French" name="french" id=""  test={()=>{}}/>
                <LanguagesChoice title="English" name="english" id=""  test={()=>{}}/>
                <LanguagesChoice title="Spanish" name="spanish" id=""  test={()=>{}}/>
              </Box>
              </Box>
            <Box className="bio box-item">
              <Typography component="h2" className="box-title">Bio</Typography>
              <Box className="field_item textarea_item">
                <TextareaAutosize
                  minRows="3"
                  className="textarea_input"
                  placeholder="Lorem Ipsum"
                  defaultValue=""
                  value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  maxLength={240}
                />
              </Box>
            </Box>
            <Box className="skills box-item">
              <Typography component="h2" className="box-title">Skills</Typography>
              <Box className="content_bloc skills-bloc" component="section">
                <FormLabel component="legend">Skills</FormLabel>
                <Box className="selected_skills">
                  <Box className="inputGroup">
                    <input id="Adobe_XD_selected" name="Adobe XD" type="checkbox" />
                    <label htmlFor="Adobe_XD_selected">Adobe XD</label>
                  </Box>
                </Box>
                <Box className="all_skills">
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
                </Box>
              </Box>
            </Box>
            <Box className="pitch box-item">
              <Typography component="h2" className="box-title">Pitch</Typography>
              <ReactPlayer
                  url='' 
                  className={classes.videoUpload}
                  width={'100%'}
                  height={'168px'}
                  playing={true}
                  controls={true}
              />
              <Box className="upload-video">
              <input
                  accept="video/*"
                  className="upload_picture"
                  id="contained-button-file-video"
                  type="file"
                />
                <label htmlFor="contained-button-file-video">Download another pitch</label>
              </Box>
            </Box>
            <Box className="daily-rate box-item">
              <Typography component="h2" className="box-title">Daily Rate</Typography>
              <Typography className="money">880£</Typography>
                <Typography className="text">The average rate for yout type of profile is 750 $</Typography>
                <Slider
                  orientation="horizontal"
                  value={800}
                  aria-labelledby="vertical-slider"
                  valueLabelDisplay="on"
                  classes={{ valueLabel:classes.labelrate }}
                  max={1600}
                />
            </Box>
            <Box className={classes.btnvalidate}>
            <Button variant="contained" >
              Validate changes
            </Button>
          </Box>
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
