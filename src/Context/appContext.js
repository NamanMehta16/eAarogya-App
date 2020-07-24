import React from "react";
import { Text } from "react-native";
import webserver from "../api/webServer";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [data, setdata] = React.useState("hp");

  const signin = async (username, password, callback) => {
    const response = await webserver.post("/applogin", { username, password });
    if (response.data === "hi") {
      callback();
    }
  };

  return (
    <AppContext.Provider value={{ data: data, signin }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
