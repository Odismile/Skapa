import React from 'react';
import { Box } from '@material-ui/core';
import CardTalents from '../../Components/CardTalents/CardTalents';
import RadioExtInt from '../../Components/RadioExtInt/RadioExtInt';
import SearchFilterTalents from '../../Components/SearchFilterTalents/SearchFilterTalents';
import useStyles from './styles';
import { useLocation } from 'react-router';
import { coachs, coachsVariables } from '../../GraphQL/profiles/types/coachs';
import { useQuery } from '@apollo/client';
import { LIST_COACH } from '../../GraphQL/profiles/query';
import coachPhoto from '../../Assets/images/coach_avatar.png';
import DesignThinkerPicto from '../../Assets/images/thinker_picto.png';
import Skeleton from 'react-loading-skeleton';

const Talents = () => {
  const classes = useStyles();
  const params = useLocation();

  const { data, loading } = useQuery<coachs, coachsVariables>(LIST_COACH, {
    variables: {
      where: {
        profile_type_id: {
          label: 'Talent',
        },
      },
    },
  });

  return (
    <>
      {params.pathname == '/wishlist' ? (
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
        data?.profiles?.map((profil, index) => {
          return (
            <Box className={classes.box} key={index}>
              <CardTalents
                coachPhoto={profil?.picture || coachPhoto}
                iconJob={DesignThinkerPicto}
                jobTitle={profil?.position || ''}
                coachName={profil?.users_id?.lastname || ''}
                coachAddress={''}
                coachLevel={profil?.job_seniority_id?.label || ''}
              />
            </Box>
          );
        })}
    </>
  );
};

export default Talents;
