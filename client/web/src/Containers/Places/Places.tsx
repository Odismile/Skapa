import React from 'react';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputBase,
  Paper,
  Popper,
  Switch,
  TextField,
  Typography,
} from '@material-ui/core';
import DailyRate from '../../Components/DailyRate/DailyRate';
import Filter from '../../Components/Icons/Filter';
import Search from '../../Components/Icons/Search';
import Place from '../../Components/Place/Place';
import RadioExtInt from '../../Components/RadioExtInt/RadioExtInt';
import useStyles from './styles';
import Capacity from '../../Components/Capacity/Capacity';

const Places = () => {
  const classes = useStyles();

  //Simple popper
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <>
      <Box className={classes.content}>
        <RadioExtInt />
      </Box>
      <Box className="search-bloc">
        <Paper component="form" className={classes.root}>
          <Box className="input-search">
            <InputBase
              className={classes.input}
              placeholder="Look for projects by title, type, creator.."
              inputProps={{ 'aria-label': 'Look for projects by title, type, creator..' }}
            />
            <IconButton className="search-icon" aria-label="search">
              <Search />
            </IconButton>
          </Box>
          <IconButton
            color="primary"
            className="filter-icon"
            aria-label="directions"
            aria-describedby={id}
            onClick={handleClick}
          >
            <Filter />
          </IconButton>
          <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-start">
            <Box className={classes.searchProject}>
              <FormControl component="fieldset" className="form-control">
                <Box className="form-control-item">
                  <Typography component="h2">Around me</Typography>
                  <Box className="filter-content">
                    <Box className="form-switch-item">
                      <FormControlLabel
                        value="start"
                        control={
                          <Switch
                            classes={{
                              root: classes.SwitchAroundMe,
                              switchBase: classes.switchBase,
                              thumb: classes.thumb,
                              track: classes.track,
                              checked: classes.checked,
                            }}
                          />
                        }
                        label="Show only places around me"
                        labelPlacement="start"
                      />
                    </Box>
                    <Box className="form-switch-item">
                      <FormControlLabel
                        value="start"
                        control={
                          <Switch
                            classes={{
                              root: classes.SwitchAroundMe,
                              switchBase: classes.switchBase,
                              thumb: classes.thumb,
                              track: classes.track,
                              checked: classes.checked,
                            }}
                          />
                        }
                        label="Show all places"
                        labelPlacement="start"
                      />
                    </Box>
                  </Box>
                </Box>
                <Box className="form-control-item">
                  <Typography component="h2">Availability</Typography>
                  <Box className="filter-content">
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
                <Box className="form-control-item">
                  <Typography component="h2">Capacity</Typography>
                  <Box className="filter-content">
                    <Capacity />
                  </Box>
                </Box>
                <Box className="form-control-item">
                  <Typography component="h2">Daily Rent</Typography>
                  <Box className="filter-content">
                    <DailyRate />
                  </Box>
                </Box>
                <Box className="form-control-item">
                  <Typography component="h2">Equipement</Typography>
                  <Box className="form-control-content">
                    <FormControlLabel
                      className="form-control-label"
                      value="Latest"
                      control={
                        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="form-checkbox" />
                      }
                      label="Latest"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      className="form-control-label"
                      value="Oldest"
                      control={
                        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="form-checkbox" />
                      }
                      label="Oldest"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      className="form-control-label"
                      value="Latest"
                      control={
                        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="form-checkbox" />
                      }
                      label="Latest"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      className="form-control-label"
                      value="Latest"
                      control={
                        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} className="form-checkbox" />
                      }
                      label="Latest"
                      labelPlacement="start"
                    />
                  </Box>
                </Box>
              </FormControl>
            </Box>
          </Popper>
        </Paper>
      </Box>
      <Box className={classes.box}>
        <Place />
      </Box>
      <Box className={classes.box}>
        <Place />
      </Box>
    </>
  );
};

export default Places;
