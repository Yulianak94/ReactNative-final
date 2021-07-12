import React from "react";
import { View, StyleSheet, FlatList, ScrollView, Text} from "react-native";
import ProductListCart from "../components/ProductListCart";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

// 1. remove:
//import { TRIPS } from "../data/dummy-data";
// 2. import:
import { useSelector } from "react-redux";
import { Button } from "react-native";
import PaymentScreen from "./PaymentScreen";

const FavoriteProductScreen = (props) => {
  // 3. change favTrips: to useSelector
  const favProduct = useSelector((state) => state.product.cartProduct);
  let totalPrice =  favProduct.reduce((prevValue, currentValue) => prevValue + currentValue.price, 0);
  const navigate = () => {
    props.navigation.navigate({
      routeName: "Payment",
      params: {
        totalPrice: totalPrice,
      },
    });
  }
  if (totalPrice == undefined) totalPrice=0;
  
  const renderPaymentItem = (itemData) => {
    return (
      <PaymentScreen
        // 2. Add color ref:
        onSelect={() => {
          
        }}
      />
    );
  };
  


  return( 
  <>
    <ScrollView>
      <ProductListCart listData={favProduct} navigation={props.navigation} />    
    </ScrollView>
    <View>
        <Text style={styles.titleH1}> Final Price: {totalPrice} $ </Text>
        <Button onPress={navigate}/> 
    </View>

   


  </>
  );
};

FavoriteProductScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Shopping Cart",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
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
  flexing: {
    flex: 1,
  }
});

export default FavoriteProductScreen;

