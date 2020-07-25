import React from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ImagePropTypes,
} from "react-native";
import bg from "../../../assets/bg1.jpg";
import { FontAwesome } from "@expo/vector-icons";
const { width: WIDTH } = Dimensions.get("window");

const permissionScreen = (props) => {
  return (
    <ImageBackground source={bg} style={styles.backgroundContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("viewPermission")}
      >
        <Text style={styles.btntext}>View Permissions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("revokePermission")}
      >
        <Text style={styles.btntext}>Give Permission</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("revokePermission")}
      >
        <Text style={styles.btntext}>Revoke Permission</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
export default permissionScreen;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: null,
    height: null,
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
