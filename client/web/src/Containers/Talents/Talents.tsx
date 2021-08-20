import { useQuery, useReactiveVar } from '@apollo/client';
import { Box } from '@material-ui/core';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { useLocation } from 'react-router';
import coachPhoto from '../../Assets/images/coach_avatar.png';
import DesignThinkerPicto from '../../Assets/images/thinker_picto.png';
import CardTalents from '../../Components/CardTalents/CardTalents';
import RadioExtInt from '../../Components/RadioExtInt/RadioExtInt';
import SearchFilterTalents from '../../Components/SearchFilterTalents/SearchFilterTalents';
import { LIST_COACH } from '../../GraphQL/profiles/query';
import { coachs, coachsVariables } from '../../GraphQL/profiles/types/coachs';
import { filterTalentVar } from '../../ReactiveVariable/Coach/coach';
import useStyles from './styles';

const Talents = () => {
  const classes = useStyles();
  const params = useLocation();
  const filterTalent = useReactiveVar(filterTalentVar);

  const { data, loading } = useQuery<coachs, coachsVariables>(LIST_COACH, {
    variables: {
      where: {
        profile_type_id: {
          label: 'Talent',
        },
      },
    },
  });

  const listTalents = (data?.profiles || []).filter((item) => {
    if (
      item?.users_id?.surname?.trim().toLowerCase().includes(filterTalent.search.trim().toLowerCase()) ||
      item?.users_id?.lastname?.trim().toLowerCase().includes(filterTalent.search.trim().toLowerCase()) ||
      item?.position?.trim().toLowerCase().includes(filterTalent.search.trim().toLowerCase())
    ) {
      return true;
    }
  });

  return (
    <>
      {params.pathname === '/wishlist' ? (
        <>
          <SearchFilterTalents />
          <Box className={classes.content}>
            <RadioExtInt />
          </Box>
        </>
      ) : (
        <>
          <Box className={classes.content}>
            <RadioExtInt />
          </Box>
          <SearchFilterTalents />
        </>
      )}

      {loading && <Skeleton count={1} height={170} />}

      {!loading &&
        listTalents?.map((profil, index) => {
          return (
            <Box className={classes.box} key={index}>
              <CardTalents
                talentId={profil?.id}
                coachPhoto={profil?.picture || coachPhoto}
                iconJob={DesignThinkerPicto}
                jobTitle={profil?.position || ''}
                coachName={profil?.users_id?.lastname || ''}
                coachAddress={''}
                skills={profil?.profile_skills}
                coachLevel={profil?.job_seniority_id?.label || ''}
                project_favorits={profil?.project_favorits}
              />
            </Box>
          );
        })}
    </>
  );
};

export default Talents;
