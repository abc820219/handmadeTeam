import React, { useContext, useState, useEffect } from "react";
import { TiShoppingCart } from "react-icons/ti";
import SmallCart from "./cart/SmallCart";
import cartStore from "./cart/CartStore";

const NavBarUnSign = ({ showLightBox, showCart, openCart, login }) => {
  const { ingreCart, courseCart } = useContext(cartStore);
  const [cartLength, setCartLength] = useState(0);
  useEffect(() => {
    setCartLength(courseCart.length + ingreCart.length);
  }, [ingreCart, courseCart]);
  return (
    <>
      <div className="page-nav-rightside mr-5">
        <div className="text-center d-flex align-items-center">
          <p className="text-nowrap mr-3" onClick={() => showLightBox()}>
            sign up
          </p>
          <div className="shoppingCartWrapper">
            <TiShoppingCart
              style={{ fontSize: "30px", color: "white" }}
              onMouseEnter={() => openCart(true)}
              onMouseLeave={() => openCart(false)}
              name="cart"
            />
            <div className="itemTotal">{cartLength}</div>
          </div>
        </div>
      </div>
      <SmallCart openCart={openCart} showCart={showCart} login={login.login} />
    </>
  );
};

export default NavBarUnSign;
