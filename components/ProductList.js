import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ProductItem from "./ProductItem";

const ProductList = props => {
  const renderProductItem = (itemData) => {
      return <ProductItem
      id={itemData.item.title}
      title={itemData.item.title}
      price={itemData.item.price}
      picture={itemData.item.picture}
      onSelectProduct={() => {
        props.navigation.navigate({
          routeName: "ProductDetail",
          params: {
            productId: itemData.item.id,
             productTitle: itemData.item.title,
             productPrice: itemData.item.price,
             productPicture: itemData.item.picture

          },
        });
      }}/>
    };

  return (
    <View style={styles.container}>
      <FlatList
        data={props.listData}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
        style={{ width: "100%" }}/>
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

export default ProductList;