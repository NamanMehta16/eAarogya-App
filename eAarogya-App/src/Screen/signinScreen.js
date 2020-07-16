import React from "react";
import { Text, Button, View } from "react-native";

const signinScreen = (props) => {
  return (
    <View>
      <Text>signinScreen</Text>
      <Button
        title="sign-up"
        onPress={() => props.navigation.navigate("signup")}
      />
      <Button
        title="mainflow"
        onPress={() => props.navigation.navigate("mainFlow")}
      />
    </View>
  );
};

export default signinScreen;
