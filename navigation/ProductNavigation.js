import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import DepartmentScreen from "../screens/DepartmentScreen";
import DepartmentProductScreen from "../screens/DepartmentProductScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import FavoriteProductScreen from "../screens/FavoriteProductScreen";
import PaymentScreen from "../screens/PaymentScreen";
import Final from "../components/Final";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "react-navigation-drawer";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primary
  },
  headerTintColor: 'white',
  headerTitle: "A Screen",
};

const ProductNavigator = createStackNavigator(
  {
    Department: DepartmentScreen,
    DepartmentProduct: {
      screen: DepartmentProductScreen,
    },
    ProductDetail: ProductDetailScreen,
    Payment: PaymentScreen,
    Final,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoriteProductScreen,
    ProductDetail: ProductDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const ProductFavTabNavigator = createBottomTabNavigator(
  {
    Product: {
      screen: ProductNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="apps-outline"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarLabel: "Shopping Cart",
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="archive-sharp" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.primaryColor,
    },
  }
);

const MainNavigator = createDrawerNavigator(
  {
    productFavs: {
      screen: ProductFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Product",
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: Colors.secondary,
      labelStyle: {
        fontFamily: "MontserratAlternates-Medium",
      },
    },
  }
);

export default createAppContainer(MainNavigator);