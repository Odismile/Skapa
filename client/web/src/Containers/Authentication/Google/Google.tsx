import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { email, idMe, provider } from '../../../ReactiveVariable/User/user';
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

  useEffect(() => {
    if (!location) {
      return;
    }
    const { search } = location;
    const urlGoogle = CALLBACK_GOOGLE.concat(search);
    axios({
      method: 'GET',
      url: `${urlGoogle}`,
    }).then((res) => {
      if (res.data && res.data.jwt) {
        setAccessToken(res.data.jwt);
        idMe(res.data.user.id);
        localStorage.setItem('idMe', res.data.user.id);
        localStorage.setItem('email', res.data.user.email);
        localStorage.setItem('provider', res.data.user.provider);
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
