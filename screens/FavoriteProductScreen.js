import React from "react";
import { View, StyleSheet, FlatList, ScrollView, Text} from "react-native";
import ProductListCart from "../components/ProductListCart";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
// 1. remove:
//import { TRIPS } from "../data/dummy-data";
// 2. import:
import { useSelector } from "react-redux";

const FavoriteProductScreen = (props) => {
  // 3. change favTrips: to useSelector
  const favProduct = useSelector((state) => state.product.cartProduct)
   ;


  return <ScrollView>
  <ProductListCart listData={favProduct} navigation={props.navigation} />    
  
  </ScrollView>
  
;
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

export default FavoriteProductScreen;

