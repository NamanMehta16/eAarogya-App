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
import { MaterialCommunityIcons } from "@expo/vector-icons";
const { width: WIDTH } = Dimensions.get("window");

const signupdetailScreen = (props) => {
  return (
    <ImageBackground source={bg} style={styles.backgroundContainer}>
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
      <View style={styles.InputContainer}>
        <FontAwesome
          style={styles.Inputicon}
          name="user"
          size={25}
          color="grey"
        />
        <TextInput
          style={styles.Input}
          placeholder={"Name"}
          placeholderTextColor={"white"}
          underlineColorAndroid="transparent"
          onChangeText={(newValue) => setaadhar(newValue)}
        />
      </View>
      <View style={styles.InputContainer}>
        <FontAwesome
          style={styles.Inputicon}
          name="calendar"
          size={25}
          color="grey"
        />
        <TextInput
          style={styles.Input}
          placeholder={"Dob"}
          placeholderTextColor={"white"}
          underlineColorAndroid="transparent"
          onChangeText={(newValue) => setaadhar(newValue)}
        />
      </View>
      <View style={styles.InputContainer}>
        <MaterialCommunityIcons
          name="gender-male-female"
          size={25}
          color="grey"
          style={styles.Inputicon}
        />
        <TextInput
          style={styles.Input}
          placeholder={"Gender"}
          placeholderTextColor={"white"}
          underlineColorAndroid="transparent"
          onChangeText={(newValue) => setaadhar(newValue)}
        />
      </View>
      <View style={styles.InputContainer}>
        <FontAwesome
          style={styles.Inputicon}
          name="home"
          size={25}
          color="grey"
        />
        <TextInput
          style={styles.Input}
          placeholder={"Adress"}
          placeholderTextColor={"white"}
          underlineColorAndroid="transparent"
          onChangeText={(newValue) => setaadhar(newValue)}
        />
      </View>
      <View style={styles.InputContainer}>
        <FontAwesome
          style={styles.Inputicon}
          name="phone-square"
          size={25}
          color="grey"
        />
        <TextInput
          style={styles.Input}
          placeholder={"Phone Number"}
          placeholderTextColor={"white"}
          underlineColorAndroid="transparent"
          onChangeText={(newValue) => setaadhar(newValue)}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.navigation.navigate("mainFlow");
        }}
      >
        <Text style={styles.btntext}>Sign-up</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: null,
    height: null,
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
    left: 34,
  },
  button: {
    width: WIDTH - 110,
    height: 45,
    borderRadius: 25,
    backgroundColor: "rgba(23, 87, 148,0.9)",
    marginTop: 20,
    justifyContent: "center",
    marginBottom: 150,
  },
  btntext: {
    textAlign: "center",
    fontSize: 16,
    color: "rgba(255,255,255,0.7)",
  },
});

export default signupdetailScreen;
