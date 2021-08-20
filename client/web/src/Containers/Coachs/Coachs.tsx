import { useState } from 'react';
import { Box } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import PrimaryHeader from '../../Components/Header/Header';

import useStyles from './styles';
import CoachsItem from './CoachsItem/CoachsItem';
import SearchFilterTalents from '../../Components/SearchFilterTalents/SearchFilterTalents';

// images
import coachPhoto from '../../Assets/images/coach_avatar.png';
import DesignThinkerPicto from '../../Assets/images/thinker_picto.png';
import { useReactiveVar } from '@apollo/client';
import { filterTalentVar } from '../../ReactiveVariable/Coach/coach';
import MeetingModal from './MeetingModal';
import { useGetCoach } from '../../Providers/TalentProvider/useGetCoach';
import { coachs_profiles } from '../../GraphQL/profiles/types/coachs';

const Coachs = () => {
  const classes = useStyles();

  const [openCalendar, setOpenCalendar] = useState(false);

  const filterTalent = useReactiveVar(filterTalentVar);
  const { data, loading } = useGetCoach();
  const [coach, setCoach] = useState<coachs_profiles['users_id']>(null);
  const listCoachs = (data?.profiles || []).filter(
    (item) =>
      item &&
      item?.users_id &&
      (`${item?.users_id?.username}${item?.users_id?.surname}${item?.users_id?.lastname}${item?.users_id?.email}`
        .toLowerCase()
        .includes(filterTalent.search.toLowerCase()) ||
        `${item?.position}`.toLowerCase().includes(filterTalent.search.toLowerCase())),
  );
  const handleClickItem = (coachInfo: coachs_profiles['users_id']) => {
    setCoach(coachInfo);
    handleOpen();
  };
  const handleOpen = () => {
    setOpenCalendar(true);
  };
  const handleClose = () => {
    setOpenCalendar(false);
  };
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
                  clickAction={() => handleClickItem(profil?.users_id || null)}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      {coach && openCalendar && (
        <MeetingModal
          coachId={coach.id}
          open={openCalendar}
          handleClose={handleClose}
          handleOpen={handleOpen}
          coachName={coach.surname || ''}
        />
      )}
    </Box>
  );
};

export default Coachs;
