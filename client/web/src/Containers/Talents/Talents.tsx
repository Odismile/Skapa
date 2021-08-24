import { useQuery, useReactiveVar } from '@apollo/client';
import { Box } from '@material-ui/core';
import React, { useMemo } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useLocation } from 'react-router';
import coachPhoto from '../../Assets/images/coach_avatar.png';
import DesignThinkerPicto from '../../Assets/images/thinker_picto.png';
import CardTalents from '../../Components/CardTalents/CardTalents';
import RadioExtInt from '../../Components/RadioExtInt/RadioExtInt';
import SearchFilterTalents from '../../Components/SearchFilterTalents/SearchFilterTalents';
import { LIST_COACH } from '../../GraphQL/profiles/query';
import { coachs, coachsVariables } from '../../GraphQL/profiles/types/coachs';
import { useCurrentUser } from '../../Providers/UserProvider/hooks/useCurrentUser';
import { filterTalentVar } from '../../ReactiveVariable/Coach/coach';
import { WISHLIST } from '../../Routes';
import useStyles from './styles';

const Talents = () => {
  const classes = useStyles();
  const params = useLocation();

  const isInWishList = [WISHLIST].includes(params.pathname);
  const filterTalent = useReactiveVar(filterTalentVar);
  const { profilId } = useCurrentUser();

  const { data, loading } = useQuery<coachs, coachsVariables>(LIST_COACH, {
    variables: {
      where: {
        profile_type_id: {
          label: 'Talent',
        },
      },
    },
  });

  const listTalents = useMemo(() => {
    console.table(data?.profiles);

    const newList = (data?.profiles || []).filter((item) => {
      if (
        item?.users_id?.surname?.trim().toLowerCase().includes(filterTalent.search.trim().toLowerCase()) ||
        item?.users_id?.lastname?.trim().toLowerCase().includes(filterTalent.search.trim().toLowerCase()) ||
        item?.position?.trim().toLowerCase().includes(filterTalent.search.trim().toLowerCase())
      ) {
        return true;
      }
    });
    if (isInWishList)
      return (data?.profiles || []).filter(
        (item) => item?.talent_favorits?.length && item?.talent_favorits?.some((i) => i?.profile?.id === profilId),
      );

    if (filterTalent.skills.length !== 0) {
      return (data?.profiles || []).filter(
        (item) =>
          item?.profile_skills?.length && item?.profile_skills?.find((i) => i?.skill_id?.label === item.profile_skills),
      );
    }

    return newList;
  }, [data?.profiles, filterTalent.search, isInWishList, profilId, filterTalent.skills]);

  return (
    <>
      {params.pathname === '/wishlist' ? (
        <>
          <SearchFilterTalents placeholder="Look for one of your favorite" />
          <Box className={classes.contentTop}>
            <RadioExtInt />
          </Box>
        </>
      ) : (
        <>
          <Box className={classes.contentBottom}>
            <RadioExtInt />
          </Box>
          <SearchFilterTalents placeholder="Look for talent by name, position" />
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
                talent_favorits={profil?.talent_favorits}
              />
            </Box>
          );
        })}
    </>
  );
};

export default Talents;
