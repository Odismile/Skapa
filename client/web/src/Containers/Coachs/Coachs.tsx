import { useState, useMemo } from 'react';
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
import { filterTalentVar, juniorValues, seniorValues } from '../../ReactiveVariable/Coach/coach';
import MeetingModal from './MeetingModal';
import { useGetProfiles } from '../../Providers/TalentProvider/useGetProfiles';
import { coachs_profiles } from '../../GraphQL/profiles/types/coachs';

const Coachs = () => {
  const classes = useStyles();

  const [openCalendar, setOpenCalendar] = useState(false);

  const filterTalent = useReactiveVar(filterTalentVar);
  const { data, loading } = useGetProfiles('Coach');
  const [coach, setCoach] = useState<coachs_profiles['users_id']>(null);

  const listCoachs = useMemo(() => {
    let newList = data?.profiles || [];
    if (filterTalent.search.length) {
      newList = newList.filter(
        (item) =>
          item &&
          item?.users_id &&
          (`${item?.users_id?.username}${item?.users_id?.surname}${item?.users_id?.lastname}${item?.users_id?.email}`
            .toLowerCase()
            .includes(filterTalent.search.toLowerCase()) ||
            `${item?.position}`.toLowerCase().includes(filterTalent.search.toLowerCase())),
      );
    }

    if (filterTalent.skills.length !== 0) {
      newList = newList.filter(
        (item) =>
          item?.profile_skills?.length && item?.profile_skills?.find((i) => i?.skill_id?.label === item.profile_skills),
      );
    }
    if (filterTalent.levels.length) {
      newList = newList.filter(
        (item) => filterTalent.levels.findIndex((level) => level?.label === item?.job_seniority_id?.label) >= 0,
      );
    }
    return newList;
  }, [data?.profiles, filterTalent]);

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
