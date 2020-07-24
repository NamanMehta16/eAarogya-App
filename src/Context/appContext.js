import React from "react";
import { Text } from "react-native";
import webserver from "../api/webServer";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = React.useState("hp");
  const [scan, setscan] = React.useState("");

  const signin = async (username, password, callback) => {
    try {
      const response = await webserver.post("/login", { username, password });
      if (response.status == 200) {
        setData(response.data.user);
        console.log(response.data.user);
        callback();
      } else {
        console.log(response.status);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AppContext.Provider value={{ data: data, scan: scan, signin, Scan }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
