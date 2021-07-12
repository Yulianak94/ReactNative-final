import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button} from "react-native";

const Final = (props) => {
    

  return (
      <View>
        <Text>Thank You</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },

  // 2. Add style to container:
  container: {
    flex: 1,
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3, // for android
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  // 3. Add style to title:
  title: {
    fontFamily: "MV Boli",
    fontSize: 22,
    margin: 10,
  },
});

export default Final;