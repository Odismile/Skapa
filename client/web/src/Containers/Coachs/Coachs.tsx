import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Link,
  Typography,
  Modal,
  Backdrop,
  Fade
} from '@material-ui/core';

// date picker
import { DatePicker } from "@material-ui/pickers";

// component
import PrimaryHeader from '../../Components/Header/Header';
import DailyRate from '../../Components/DailyRate/DailyRate';
import CoachsItem from './CoachsItem/CoachsItem';
import SearchFilterTalents from '../../Components/SearchFilterTalents/SearchFilterTalents';
import TextFieldComponent from '../../Components/TextField/TextField';


import useStyles from './styles';

// icons 
import Award from '../../Components/Icons/Award/Award';
import Calendar from '../../Components/Icons/Calendar/Calendar';
import Clock from '../../Components/Icons/Clock/Clock';
import Filter from '../../Components/Icons/Filter';
import Search from '../../Components/Icons/Search';
import Cross from '../../Components/Icons/Cross/Cross';


// images
import coachPhoto from '../../Assets/images/coach_avatar.png';
import DesignThinkerPicto from '../../Assets/images/thinker_picto.png';
import Booking from '../../Assets/images/booking.svg';


const Coachs = () => {
  const classes = useStyles();

  const [openCalendar, setOpenCalendar] = React.useState(false);
  const handleOpen = () => {
    setOpenCalendar(true);
  };
  const handleClose = () => {
    setOpenCalendar(false);
  };

  const [date, changeDate] = useState(new Date());

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
              <IconButton className="btn_close" onClick={handleClose}>
                <Cross />
              </IconButton >
            <Box className="content_calendar" style={{display:'block'}}>
              <Box className="header_calendar" component="header">
                <h2 id="transition-modal-title">Date and Time</h2>
                <Button color="primary" variant="contained" className="btn_book">Book</Button>
              </Box>
              <Box className="body_calendar" component="section">
                <Box className="field_item">
                  <TextFieldComponent
                    label= "Your selection"
                    id= "date-meeting"
                    placeholder="dd/mm/yyyy"
                    type= "text"
                    //value= {moment(startDate).format('h:mm')}
                    value= ""
                    icons={<Calendar />}
                  />
                </Box>
                <Box className="dateInline_bloc">
                {/* <DatePicker
                  autoOk
                  variant="static"
                  openTo="year"
                  value={date}
                  onChange={changeDate}
                /> */}
                </Box>
              </Box>
            </Box>

            <Box className="valid_calendar">
              <h2>Thank you !</h2>
              <Box className="img_path">
                <img src={Booking} alt="Booking" />
              </Box>
              <Box className="text_bloc" >
                <Typography>
                  You’ve booked an appointment with <span className="purple_text">Louis Tomaso</span>                  for the <span className="purple_text">12/05/21</span> at <span className="purple_text">10 A.M</span> 
                </Typography>
                <Link className="link">Add the meeting to your Google Calendar</Link>
            </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Coachs;
