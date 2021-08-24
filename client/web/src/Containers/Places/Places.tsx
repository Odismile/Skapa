import React from 'react';
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputBase,
  Modal,
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
import Cross from '../../Components/Icons/Cross';
import { useLocation } from 'react-router-dom';
import CheckboxLine from '../../Components/Icons/CheckboxLine';
import CheckboxChecked from '../../Components/Icons/CheckboxChecked';
import { useTranslation } from 'react-i18next';

const Places = () => {
  const t = useTranslation();
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const params = useLocation();
  return (
    <>
      {params.pathname != '/wishlist' && (
        <Box className={classes.content}>
          <RadioExtInt />
        </Box>
      )}
      <Box className="search-bloc">
        <Paper component="form" className={classes.root}>
          <Box className="input-search">
            <InputBase
              className={classes.input}
              placeholder="Look for one of your favorite"
              inputProps={{ 'aria-label': 'Look for one of your favorite' }}
            />
            <IconButton className="search-icon" aria-label="search">
              <Search />
            </IconButton>
          </Box>
          <IconButton color="primary" className="filter-icon" onClick={handleOpen}>
            <Filter />
          </IconButton>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            className={classes.modal}
          >
            <Box className="modal-content">
              <Box className="modal-top">
                <Typography component="h2" className="modal-title">
                  Filter
                </Typography>
                <IconButton className="btn-close" onClick={handleClose}>
                  <Cross />
                </IconButton>
              </Box>
              <Box className="modal-body">
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
                            <Checkbox
                              inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                              className="form-checkbox"
                              icon= {<CheckboxLine fontSize='small' />}
                              checkedIcon={<CheckboxChecked fontSize='small'/>}
                            />
                          }
                          label="Latest"
                          labelPlacement="start"
                        />
                        <FormControlLabel
                          className="form-control-label"
                          value="Oldest"
                          control={
                            <Checkbox
                              inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                              className="form-checkbox"
                              icon= {<CheckboxLine fontSize='small' />}
                              checkedIcon={<CheckboxChecked fontSize='small'/>}
                            />
                          }
                          label="Oldest"
                          labelPlacement="start"
                        />
                        <FormControlLabel
                          className="form-control-label"
                          value="Latest"
                          control={
                            <Checkbox
                              inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                              className="form-checkbox"
                              icon= {<CheckboxLine fontSize='small' />}
                              checkedIcon={<CheckboxChecked fontSize='small'/>}
                            />
                          }
                          label="Latest"
                          labelPlacement="start"
                        />
                        <FormControlLabel
                          className="form-control-label"
                          value="Latest"
                          control={
                            <Checkbox
                              inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                              className="form-checkbox"
                              icon= {<CheckboxLine fontSize='small' />}
                              checkedIcon={<CheckboxChecked fontSize='small'/>}
                            />
                          }
                          label="Latest"
                          labelPlacement="start"
                        />
                      </Box>
                    </Box>
                  </FormControl>
                </Box>
              </Box>
            </Box>
          </Modal>
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
