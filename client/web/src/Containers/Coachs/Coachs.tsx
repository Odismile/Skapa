import  { useState } from 'react';
import {
  Box,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import PrimaryHeader from '../../Components/Header/Header';

import useStyles from './styles';
import CoachsItem from './CoachsItem/CoachsItem';
import SearchFilterTalents from '../../Components/SearchFilterTalents/SearchFilterTalents';



// images
import coachPhoto from '../../Assets/images/coach_avatar.png';
import DesignThinkerPicto from '../../Assets/images/thinker_picto.png';
import { useQuery, useReactiveVar } from '@apollo/client';
import { filterTalentVar } from '../../ReactiveVariable/Coach/coach';
import { coachsVariables, coachs } from '../../GraphQL/profiles/types/coachs';
import { LIST_COACH } from '../../GraphQL/profiles/query';
import MeetingModal from './MeetingModal';

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
      <MeetingModal open={openCalendar} handleClose={handleClose} handleOpen={handleOpen} />
    </Box>
  );
};

export default Coachs;
