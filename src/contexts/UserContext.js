import React, { createContext, useState } from "react";
export const UserContext = createContext();

const UserContextProvider = props => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    token: null,
    email: null,
    username: null,
  });
  const addUser = payload => {
    setUser(payload);
    localStorage.setItem('token',payload.token);
  };
  const removeUser = () => {
    setUser({
      isLoggedIn: false,
      token: null,
      email: null,
      username: null
    });
  
  };
  return (
    <UserContext.Provider value={{ user, addUser,removeUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
