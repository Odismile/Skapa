import { delay } from '../Utils/Timeout';
import { removeAccessToken, isAuthenticated } from '../Services/LocalStorage';

export const forceLogout = async () => {
  if (isAuthenticated()) {
    removeAccessToken();
    await delay(1000);
    window.location.reload();
  }
};
