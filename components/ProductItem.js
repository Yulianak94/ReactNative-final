import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";

const ProductItem = (props) => {
  
  return (
    <TouchableOpacity onPress={props.onSelect}>
      <View style={{ ...styles.productRow, ...styles.productHeader }}>
        <ImageBackground source={{ uri: props.picture }} style={styles.bgImage}>
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={1}>
                {props.title}
              </Text>
            </View>
        </ImageBackground>
        </View>
        <View style={{ ...styles.productRow, ...styles.productDetail }}>
          <Text style={styles.myTitle}>Product: {props.title}</Text>
          <Text style={styles.myTitle}>Price: {props.price}$ </Text>
          <Image
            style={styles.singleProduct}
            source={{uri: props.picture}}/>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
  },
  productRow: {
    flexDirection: "row",
  },
  productHeader: {
    height: "85%",
  },
  productDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
    
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: "Comic Sans MS",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  singleProduct: {
    width: 200,
    height: 200,
  },
  myTitle: {
    fontFamily: "Comic Sans MS",
    fontSize: 22,
    textAlign: "left",
  },
});

export default ProductItem;