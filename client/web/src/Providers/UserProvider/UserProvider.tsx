import React, { FC, createContext, useState, useEffect } from 'react';

import { getAccessToken } from '../../Services/LocalStorage';

interface UserContextType {
  onUserInfo: {
    userInfo: any;
    setUserInfo: React.Dispatch<React.SetStateAction<any>>;
  };
}

export const UserContext = createContext<UserContextType>({
  onUserInfo: {
    userInfo: null,
    setUserInfo: () => {},
  },
});

const UserProvider: FC = (props) => {
  const [token] = useState(getAccessToken());
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {}, [token]);

  return (
    <UserContext.Provider
      value={{
        onUserInfo: {
          userInfo,
          setUserInfo,
        },
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
