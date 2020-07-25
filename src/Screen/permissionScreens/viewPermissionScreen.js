import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import bg from "../../../assets/bg1.jpg";
import webServer from "../../api/webServer";
import AppContext from "../../Context/appContext";

const { width: WIDTH } = Dimensions.get("window");
import { FontAwesome } from "@expo/vector-icons";
const viewPermissionScreen = (props) => {
  const { data, signin } = React.useContext(AppContext);
  const [info, setinfo] = React.useState([]);

  React.useEffect(async () => {
    try {
      console.log(data.username);
      const username = data.username;
      const response = await webServer.post("/getPermission", {
        username: username,
      });

      setinfo(response.data);
      console.log(info);
    } catch (e) {
      console.log(e);
    }
  });

  return (
    <ImageBackground source={bg} style={styles.backgroundContainer}>
      <View>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>eAarogya</Text>
          <Text style={styles.logoText}></Text>
        </View>
      </View>
    </ImageBackground>
  );
};
export default viewPermissionScreen;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: null,
    height: null,
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  logoText: {
    fontSize: 30,
    fontWeight: "500",
    opacity: 0.5,
    marginTop: 10,
  },
  Input: {
    marginBottom: 10,
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0,0,0,0.35)",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25,
  },
  InputContainer: {
    marginTop: 10,
  },
  Inputicon: {
    position: "absolute",
    top: 8,
    left: 37,
  },
  Inputicon1: {
    position: "absolute",
    top: 65,
    left: 37,
  },
  button: {
    width: WIDTH - 110,
    height: 45,
    borderRadius: 25,
    backgroundColor: "rgba(23, 87, 148,0.9)",
    marginTop: 20,
    justifyContent: "center",
  },
  btntext: {
    textAlign: "center",
    fontSize: 16,
    color: "rgba(255,255,255,0.7)",
  },
});
