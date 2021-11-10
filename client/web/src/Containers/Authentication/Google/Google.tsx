import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { idMe } from '../../../ReactiveVariable/User/user';
import { setAccessToken } from '../../../Services';

import { useHistory } from 'react-router';
import { HOMEPAGE, ONBOARDING_PROFILE7 } from '../../../Routes';
import { CALLBACK_GOOGLE } from '../../../Constants/Config';
import { useCreateProfile } from '../../../Providers/ProfilProvider/useCreateProfile';
import { useTranslation } from 'react-i18next';
import { Level } from '../../../types/graphql-global-types';

const Google = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const history = useHistory();
  const { doCreateProfile } = useCreateProfile();
  const jobSeniorityDefault = '6';
  const bioDefault = 'Tell you about me';
  const languagesDefault = [{id: '1', level: Level.FLUENT}];
  useEffect(() => {
    if (!location) {
      return;
    }
    const { search } = location;
    const urlGoogle = CALLBACK_GOOGLE.concat(search);
    console.log('us ', urlGoogle);

    axios({
      method: 'GET',
      url: `${urlGoogle}`,
    }).then((res) => {
      if (res.data && res.data.jwt) {
        setAccessToken(res.data.jwt);
        idMe(res.data.user.id);
        localStorage.setItem('idMe', res.data.user.id);
        if(window.confirm(t('createProfile.isCreate'))) {
          doCreateProfile({
            variables: {
              input: {
                job_seniority: jobSeniorityDefault,//>8yrs
                languages: languagesDefault,
                bio: bioDefault,
                user_id: res.data.user.id,
              },
            },
          });
        }
        history.replace(ONBOARDING_PROFILE7);
        window.location.reload();
      } else {
        history.push(HOMEPAGE);
      }
    });
  }, [location]);
  return <div>test</div>;
};

export default Google;
