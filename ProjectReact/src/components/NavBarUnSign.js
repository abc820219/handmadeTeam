import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import SmallCart from "./cart/SmallCart";

const NavBarUnSign = ({ showLightBox, showCart, openCart ,login}) => {
  return (
    <>
      <div className="page-nav-rightside mr-5">
        <div className="text-center d-flex align-items-center">
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
      <SmallCart openCart={openCart} showCart={showCart} login={login.login}/>
    </>
  );
};

export default NavBarUnSign;
