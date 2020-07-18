import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import bg from './assets/bg.jpg';
import logo from './assets/logo.png';
const { width: WIDTH } = Dimensions.get("window");
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
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
        //onChangeText={}
        />
        <FontAwesome
          style={styles.Inputicon1}
          name="vcard"
          size={25}
          color="grey"
        />
        <TextInput
          style={styles.Input}
          placeholder={"Enter Medical ID"}
          underlineColorAndroid="transparent"
        //onChangeText={}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
      //onPress={() => props.navigation.navigate("")}
      >
        <Text style={styles.btntext}>Submit</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
