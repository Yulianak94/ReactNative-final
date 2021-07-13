import React from "react";
import { StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import Final from "../components/ProductItemCart";
import { View } from "react-native";

const FinalScreen = () => {
  return (
    <View>
      <Final/>
    </View>
  );
};

FinalScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Thank You",
  };
};

const styles = StyleSheet.create({
  titleH1: {
    fontFamily: "Comic Sans MS",
    fontSize: 24,
    textAlign: "center",
    backgroundColor: "#FF9999",
  },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FinalScreen;