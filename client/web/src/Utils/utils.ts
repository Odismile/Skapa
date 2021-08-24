import { MeInfo_getProfile_users_id } from '../GraphQL/user/types/MeInfo';

export const getUserId = localStorage.getItem('idMe') || '';
export const isConnected = Boolean(localStorage.getItem('idMe'));

export const getUserFullName = (user: MeInfo_getProfile_users_id | null) => {
  if (user?.lastname || user?.surname) return `${user?.surname} ${user.lastname}`.trim();
  return (user?.surname ? user.surname : user?.email || '').trim();
};
