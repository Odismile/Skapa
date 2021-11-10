import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { idMe } from '../../../ReactiveVariable/User/user';
import { setAccessToken } from '../../../Services';

import { useHistory } from 'react-router';
import { HOMEPAGE, ONBOARDING_PROFILE7 } from '../../../Routes';
import { useCreateProfile } from '../../../Providers/ProfilProvider/useCreateProfile';
import { useTranslation } from 'react-i18next';

const Google = () => {
  const location = useLocation();
  const history = useHistory();
  const { doCreateProfile } = useCreateProfile();
  const { t } = useTranslation();


  useEffect(() => {
    if (!location) {
      return;
    }
    const { search } = location;

    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_CALLBACK_GOOGLE  as string}${search}`,
    }).then((res: any) => {
      if (res.data && res.data.jwt) {
        setAccessToken(res.data.jwt);
        idMe(res.data.user.id);
        localStorage.setItem('idMe', res.data.user.id);
        history.replace(ONBOARDING_PROFILE7);
        window.location.reload();
      } else {
        history.push(HOMEPAGE);
      }
    });
  }, [location]);
  return <div></div>;
};

export default Google;
