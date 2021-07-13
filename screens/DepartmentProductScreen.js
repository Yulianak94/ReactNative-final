import React from "react";
import { View, StyleSheet, FlatList, ScrollView} from "react-native";
import { DEPARTMENT, PRODUCT } from "../data/dummy-data";
import ProductItem from "../components/ProductItem";

const DepartmentProductScreen = (props) => {
  const departmentId = props.navigation.getParam("departmentId");
  const renderProductItem = (itemData) => {

    return (
      <ProductItem
        title={itemData.item.title}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "ProductDetail",
            params: {
              productId: itemData.item.id,
              productTitle:itemData.item.title
            },
          });
        }}
        title={itemData.item.title}
        price={itemData.item.price}
        picture={itemData.item.picture}/>
    );
  };

  const displayedProduct = PRODUCT.filter(
    (product) => product.departmentIds.indexOf(departmentId) >= 0
  );
  return (
    <ScrollView>
    <View style={styles.container}>
      <FlatList
        data={displayedProduct}
        keyExtractor={(item, index) => item.id}
        renderItem={renderProductItem}
        style={{ width: "100%" }}
      />
    </View>
    </ScrollView>
  );
};

DepartmentProductScreen.navigationOptions = (navigationData) => {
  const departmentId = navigationData.navigation.getParam("departmentId");
  const selectedDepartment = DEPARTMENT.find((department) => department.id === departmentId);

  return {
    headerTitle: selectedDepartment.title,
  };
};

const styles = StyleSheet.create({
  container: {
    fontFamily: "Comic Sans MS",
    fontSize: 22,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DepartmentProductScreen;