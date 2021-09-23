import React, { FC, createContext } from 'react';

interface AuthContextType {}

export const AuthContext = createContext<AuthContextType>({});

const AuthProvider: FC = (props) => {
  return <AuthContext.Provider value={{}}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
