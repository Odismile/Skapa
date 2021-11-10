import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { idMe, login } from '../../../ReactiveVariable/User/user';
import { setAccessToken } from '../../../Services';

import { useHistory } from 'react-router';
import { HOMEPAGE, ONBOARDING_PROFILE7 } from '../../../Routes';

const Google = () => {
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    if (!location) {
      return;
    }
    const { search } = location;

    axios({
      method: 'GET',
      url: `http://localhost:1337/auth/google/callback?${search}`,
    }).then((res) => {
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
