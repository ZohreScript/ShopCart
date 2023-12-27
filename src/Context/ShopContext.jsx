import React from 'react'
import { createContext, useReducer,useContext  } from "react";

const initialState = {
   total: 0,
   products: []
 };
 
const ShopContext = createContext(initialState);

// shopReducer.js

const shopReducer = (state, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "ADD_TO_CART":
        console.log("ADD_TO_CART", payload);
  
        return {
          ...state,
          products: payload.products
        };
      case "REMOVE_FROM_CART":
        console.log("REMOVE_FROM_CART", payload);
  
        return {
          ...state,
          products: payload.products
        };
      case "UPDATE_PRICE":
        console.log("UPDATE_PRICE", payload);
  
        return {
          ...state,
          total: payload.total
        };

        default:
      throw new Error(`No case for type ${type} found in shopReducer.`);
    }
  };

  //shopProvider
  
export const ShopProvider = ({ children }) => {
 const [state, dispatch] = useReducer(shopReducer, initialState);

 
 const addToCart = (product) => {
    const updatedCart = state.products.concat(product);
      updatePrice(updatedCart)
  
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCart
      }
    });
  };
  
const removeFromCart = (product) => {
    const updatedCart = state.products.filter(
      (currentProduct) => currentProduct.name !== product.name
    );
      updatePrice(updatedCart)
  
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCart
      }
    });
  };
  
  const updatePrice = (products) => {
    let total = 0;
    products.forEach((product) => (total += product.price));
  
    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total
      }
    });
  };
  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart,
  };
 
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;


};

const useShop = () => {
    const context = useContext(ShopContext)
  
    if (context === undefined) {
      throw new Error("useShop must be used within ShopContext")
    }
  
    return context
  }
  
  export default useShop
