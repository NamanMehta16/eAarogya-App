import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, TextInput, TouchableOpacity, FlatList} from 'react-native';
import bg from './assets/bg.jpg';
import logo from './assets/logo.png';
const { width: WIDTH } = Dimensions.get("window");
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  const [docID,setdocID]=useState([
    { name: 'DocID', id: '1' },
    { name: 'Organization', id: '2' }
  ]);
  return (
    <ImageBackground source={bg} style={styles.backgroundContainer}>
      <View>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>eAarogya</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
      //onPress={() => props.navigation.navigate("")}
      >
        <Text style={styles.btntext}>Get Permission</Text>
      </TouchableOpacity>

      <FlatList
        numColumns={2}
        keyExtractor={(item)=>item.id}
        data={docID}
        renderItem={({item})=>(
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
    </ImageBackground>
  );
};



const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: null,
    height: null,
  },
  item:{
    margin:40,
    fontWeight:"100",
    fontSize:30,
    color:'gray',

  },
  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 0,
  },
  logoText: {
    fontSize: 30,
    fontWeight: "500",
    opacity: 0.5,
    marginTop: 50,
  },
  Input: {
    marginBottom:10,
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
    color: "white",
  },
});