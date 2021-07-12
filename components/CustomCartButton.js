import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomCartButton = (props) => {
  return (
    <View style={styles.button}>
        <Button 
          {...props}
          icon={
            <Icon
              name="trash"
              size={20}
              color="black" 
            />}/>
      </View>
);};

var styles = StyleSheet.create({
 
  button: {
    margin: 5,
    height: 40,
    width: 40,
    resizeMode : 'stretch',
  } 
});


export default CustomCartButton;
