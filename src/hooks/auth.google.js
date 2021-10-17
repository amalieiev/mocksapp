import { createContext, useContext, useState } from "react";

export const GoogleContext = createContext({});

export const GoogleProvider = ({ children }) => {
  const [authorized, setAuthorized] = useState("Google Authorized");

  return (
    <GoogleContext.Provider
      value={{
        authorized,
      }}
    >
      {children}
    </GoogleContext.Provider>
  );
};

export const useAuthorizedGoogle = () => {
  const context = useContext(GoogleContext);
  return context.authorized;
};
