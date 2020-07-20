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
import bg from "../../assets/bg1.jpg";

const { width: WIDTH } = Dimensions.get("window");
import { FontAwesome } from "@expo/vector-icons";

const accountScreen = (props) => {
  const [docId, setdocId] = React.useState("");
  const [medId, setmedId] = React.useState("");

  return (
    <ImageBackground source={bg} style={styles.backgroundContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          props.navigation.navigate("signin");
        }}
      >
        <Text style={styles.btntext}>Logout</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
export default accountScreen;

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
