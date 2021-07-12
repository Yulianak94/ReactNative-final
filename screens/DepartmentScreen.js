import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, FlatList } from "react-native";

import { DEPARTMENT } from "../data/dummy-data";
import DepartmentGridTile from "../components/DepartmentGridTile";
// 2. Import:
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const DepartmentScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <DepartmentGridTile
        title={itemData.item.title}
        // 2. Add color ref:
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "DepartmentProduct",
            params: {
              departmentId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={DEPARTMENT}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

// 1. Change the navigationOptions to function, so we can return values:
DepartmentScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Product department",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          // 2. Add function: open the side menu: we see TripsFav and Filters
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DepartmentScreen;