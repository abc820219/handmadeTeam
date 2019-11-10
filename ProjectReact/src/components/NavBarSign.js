import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { MdFavorite, MdNotifications } from "react-icons/md";
import Cart from "./cart/Cart";

const NavBarSign = ({ openCart, showCart }) => {
  const logoPattern = {
    fontSize: "30px",
    color: "white"
  };
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-between mr-4"
        style={{ width: "200px" }}
      >
        <figure className="navbar-profile">
          <img
            src="https://www.disneyclips.com/images/images/winnie-the-pooh-honey2.png"
            alt=""
          />
        </figure>
        <MdFavorite style={logoPattern} />
        <MdNotifications style={logoPattern} />
        <TiShoppingCart
          style={logoPattern}
          onMouseEnter={() => openCart(true)}
          onMouseLeave={() => openCart(false)}
          name="cart"
        />
      </div>
      <Cart openCart={openCart} showCart={showCart} />
    </>
  );
};

export default NavBarSign;
