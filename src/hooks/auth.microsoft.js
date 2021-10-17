import { createContext, useContext, useState } from "react";

export const MicrosoftContext = createContext({});

export const MicrosoftProvider = ({ children }) => {
  const [authorized, setAuthorized] = useState("Microsoft Authorized");

  return (
    <MicrosoftContext.Provider
      value={{
        authorized,
      }}
    >
      {children}
    </MicrosoftContext.Provider>
  );
};

export const useAuthorizedMicrosoft = () => {
  const context = useContext(MicrosoftContext);
  return context.authorized;
};
