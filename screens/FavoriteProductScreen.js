import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView} from "react-native";
import ProductListCart from "../components/ProductListCart";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import CustomNextButton from "../components/CustomNextButton";
import { useSelector } from "react-redux";
import PaymentScreen from "./PaymentScreen";

const FavoriteProductScreen = (props) => {
  const favProduct = useSelector((state) => state.product.cartProduct);
  let totalPrice =  favProduct.reduce((prevValue, currentValue) => prevValue + currentValue.price, 0);
  const [TextInputCoupon, setTextInputCoupon] = useState('');

  const checkTextInput = () => {
    if (TextInputCoupon.includes("1234")) {
      totalPrice=totalPrice-(totalPrice*0.01);
    }
    if (TextInputCoupon=="Coupon" || TextInputCoupon=="coupon") {
      totalPrice=totalPrice-(totalPrice*0.02);
    }
    if (TextInputCoupon.includes("140721")) {
      totalPrice=totalPrice-(totalPrice*0.03);
    }
    return totalPrice;
  }

  const submitForm = () => {
    console.log(TextInputCoupon);
      if(checkTextInput()){
        props.navigation.navigate({
          routeName: "Payment",
          params: {
            totalPrice: totalPrice,
          },
        });
      }
  }

  if (totalPrice == undefined) totalPrice=0;
  
  const renderPaymentItem = (itemData) => {
    return (
      <PaymentScreen
        onSelect={() => {
          
        }}
      />
    );
  };

  return( 
  <>
    <ScrollView>
      <ProductListCart listData={favProduct} navigation={props.navigation} />
      <Text style={styles.couponTitle}> Enter Coupon:</Text>
      <Text style={styles.coupon}> 1234</Text>
      <Text style={styles.coupon}> Coupon</Text>
      <Text style={styles.coupon}> 140721</Text>
      <TextInput editable maxLength={40} placeholder="Enter Coupon" onChangeText={(value) => setTextInputCoupon(value)}/>
    </ScrollView>
    <View>
        <Text style={styles.titleH1}> Final Price Before Discount: {totalPrice} $ </Text>
        <CustomNextButton onPress={submitForm}/>
    </View>
  </>
  );
};

FavoriteProductScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Shopping Cart",
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
  },
  coupon: {
    fontFamily: "Comic Sans MS",
    fontSize: 16,
    textAlign: "left",
  },
  couponTitle: {
    fontFamily: "Comic Sans MS",
    fontSize: 18,
    textAlign: "left",
    backgroundColor: "#ffc266",
  },
});

export default FavoriteProductScreen;

