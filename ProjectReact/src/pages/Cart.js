import React, { useState, useReducer, useEffect } from "react";
import NavBar from "../components/NavBar";
import CartLeft from "../components/cart/CartLeft";
import CartRight from "../components/cart/CartRight";
import "../commom/scss/cart/memberCartPage.scss";
import CartStore from "../components/cart/CartStore";
import { cartPageReducer } from "../components/cart/CartReducer";
export const cartPageInitState = { step: 0 };

const Cart = props => {
  const [ingreCart, setIngreCart] = useState([]);
  const [courseCart, setCourseCart] = useState([]);
  const [checkoutFinish, setcheckoutFinish] = useState(true);
  const [cartPageState, cartPageDispatch] = useReducer(
    cartPageReducer,
    cartPageInitState
  );
  const id = localStorage.getItem("member_id");
  useEffect(() => {
    let ingreCartList = JSON.parse(localStorage.getItem(`ingreCart${id}`));
    let courseCartList = JSON.parse(localStorage.getItem(`courseCart${id}`));
    if (ingreCartList !== null && ingreCartList.length !== 0)
      setIngreCart([...ingreCart, ...ingreCartList]);
    if (courseCartList !== null && courseCartList.length !== 0)
      setCourseCart([...courseCart, ...courseCartList]);
    return () => {
      localStorage.setItem(`ingreCart${id}`, JSON.stringify(ingreCart));
      localStorage.setItem(`courseCart${id}`, JSON.stringify(courseCart));
    };
  }, []);

  return (
    <>
      <CartStore.Provider
        value={{
          step: cartPageState.step,
          cartPageDispatch
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
