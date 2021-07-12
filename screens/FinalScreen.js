import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, FlatList, ScrollView, TextInput  } from "react-native";

import { DEPARTMENT } from "../data/dummy-data";
import Payment from "../components/Payment";
// 2. Import:
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import ProductListCart from "../components/ProductListCart";
import Final from "../components/ProductItemCart";
import { findNodeHandle } from "react-native";
import { View } from "react-native";

const FinalScreen = () => {
  return (
    <View>
      <Final />
    
    </View>
  );
};

// 1. Change the navigationOptions to function, so we can return values:
FinalScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Thank You",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          // 2. Add function: open the side menu: we see TripsFav and Filters
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
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