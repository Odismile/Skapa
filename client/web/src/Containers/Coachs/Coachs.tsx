import React, { useState } from 'react';
import {
  Backdrop,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  Modal,
  TextField,
  Typography,
  Fade,
  Link,
  SwipeableDrawer,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
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
import Cross from '../../Components/Icons/Cross/Cross';

// images
import coachPhoto from '../../Assets/images/coach_avatar.png';
import DesignThinkerPicto from '../../Assets/images/thinker_picto.png';
import Booking from '../../Assets/images/booking.svg';
import { useQuery, useReactiveVar } from '@apollo/client';
import { filterTalentVar } from '../../ReactiveVariable/Coach/coach';
import { coachsVariables, coachs } from '../../GraphQL/profiles/types/coachs';
import { LIST_COACH } from '../../GraphQL/profiles/query';

const Coachs = () => {
  const classes = useStyles();

  const [date, changeDate] = useState(new Date());
  const [openCalendar, setOpenCalendar] = useState(false);
  const handleOpen = () => {
    setOpenCalendar(true);
  };
  const handleClose = () => {
    setOpenCalendar(false);
  };

  const filterTalent = useReactiveVar(filterTalentVar);
  const { data, loading } = useQuery<coachs, coachsVariables>(LIST_COACH, {
    variables: {
      where: {
        profile_type_id: {
          label: 'Coach',
        },
      },
    },
  });
  const listCoachs = (data?.profiles || []).filter(
    (item) =>
      item &&
      item?.users_id &&
      (`${item?.users_id?.username}${item?.users_id?.surname}${item?.users_id?.lastname}${item?.users_id?.email}`
        .toLowerCase()
        .includes(filterTalent.search.toLowerCase()) ||
        `${item?.position}`.toLowerCase().includes(filterTalent.search.toLowerCase())),
  );
  return (
    <Box className={classes.mainPage}>
      <PrimaryHeader />
      <Box className="wrapPage">
        <SearchFilterTalents />
        {/* List coachs */}
        <Box className={classes.list_coachs}>
          <Box className="item_bloc">
            {/* <Typography className="titre_item" component="h2">
              Design Thinking Process
            </Typography> */}
            <Box className="item_list">
              {loading &&
                Array.from(Array(3).keys()).map(() => (
                  <Skeleton
                    width={'90%'}
                    height="100px"
                    style={{
                      margin: 'auto',
                    }}
                  />
                ))}

              {listCoachs.map((profil) => (
                <CoachsItem
                  coachPhoto={profil?.picture || coachPhoto}
                  iconJob={DesignThinkerPicto}
                  jobTitle={profil?.position || ''}
                  coachName={profil?.users_id?.username || ''}
                  coachAddress={''}
                  coachLevel={profil?.job_seniority_id?.label || ''}
                  clickAction={handleOpen}
                  // coachFee={500}
                />
              ))}
            </Box>
          </Box>

          {/* <Box className="item_bloc">
            <Typography className="titre_item" component="h2">
              Digitalization Process
            </Typography>
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
          </Box> */}
        </Box>
      </Box>
      <SwipeableDrawer
        className={classes.modalCalendar}
        anchor="bottom"
        open={openCalendar}
        onClose={handleClose}
        onOpen={handleOpen}
        closeAfterTransition
        classes={{
          paper: classes.paperDrawer
        }}
        // BackdropComponent={Backdrop}
        // BackdropProps={{
        //   timeout: 500,
        // }}
      >
        <Fade in={openCalendar}>
          <Box className={classes.paperCalendar}>
            <Button variant="contained" className="btn_handleDrawer" onClick={handleClose}></Button>
            <Box className="content_calendar" style={{ display: 'block' }}>
              <Box className="header_calendar" component="header">
                <h2 id="transition-modal-title">Date and Time</h2>
                <Button color="primary" variant="contained" className="btn_book">
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
                    //value= {moment(startDate).format('h:mm')}
                    value=""
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
              <Box className="text_bloc">
                <Typography>
                  You’ve booked an appointment with <span className="purple_text">Louis Tomaso</span> for the{' '}
                  <span className="purple_text">12/05/21</span> at <span className="purple_text">10 A.M</span>
                </Typography>
                <Link className="link">Add the meeting to your Google Calendar</Link>
              </Box>
            </Box>
          </Box>
        </Fade>
      </SwipeableDrawer>
    </Box>
  );
};

export default Coachs;
