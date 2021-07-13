import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ProductItemCart from "./ProductItemCart";

const ProductListCart = props => {
  const renderProductItemCart = (itemData) => {
    console.log(itemData)
      return <ProductItemCart
      id={itemData.item.id}
      title={itemData.item.title}
      price={itemData.item.price}
      picture={itemData.item.picture}
      quantity={itemData.item.quantity}
      
      onSelectProduct={() => {
        props.navigation.navigate({
          routeName: "ProductDetail",
          params: {
            productId: itemData.item.id,
             productTitle: itemData.item.title,
             productPrice: itemData.item.price,
             productPicture: itemData.item.picture,
             productQuantity:itemData.item.quantity
          },
        });
      }}/>
    };
    
  return (
    <View style={styles.container}>
      <FlatList
        //   change the data from props.
        data={props.listData}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItemCart}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default ProductListCart;