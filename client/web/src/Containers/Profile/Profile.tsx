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
          </FormControl>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
