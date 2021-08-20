import { Backdrop, Box, Button, Typography, Fade, Link, SwipeableDrawer, Hidden, Modal } from '@material-ui/core';

import useStyles from './styles';
import TextFieldComponent from '../../../Components/TextField/TextField';

import CalendarIcon from '../../../Components/Icons/Calendar/Calendar';
import Booking from '../../../Assets/images/booking.svg';
import { useState } from 'react';
import Calendar from '../../../Components/Calendar';
import { DateCallback } from 'react-calendar';
import { format } from 'date-fns';
interface MeetingModalProps {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}
const MeetingModal = (props: MeetingModalProps) => {
  const classes = useStyles();
  const { open, handleClose, handleOpen } = props;
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [step, setStep] = useState(0);
  const handleValidateMeeting = () => {
    setStep(1);
  };
  const handleChangeDay: DateCallback = (value, event) => {
    event.preventDefault();
    setDate(value);
  };
  const content = (
    <Fade in={open}>
      <Box className={classes.paperCalendar}>
        <Button variant="contained" className="btn_handleDrawer" onClick={handleClose}></Button>
        {step === 0 ? (
          <Box className="content_calendar" style={{ display: 'block' }}>
            <Box className="header_calendar" component="header">
              <h2 id="transition-modal-title">Date and Time</h2>
              <Button color="primary" variant="contained" className="btn_book" onClick={handleValidateMeeting}>
                Book
              </Button>
            </Box>
            <Box className="body_calendar" component="section">
              <Box className="field_item">
                <TextFieldComponent
                  label="Your selection"
                  id="date-meeting"
                  placeholder="dd/mm/yyyy"
                  type="text"
                  value={date ? format(date, 'dd/MM/yyyy') : ''}
                  icons={<CalendarIcon />}
                />
              </Box>
              <Box className="dateInline_bloc">
                <Calendar onClickDay={handleChangeDay} />
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
        ) : (
          <Box className="valid_calendar">
            <h2>Thank you !</h2>
            <Box className="img_path">
              <img src={Booking} alt="Booking" />
            </Box>
            <Box className="text_bloc">
              <Typography>
                You’ve booked an appointment with <span className="purple_text">Louis Tomaso</span> for the{' '}
                <span className="purple_text">12/05/21</span> at <span className="purple_text">10 A.M</span>
              </Typography>
              <Link className="link">Add the meeting to your Google Calendar</Link>
            </Box>
          </Box>
        )}
      </Box>
    </Fade>
  );
  return (
    <>
      <Hidden mdUp={true}>
        <SwipeableDrawer
          className={classes.drawerCalendar}
          anchor="bottom"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          closeAfterTransition
          classes={{
            paper: classes.paperDrawer,
          }}
        >
          {content}
        </SwipeableDrawer>
      </Hidden>
      <Hidden mdDown={true}>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modalCalendar}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          {content}
        </Modal>
      </Hidden>
    </>
  );
};

export default MeetingModal;
