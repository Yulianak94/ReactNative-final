import { PRODUCT } from "../../data/dummy-data";
// 1. import:
import { TOGGLE_ADD, TOGGLE_DELETE, ADD_QTY, LESS_QTY } from "../actions/product";


const initialState = {
  product: PRODUCT,
  prod:{},
  cartProduct: [],
};

const ProductReducer = (state = initialState, action) => {
  //let existingIndex = state.cartProduct.findIndex((product) => product.id === action.productId);
  switch (action.type) {
    case TOGGLE_ADD:
      let existingIndex = state.cartProduct.findIndex((product) => product.id === action.productId);
      if (existingIndex >= 0) {
        const updatedFavproduct = [...state.cartProduct];
        updatedFavproduct.splice(existingIndex, 1);
        return { ...state, cartProduct: updatedFavproduct };
      } else {
        const product = state.product.find((product) => product.id === action.productId);
        return { ...state, cartProduct: state.cartProduct.concat(product) };
      }


    case TOGGLE_DELETE:
        return { ...state, cartProduct: state.cartProduct.filter((product) => product.id !== action.productId) };
      

    case ADD_QTY:
      product = state.product.find((product) => product.id === action.productId);
      updatedCartProduct = [...state.cartProduct];
      product.quantity += 1;
      console.log(product);
      return { ...state, cartProduct: state.cartProduct.concat(product) };

    case LESS_QTY:
      product = state.product.find((product) => product.id === action.productId);
      updatedCartProduct = [...state.cartProduct];
      if(product.quantity>0){
      product.quantity -= 1;
      console.log(product);
      }
      return { ...state, cartProduct: state.cartProduct.concat(product) };

    default:
      return state;


  }
};

export default ProductReducer;