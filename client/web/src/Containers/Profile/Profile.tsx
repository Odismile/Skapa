import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@material-ui/core';
import React from 'react';
import PrimaryHeader from '../../Components/Header';
import useStyles from './styles';

import image_profile from '../../Assets/images/image_profile.png';
import image_organisation from '../../Assets/images/organisation.png';
import TextFieldComponent from '../../Components/TextField/TextField';

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
            <Box className="user">
              <figure className="user-organisation-image">
                <img src={image_organisation} alt="user-organisation" />
              </figure>
              <figure className="user-profile">
                <img src={image_profile} alt="profile" />
              </figure>
            </Box>
            <Box className="perso-information">
              <Typography component="h2">Personal informations</Typography>
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
              <Box className="content_bloc language-level-bloc">
                <FormLabel component="legend">Languages level</FormLabel>
              </Box>
              <Box className="content_bloc skills_bloc" component="section">
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
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
