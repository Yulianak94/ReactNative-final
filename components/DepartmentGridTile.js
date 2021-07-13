import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const DepartmentGridTile = (props) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View style={{ ...styles.container, backgroundColor: props.color  }}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
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
  title: {
    //fontFamily: "MV Boli",
    fontSize: 22,
    margin: 10,
    fontFamily:'MontserratAlternates-Medium'
  },
});

export default DepartmentGridTile;