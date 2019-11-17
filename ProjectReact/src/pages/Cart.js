import React, { useState, useReducer, useEffect } from "react";
import CartLeft from "../components/cart/CartLeft";
import CartRight from "../components/cart/CartRight";
import "../commom/scss/cart/memberCartPage.scss";
import CartStore, { CartStoreStatus } from "../components/cart/CartStore";
import {
  cartPageReducer,
  cartCourseReducer,
  cartCheckoutReducer
} from "../components/cart/CartReducer";
export const cartPageInitState = { step: 0 };

const Cart = props => {
  const [cartPageState, cartPageDispatch] = useReducer(
    cartPageReducer,
    cartPageInitState
  );

  const [cartCourseState, cartCourseDispatch] = useReducer(
    cartCourseReducer,
    CartStoreStatus.courseCart
  );

  const [cartCheckState, cartCheckoutDispatch] = useReducer(
    cartCheckoutReducer,
    CartStoreStatus.checkoutFinish
  );

  return (
    <>
      <CartStore.Provider
        value={{
          step: cartPageState.step,
          cartPageDispatch,
          checkoutFinish: cartCheckState.checkoutFinish,
          cartCheckoutDispatch
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <CartLeft {...props} />
            <CartRight {...props} />
          </div>
        </div>
      </CartStore.Provider>
    </>
  );
};

export default Cart;
