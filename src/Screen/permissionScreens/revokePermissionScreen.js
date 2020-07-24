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

import logo from "../../../assets/logo.png";
const { width: WIDTH } = Dimensions.get("window");
import { FontAwesome } from "@expo/vector-icons";
import webServer from "../../api/webServer";
import AppContext from "../../Context/appContext";

const revokePermissionScreen = (props) => {
  const [docId, setdocId] = React.useState("");
  const { data, signin } = React.useContext(AppContext);
  var info = props.navigation.getParam("info", "");
  console.log(info);
  const revokePermission = async () => {
    try {
      console.log(docId);
      const response = await webServer.post("/revoke-permission", {
        doctorID: docId,
        username: data.username,
      });
      console.log(response.data.message, response.status);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ImageBackground source={bg} style={styles.backgroundContainer}>
      <View>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>eAarogya</Text>
          <Text style={styles.logoText}>Revoke Permission</Text>
        </View>
      </View>
      <View style={styles.InputContainer}>
        <FontAwesome
          style={styles.Inputicon}
          name="vcard"
          size={25}
          color="grey"
        />
        <TextInput
          style={styles.Input}
          placeholder={"Enter Doctor's ID"}
          underlineColorAndroid="transparent"
          onChangeText={(newValue) => setdocId(newValue)}
          value={docId}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.navigation.navigate("Scaner");
        }}
      >
        <Text style={styles.btntext}>Scan</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          revokePermission();
        }}
      >
        <Text style={styles.btntext}>Submit</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
export default revokePermissionScreen;

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
