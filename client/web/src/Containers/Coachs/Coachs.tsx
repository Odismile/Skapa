import React, { useState } from 'react' ;
import {
  Box,
  Button,
  List, 
  ListItem,
  TextField,
  Typography,
  Modal,
  Backdrop,
  Fade
} from '@material-ui/core';

// date picker
import DatePicker from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";



import PrimaryHeader from '../../Components/Header/Header';
import DailyRate from '../../Components/DailyRate/DailyRate';
import Filter from '../../Components/Icons/Filter';
import Search from '../../Components/Icons/Search';


import useStyles from './styles';
import CoachsItem from './CoachsItem/CoachsItem';
import SearchFilterTalents from '../../Components/SearchFilterTalents/SearchFilterTalents';
import TextFieldComponent from '../../Components/TextField/TextField';

// icons 
import Award from '../../Components/Icons/Award/Award';
import Calendar from '../../Components/Icons/Calendar/Calendar';
import Clock from '../../Components/Icons/Clock/Clock';


// images
import coachPhoto from '../../Assets/images/coach_avatar.png';
import DesignThinkerPicto from '../../Assets/images/thinker_picto.png';

const Coachs = () => {
  const classes = useStyles();

  const [openCalendar, setOpenCalendar] = React.useState(false);
  const handleOpen = () => {
    setOpenCalendar(true);
  };
  const handleClose = () => {
    setOpenCalendar(false);
  };

  const [startDate, setStartDate] = useState(new Date());

  return (
    <Box className={classes.mainPage}>
      <PrimaryHeader />
      <Box className="wrapPage">
        <SearchFilterTalents />
        {/* List coachs */}
          <Box className={classes.list_coachs}>
            <Box className="item_bloc">
              <Typography className="titre_item" component="h2">Design Thinking Process</Typography>
              <Box className="item_list">
                <CoachsItem 
                  coachPhoto={coachPhoto} 
                  iconJob={DesignThinkerPicto}  
                  jobTitle="Design Thinker"
                  coachName="Louis Tomaso"
                  coachAddress="Paris"
                  coachLevel="Senior"
                  coachFee= {500}
                  clickAction= {handleOpen}
                />
                <CoachsItem 
                  coachPhoto={coachPhoto} 
                  iconJob={DesignThinkerPicto}  
                  jobTitle="Design Thinker"
                  coachName="Louis Tomaso"
                  coachAddress="Paris"
                  coachLevel="Senior"
                  coachFee= {500}
                  clickAction= {handleOpen}
                />
              </Box>
            </Box>

            <Box className="item_bloc">
              <Typography className="titre_item" component="h2">Design to Change Process</Typography>
              <Box className="item_list">
                <CoachsItem 
                  coachPhoto={coachPhoto} 
                  iconJob={DesignThinkerPicto}  
                  jobTitle="Design Thinker"
                  coachName="Louis Tomaso"
                  coachAddress="Paris"
                  coachLevel="Senior"
                  coachFee= {500}
                  clickAction= {handleOpen}
                />
                <CoachsItem 
                  coachPhoto={coachPhoto} 
                  iconJob={DesignThinkerPicto}  
                  jobTitle="Design Thinker"
                  coachName="Louis Tomaso"
                  coachAddress="Paris"
                  coachLevel="Senior"
                  coachFee= {500}
                  clickAction= {handleOpen}
                />
              </Box>
            </Box>

            <Box className="item_bloc">
              <Typography className="titre_item" component="h2">Digitalization Process</Typography>
              <Box className="item_list">
                <CoachsItem 
                  coachPhoto={coachPhoto} 
                  iconJob={DesignThinkerPicto}  
                  jobTitle="Design Thinker"
                  coachName="Louis Tomaso"
                  coachAddress="Paris"
                  coachLevel="Senior"
                  coachFee= {500}
                  clickAction= {handleOpen}
                />
              </Box>
            </Box>
            <Box className="item_bloc">
              <Typography className="titre_item" component="h2">UX Process</Typography>
              <Box className="item_list">
                <CoachsItem 
                  coachPhoto={coachPhoto} 
                  iconJob={DesignThinkerPicto}  
                  jobTitle="Design Thinker"
                  coachName="Louis Tomaso"
                  coachAddress="Paris"
                  coachLevel="Senior"
                  coachFee= {500}
                  clickAction= {handleOpen}
                />
              </Box>
            </Box>
            
          </Box>
      </Box>
    
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modalCalendar}
        open={openCalendar}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openCalendar}>
          <Box className={classes.paperCalendar} >
            <Box className="header_calendar" component="header">
              <h2 id="transition-modal-title">Date and Time</h2>
              <Button color="secondary" variant="contained" className="btn_book">
                Book
              </Button>
            </Box>
            <Box className="body_calendar" component="section">
              <Box className="field_item">
                <TextFieldComponent
                  label= "Your selection"
                  id= "date-meeting"
                  placeholder="dd/mm/yyyy"
                  type= "text"
                  value= {moment(startDate).format('h:mm')}
                  icons={<Calendar />}
                />
              </Box>
              <DatePicker 
                dateFormat="dd/MM/yyyy"
                selected={startDate}
                onChange={(date:any) => setStartDate(date)}
                inline
              />

              <DatePicker
                selected={startDate}
                onChange={(date:any) => setStartDate(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                inline
              />


            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Coachs;
