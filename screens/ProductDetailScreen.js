import React, { useEffect, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView, TextInput } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { toggleAdd, toggleDelete } from "../store/actions/product";
import { useSelector, useDispatch } from "react-redux";

const ProductDetailScreen = (props) => {
  const availableProduct = useSelector((state) => state.product.product);
  const productId = props.navigation.getParam("productId");
  const currentProductIsAdd = useSelector((state) =>
    state.product.cartProduct.some((product) => product.id === productId)
  );

  const currentProductIsDelete = useSelector((state) =>
    state.product.cartProduct.some((product) => product.id === productId)
  );

  const selectedProduct = availableProduct.find((product) => product.id === productId);
  const dispatch = useDispatch();
  const toggleAddHandler = useCallback(() => {
    dispatch(toggleAdd(productId));
  }, [dispatch, productId]);

  const toggleDeleteHandler = useCallback(() => {
    dispatch(toggleDelete(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    props.navigation.setParams({ toggleAd: toggleAddHandler,  toggleDel: toggleDeleteHandler });
  }, [toggleAddHandler, toggleDeleteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isAd: currentProductIsAdd, isDel: currentProductIsDelete });
  }, [currentProductIsAdd, currentProductIsDelete]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedProduct.picture }} style={styles.image} />
      <View style={{ ...styles.productRow, ...styles.productDetail }}>
      <Text style={styles.titleH1}>Product Detail</Text>
      <Text style={styles.title}>Product:</Text>
      <Text style={styles.description}> {selectedProduct.title}</Text>
      <Text style={styles.title}>Description:</Text>
      <Text style={styles.description}> {selectedProduct.description}</Text>
      <Text style={styles.title}>Size:</Text>
      <Text style={styles.description}> {selectedProduct.size}</Text>
      <Text style={styles.title}>Price Includes Shipping:</Text>
      <Text style={styles.description}> {selectedProduct.shipping + selectedProduct.price}$</Text>
      <Text style={styles.title}>Reviews:</Text>
      <Text style={styles.description}> {selectedProduct.reviews}</Text>
      </View>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = (navigationData) => {
  const productTitle = navigationData.navigation.getParam("productTitle");
  const toggleAdd = navigationData.navigation.getParam("toggleAd");
  const toggleDelete = navigationData.navigation.getParam("toggleDel");
  const isAdd = navigationData.navigation.getParam("isAd");
  const isDelete = navigationData.navigation.getParam("isDel");
  
  return {
    headerTitle: productTitle,
    headerRight: () => (
      <>
      
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Shopping Cart"
          iconName={isAdd ? "add-circle" : "add-circle-outline"}
          onPress={toggleAdd}/>
      </HeaderButtons>

      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Shopping Cart"
          iconName="remove-circle-outline"
          onPress={toggleDelete}/>
      </HeaderButtons>
      </>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  titleH1: {
    fontFamily: "Comic Sans MS",
    fontSize: 24,
    textAlign: "center",
  },
  title: {
    fontFamily: "Comic Sans MS",
    fontSize: 22,
    textAlign: "left",
    textDecorationLine: "underline",
  },
  description: {
    fontFamily: "Comic Sans MS",
    fontSize: 18,
    textAlign: "left",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default ProductDetailScreen;