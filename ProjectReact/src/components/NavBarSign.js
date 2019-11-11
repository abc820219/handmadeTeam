import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { MdFavorite, MdNotifications } from "react-icons/md";
import { Link } from "react-router-dom";
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
        <div className="navbar-profile">
          <div className="navbar-img-box">
            <img src="https://img.ltn.com.tw/Upload/talk/page/800/2017/03/15/phpWocuqD.png" />
          </div>
          <div className="navbar-profile-list">
            <ul >
              <li>
                <Link to="/handmade/member">會員專區</Link>
              </li>
              <li>
                <Link>登出</Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <MdFavorite style={logoPattern} className="mr-3" />
          <MdNotifications style={logoPattern} className="mr-3" />
          <TiShoppingCart
            style={logoPattern}
            onMouseEnter={() => openCart(true)}
            onMouseLeave={() => openCart(false)}
            name="cart"
          />
        </div>
      </div>
      <Cart openCart={openCart} showCart={showCart} />
    </>
  );
};

export default NavBarSign;
