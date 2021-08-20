import {
  Backdrop,
  Box,
  Button,
  Typography,
  Fade,
  Link,
  SwipeableDrawer,
  Hidden,
  Modal,
  InputLabel,
} from '@material-ui/core';

import useStyles from './styles';
import TextFieldComponent from '../../../Components/TextField/TextField';

import CalendarIcon from '../../../Components/Icons/Calendar/Calendar';
import Booking from '../../../Assets/images/booking.svg';
import { ChangeEvent, useState } from 'react';
import Calendar from '../../../Components/Calendar';
import { DateCallback } from 'react-calendar';
import { format } from 'date-fns';
import { useCreateBook } from '../../../Providers/TalentProvider/useCreateBook';
import { TimeType } from '../../../types/types';
import { useCurrentUser } from '../../../Providers/UserProvider/hooks/useCurrentUser';

interface MeetingModalProps {
  coachId: string;
  coachName: string;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}
const MeetingModal = (props: MeetingModalProps) => {
  const classes = useStyles();
  const { open, handleClose: handleCloseProp, handleOpen, coachId, coachName } = props;
  const { user, profilId } = useCurrentUser();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [step, setStep] = useState(0);
  const [createBookMutation] = useCreateBook();
  const [time, setTime] = useState<TimeType>({
    h: '00',
    mn: '00',
    ms: '00',
    s: '00',
  });

  const handleClose = () => {
    setStep(0);
    handleCloseProp();
  };
  const handleChangeDay: DateCallback = (value, event) => {
    event.preventDefault();
    setDate(value);
  };
  const handleChangeTime = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const [h, mn] = event.target.value.split(':');
    setTime({
      ...time,
      h,
      mn,
    });
  };
  const handleCreateBook = () => {
    if (!date || !time) return;
    createBookMutation({
      variables: {
        input: {
          data: {
            created_by: profilId,
            coach_id: coachId,
            date_start: date,
            date_end: date,
            end_time: `${time?.h || '00'}:${time?.mn || '00'}:${time?.s || '00'}:${time?.ms || '00'}`,
            start_time: `${time?.h || '00'}:${time?.mn || '00'}:${time?.s || '00'}:${time?.ms || '00'}`,
          },
        },
      },
    }).then((res) => res.data?.createBook && setStep(1));
  };
  const content = (
    <Fade in={open}>
      <Box className={classes.paperCalendar}>
        <Button disabled={!date} variant="contained" className="btn_handleDrawer" onClick={handleClose}></Button>
        {step === 0 ? (
          <Box className="content_calendar" style={{ display: 'block' }}>
            <Box className="header_calendar" component="header">
              <h2 id="transition-modal-title">Date and Time</h2>
              <Button color="primary" variant="contained" className="btn_book" onClick={handleCreateBook}>
                Book
              </Button>
            </Box>
            <Box className="body_calendar" component="section">
              <Box className="field_item">
                <InputLabel>Your selection</InputLabel>
                <div
                  style={{
                    display: 'flex',
                  }}
                >
                  <TextFieldComponent
                    id="date-meeting"
                    placeholder="dd/mm/yyyy"
                    type="text"
                    value={date ? format(date, 'dd/MM/yyyy') : ''}
                    icons={<CalendarIcon />}
                  />
                  <TextFieldComponent
                    id="time"
                    type="time"
                    defaultValue="07:30"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleChangeTime}
                    inputProps={{
                      step: 3600, // 60 min
                    }}
                  />
                </div>
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
                You’ve booked an appointment with <span className="purple_text">{coachName}</span> for the{' '}
                <span className="purple_text">{date ? format(date, 'dd/MM/yy') : ''}</span> at{' '}
                <span className="purple_text">{`${time.h}:${time.mn}`}</span>
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
      <Hidden lgUp={true}>
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
