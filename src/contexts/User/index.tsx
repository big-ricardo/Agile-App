import React, { createContext, useReducer } from 'react';
import { initialState, UserReducer } from './useReducer';

export const UserContext = createContext(null)

const User: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(UserReducer, initialState)

  return (
    <UserContext.Provider value={{state, dispatch}} >
      {children}
    </UserContext.Provider>
  );
}

export default User;
