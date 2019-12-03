import React, { useContext, useState, useEffect } from "react";
import { TiShoppingCart } from "react-icons/ti";
// import { MdFavorite, MdNotifications } from "react-icons/md";
import { Link } from "react-router-dom";
import SmallCart from "./cart/SmallCart";
import LogOut from "./member/MemberLogout";
import cartStore from "./cart/CartStore";
const NavBarSign = ({ openCart, showCart, login, ...props }) => {
  const { ingreCart, courseCart } = useContext(cartStore);
  const [cartLength, setCartLength] = useState(0);
  useEffect(() => {
    setCartLength(courseCart.length + ingreCart.length);
  }, [ingreCart, courseCart]);
  const [memberList, setMemberList] = useState(false);
  const memberShow = () => {
    setMemberList(!memberList);
  };
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-between mr-3"
        style={{ width: "100px" }}
      >
        <div className="navbar-profile" onClick={memberShow}>
          <div className="navbar-img-box">
            <img
              src={
                !props.memberImgName
                  ? "http://g.udn.com.tw/upfiles/B_AN/andy2946/PSN_PHOTO/813/f_23140813_1.jpg"
                  : `http://localhost:5000/images/member/member${props.memberImgName}`
              }
            ></img>
          </div>
          {memberList ? (
            <div className="navbar-profile-list">
              <ul>
                <li>
                  <Link
                    to="/handmade/member"
                    style={{
                      fontSize: "16px",
                      cursor: "pointer",
                      color: "#000",
                      textDecoration: "none"
                    }}
                  >
                    會員專區
                  </Link>
                </li>
                <li>
                  <LogOut />
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="shoppingCartWrapper">
          <TiShoppingCart
            style={{ fontSize: "30px", color: "white", cursor: "pointer" }}
            onClick={() => openCart(!showCart)}
            name="cart"
          />
          <div className="itemTotal">{cartLength}</div>
        </div>
      </div>
      <SmallCart openCart={openCart} showCart={showCart} login={login.login} />
    </>
  );
};

export default NavBarSign;
