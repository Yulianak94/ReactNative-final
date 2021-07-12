import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, FlatList, ScrollView, TextInput, Button  } from "react-native";

import { DEPARTMENT } from "../data/dummy-data";
import Payment from "../components/Payment";
import FinalScreen from "./FinalScreen";

// 2. Import:
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import ProductListCart from "../components/ProductListCart";
import ProductItemCart from "../components/ProductItemCart";

const PaymentScreen = (props) => {
  const totalPrice = props.navigation.getParam("totalPrice");
  
  // const renderFinalItem = (itemData) => {
  //   return (
  //     <FinalScreen
  //       // 2. Add color ref:
  //       onSelect={() => {
          
  //       }}
  //     />
  //   );
  // };
  

  return (
    <>
      <Payment {...props} totalPrice={totalPrice}/>
    </>
  );
};

// 1. Change the navigationOptions to function, so we can return values:
PaymentScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Payment",
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

export default PaymentScreen;