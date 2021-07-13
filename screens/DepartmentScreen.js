import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { DEPARTMENT } from "../data/dummy-data";
import DepartmentGridTile from "../components/DepartmentGridTile";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const DepartmentScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <DepartmentGridTile
        title={itemData.item.title}
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

DepartmentScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Product department",
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