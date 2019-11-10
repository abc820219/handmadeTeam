import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import Cart from "./cart/Cart";

const NavBarUnSign = ({ showLightBox, showCart, openCart }) => {
  return (
    <>
      <div className="page-nav-rightside mr-5">
        <div className="text-center d-flex align-items-center   ">
          <p className="text-nowrap mr-3" onClick={() => showLightBox()}>
            sign up
          </p>
          <div>
            <TiShoppingCart
              style={{ fontSize: "30px", color: "white" }}
              onMouseEnter={() => openCart(true)}
              onMouseLeave={() => openCart(false)}
              name="cart"
            />
          </div>
        </div>
      </div>
      <Cart openCart={openCart} showCart={showCart} />
    </>
  );
};

export default NavBarUnSign;
