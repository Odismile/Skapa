import { removeAccessToken } from '../../../Services/LocalStorage';

const logout = async (): Promise<void> => {
  removeAccessToken();
};

export default logout;
