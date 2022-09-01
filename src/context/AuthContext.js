import React, { useState, createContext, useEffect } from "react";

const AuthContext = createContext({
  info: {},
  setInfo: () => {},
});

export const AuthProvider = ({ children }) => {
  const [info, setInfo] = useState({});

  return (
    <AuthContext.Provider
      value={{
        info,
        setInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
