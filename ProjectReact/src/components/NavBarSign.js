import React, { useEffect, useState } from "react";

import { TiShoppingCart } from "react-icons/ti";
// import { MdFavorite, MdNotifications } from "react-icons/md";
import { Link } from "react-router-dom";
import SmallCart from "./cart/SmallCart";
import LogOut from "./member/MemberLogout";
const NavBarSign = ({ openCart, showCart, login }) => {
  const logoPattern = {
    fontSize: "30px",
    color: "white"
  };
  const [memberImgName, setMemberImgName] = useState("");
  const [imgHand, setImgHand] = useState(false);
  const [memberList, setMemberList] = useState(false);
  const memberShow = () => {
    setMemberList(!memberList);
  };
  useEffect(() => {
    fetch("http://localhost:5000/handmade/member/getMemberImg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        member_sid: localStorage.getItem("member_id")
      })
    })
      .then(res => {
        return res.json();
      })
      .then(rows => {
        console.log(rows);
        setMemberImgName(rows.info[0].member_photo_name);
      })
      .catch(error => console.log(error));
  }, [imgHand]);
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
              !memberImgName
                ? "http://g.udn.com.tw/upfiles/B_AN/andy2946/PSN_PHOTO/813/f_23140813_1.jpg"
                : `http://localhost:5000/images/member/member${memberImgName}`
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

        <div>
          <TiShoppingCart
            style={logoPattern}
            onMouseEnter={() => openCart(true)}
            onMouseLeave={() => openCart(false)}
            name="cart"
          />
        </div>
      </div>
      <SmallCart openCart={openCart} showCart={showCart} login={login.login} />
    </>
  );
};

export default NavBarSign;
