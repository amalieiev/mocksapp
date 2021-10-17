import { createContext, useContext, useState } from "react";
import { GoogleProvider, useAuthorizedGoogle } from "./auth.google";
import { MicrosoftProvider, useAuthorizedMicrosoft } from "./auth.microsoft";

export const AuthContext = createContext({});

export const Auth = ({ children }) => {
  return (
    <MicrosoftProvider>
      <GoogleProvider>
        <AuthProvider>{children}</AuthProvider>
      </GoogleProvider>
    </MicrosoftProvider>
  );
};

export const AuthProvider = ({ children }) => {
  const authorizedGoogle = useAuthorizedGoogle();
  const authorizedMicrosoft = useAuthorizedMicrosoft();

  return (
    <AuthContext.Provider
      value={{
        google: authorizedGoogle,
        microsoft: authorizedMicrosoft,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthorized = () => {
  const context = useContext(AuthContext);
  return context;
};
