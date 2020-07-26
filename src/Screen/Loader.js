import React from "react";
import { ActivityIndicator, StyleSheet, Text, View, Modal } from "react-native";
//import LottieView from 'lottie-react-native';
export default function Loader() {
  return (
      <Modal
      animationType="slide"
      transparent={true}>
        <View style={styles.centeredView}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});