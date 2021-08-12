import React, { createContext, FC } from 'react';

interface ItemsProviderProps {}

export const ItemsLanguageInfoContext = createContext<ItemsProviderProps>({});

export const ItemsLanguageInfoProvider: FC = ({ children }) => {
  return <ItemsLanguageInfoContext.Provider value={{}}>{children}</ItemsLanguageInfoContext.Provider>;
};
