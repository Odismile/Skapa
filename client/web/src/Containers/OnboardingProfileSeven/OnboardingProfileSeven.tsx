import React, { useRef, useState } from 'react';
import { Box, Button, Container, Typography, LinearProgress, withStyles } from '@material-ui/core';
import WrapOnBoarding from '../../Components/WrapOnBoarding/WrapOnBoarding';
import useStyles from './style';

import image_profile from '../../Assets/images/image_profile.png';
import image_organisation from '../../Assets/images/organisation.png';
import { useHistory } from 'react-router-dom';
import { HOMEPAGE, LOGIN, ONBOARDING } from '../../Routes';
import { login } from '../../ReactiveVariable/User/user';
import { useCurrentUser } from '../../Providers/UserProvider/hooks/useCurrentUser';
import { getUserFullName } from '../../Utils/utils';
import { useCreateProfile } from '../../Providers/ProfilProvider/useCreateProfile';
import { useTranslation } from 'react-i18next';
import { Level } from '../../types/graphql-global-types';

// progressbar style
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 11,
    borderRadius: 10.5,
    width: 210,
    margin: '0 auto',
  },
  colorPrimary: {
    backgroundColor: '#DFFFF2',
  },
  bar: {
    borderRadius: 10.5,
    backgroundColor: '#5BD3A0',
  },
}))(LinearProgress);

const OnboardingProfileSeven = () => {
  const jobSeniorityDefault = '6';
  const bioDefault = 'Telldddddd';
  const languagesDefault = [{id: '1', level: Level.FLUENT}];
  const walletDefault = 100000;
  const profilIdDefault = ['30'];
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  const { profil } = useCurrentUser();
  const { doCreateProfile } = useCreateProfile();
  const { t } = useTranslation();
  const history = useHistory();
  let i=0;
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          //condition auth google ==>
          if(window.confirm(t('createProfile.isCreate'))) {
            console.log(i++);
            
            doCreateProfile({
              variables: {
                input: {
                  job_seniority:  jobSeniorityDefault,
                  bio: bioDefault,
                  languages: languagesDefault,
                  wallet: walletDefault,
                  profile_skills: profilIdDefault,
                },
              },
            }).then((data)=>{
              console.log('dd', data);
            })
          }
          history.replace(HOMEPAGE);
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <WrapOnBoarding width={210} marginTop={40}>
        <Box className={classes.onBoard}>
          <h1 className="welcome">Welcome !</h1>
          <Box className="user">
            <figure className="user-organisation-image">
              <img src={image_organisation} alt="user-organisation" />
            </figure>
            <figure className="user-profile">
              <img src={profil?.picture || ''} alt="profile" />
            </figure>
            <Box className="user-name">{getUserFullName(profil?.users_id as any)}</Box>
            <Box className="user-organisation">{profil?.position || ''}</Box>
          </Box>
          <Box className="welcome-loader">
            <p>Customizing your homepage</p>
            <Box className="progress-bar">
              <BorderLinearProgress variant="determinate" value={progress} />
            </Box>
          </Box>
        </Box>
      </WrapOnBoarding>
    </>
  );
};

export default OnboardingProfileSeven;
