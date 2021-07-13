import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const Final = (props) => {
    
  return (
      <View>
        <Text style={styles.final}>Thank You</Text>
      </View>
  );
};

Final.navigationOptions = (navData) => {
  return {
    headerTitle: "Thank You",
  };
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
  container: {
    flex: 1,
    borderRadius: 15,
    shadowColor: "black",
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  final: {
    fontFamily: "Comic Sans MS",
    fontSize: 24,
    textAlign: "center",
    backgroundColor: "#b3b3ff",
  },
  title: {
    fontFamily: "MV Boli",
    fontSize: 22,
    margin: 10,
  },
});

export default Final;