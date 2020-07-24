import React from "react";
import {
  Text,
  Button,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AppContext from "../../Context/appContext";
import bg from "../../../assets/bg1.jpg";
import logo from "../../../assets/logo.png";

import { FontAwesome } from "@expo/vector-icons";
const { width: WIDTH } = Dimensions.get("window");
const signinScreen = (props) => {
  const { data, signin } = React.useContext(AppContext);

  const [username, setusername] = React.useState("");
  const [password, setpassword] = React.useState("");
  return (
    <ImageBackground source={bg} style={styles.backgroundContainer}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>eAarogya</Text>
      </View>
      <View style={styles.InputContainer}>
        <FontAwesome
          style={styles.Inputicon}
          name="user"
          size={28}
          color="grey"
        />
        <TextInput
          style={styles.Input}
          placeholder={"Username"}
          placeholderTextColor={"white"}
          underlineColorAndroid="transparent"
          onChangeText={(newValue) => setusername(newValue)}
        />
      </View>
      <View style={styles.InputContainer}>
        <FontAwesome
          style={styles.Inputicon}
          name="lock"
          size={28}
          color="grey"
        />
        <TextInput
          style={styles.Input}
          secureTextEntry={true}
          placeholder={"Password"}
          placeholderTextColor={"white"}
          underlineColorAndroid="transparent"
          onChangeText={(newValue) => setpassword(newValue)}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          signin(username, password, () => {
            props.navigation.navigate("mainFlow");
          })
        }
      >
        <Text style={styles.btntext}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("signup")}
      >
        <Text style={styles.btntext}>Sign-Up</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

signinScreen.navigationOptions = {
  headerShown: false,
};

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

export default signinScreen;
