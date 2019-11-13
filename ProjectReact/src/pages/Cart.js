import React, { useState,useReducer } from "react";
import NavBar from "../components/NavBar";
import CartLeft from "../components/cart/CartLeft";
import CartRight from "../components/cart/CartRight";
import "../commom/scss/cart/memberCartPage.scss";
import CartStore from "../components/cart/CartStore";
import { cartPageReducer } from "../components/cart/CartReducer";
export const cartPageInitState = { step: 0 };

const Cart = ({ login, checkLogIn }) => {
 
    const [cartPageState, cartPageDispatch] = useReducer(
      cartPageReducer,
      cartPageInitState
    );

  return (
    <>
    <CartStore.Provider value={{
      step: cartPageState.step,
      cartPageDispatch
    }}>
      <div className="container-fluid">
        <div className="row">
          <CartLeft/>
          <CartRight/>
        </div>
      </div>
      </CartStore.Provider>
    </>
  );
}

export default Cart;
