import React from "react";
import { StyleSheet } from "react-native";
import Payment from "../components/Payment";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const PaymentScreen = (props) => {
  const totalPrice = props.navigation.getParam("totalPrice");

  return (
    <>
      <Payment {...props} totalPrice={totalPrice}/>
    </>
  );
};

PaymentScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Payment",
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