import React, { useState } from "react";
import "../commom/scss/page_navBar.scss";
import "../commom/scss/normalize.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import NavBarSign from "./NavBarSign";
import NavBarUnSign from "./NavBarUnSign";
import MemberBox from "./MemberBox";
import { relative } from "path";
import { Link } from "react-router-dom";

const NavBar = ({ checkLogIn, login }) => {
  console.log(login.login);
  const [showLightBox, setShowLightBox] = useState(false);
  const [showMenuBtn, setshowMenuBtn] = useState(false);
  const memberSignIn = () => {
    setShowLightBox(!showLightBox);
  };
  const MenuList = () => {
    setshowMenuBtn(!showMenuBtn);
  };
  const MenuListLeave = () => {
    if (showMenuBtn == true) {
      setshowMenuBtn(!showMenuBtn);
    }
  };
  if (showLightBox) {
    console.log("clicked");
  }

  const [showCart, setShowCart] = useState(false);

  const openCart = check => {
    setShowCart(check);
  };
  return (
    <>
      <nav className="navbar page-nav d-flex align-items-center">
        <div
          className="page-nav-aside d-flex align-items-center justify-content-center"
          onClick={MenuList}
          onMouseLeave={MenuListLeave}
        >
          <div style={{ position: relative }}>
            <GiHamburgerMenu
              className="mx-3 "
              style={{ fontSize: "30px", color: "#fff" }}
            />
          </div>
          <div className="logoBox">
            <img />
            LOGO
          </div>

          <ul className={showMenuBtn ? "move" : "navbarBtn"}>
            <li>
              <Link to="/handmade/store/course">課程</Link>
            </li>
            <li>
              <Link to="/handmade/store">店家</Link>
            </li>
            <li>
              <Link to="/handmade/teacher">老師</Link>
            </li>
            <li>
              <Link to="/handmade/ingredients">食材</Link>
            </li>
            <li>
              <Link to="/handmade">首頁</Link>
            </li>
          </ul>
        </div>
        {login.login == false ? (
          <NavBarUnSign
            showLightBox={memberSignIn}
            openCart={openCart}
            showCart={showCart}
          />
        ) : (
          <NavBarSign openCart={openCart} showCart={showCart} />
        )}
      </nav>
      {/* ------------------ */}
      {showLightBox ? (
        <MemberBox
          LoginBox={login}
          memberSignIn={memberSignIn}
          checkLogIn={checkLogIn}
        ></MemberBox>
      ) : null}
    </>
  );
};

export default NavBar;
