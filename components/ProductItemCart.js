import React,{useCallback} from "react";
import {View,Text,StyleSheet,TouchableOpacity,ImageBackground,Image, SafeAreaView, TextInput,Button} from "react-native";
import CustomCartButton from "../components/CustomCartButton";

import Icon from 'react-native-vector-icons/FontAwesome';

// import:
import { toggleAdd, toggleDelete } from "../store/actions/product";

// Add useDispatch
import { useSelector, useDispatch } from "react-redux";



// 2. add style. -> numberOfLines={1} if text is large - make is shorter. (only 1 row)

const ProductItemCart = (props) => {
  const dispatch = useDispatch();
  const deleteFromCart = useCallback(() => {
    dispatch(toggleDelete(props.id));
  }, [dispatch, props.id]);

  
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

      <SafeAreaView>
      <View>

      <CustomCartButton
        // instead of always rendering ios-star:
        // render full / empty:
        
        onPress={deleteFromCart}
        />





      </View>
    </SafeAreaView>

    
     
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
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
  // Add style to title:
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)", // black color, bit transparent (0.5)
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

export default ProductItemCart;