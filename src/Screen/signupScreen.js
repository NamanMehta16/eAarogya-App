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
  ImagePropTypes,
} from "react-native";
import bg from "../../assets/bg1.jpg";
import logo from "../../assets/logo.png";
import { FontAwesome } from "@expo/vector-icons";

const { width: WIDTH } = Dimensions.get("window");

const signupScreen = (props) => {
  const [aadhar, setaadhar] = React.useState("");
  return (
    <ImageBackground source={bg} style={styles.backgroundContainer}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>eAarogya</Text>
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
          placeholder={"Aadhar Number"}
          placeholderTextColor={"white"}
          underlineColorAndroid="transparent"
          onChangeText={(newValue) => setaadhar(newValue)}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("OtpVerification")}
      >
        <Text style={styles.btntext}>Enter</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
export default signupScreen;

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
