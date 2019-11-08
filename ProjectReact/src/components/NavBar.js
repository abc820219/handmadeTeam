import React, { useState } from "react";
import "../commom/scss/page_navBar.scss";
import "../commom/scss/normalize.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import NavBarSign from "./NavBarSign";
import NavBarUnSign from "./NavBarUnSign";
import MemberLogin from "./MemberLogin";
import { relative } from "path";
import { Link } from "react-router-dom";

const NavBar = props => {
  const [signIn] = useState(false);
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
  return (
    <>
      <nav className="navbar page-nav d-flex">
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
            {showMenuBtn ? (
              <ul className="navbarBtn">
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
            ) : null}
          </div>
          <h3>BAKE TIME</h3>
        </div>
        {signIn ? <NavBarSign /> : <NavBarUnSign showLightBox={memberSignIn} />}
      </nav>
      {showLightBox ? (
        <MemberLogin
          LoginBox={signIn}
          memberSignIn={memberSignIn}
        ></MemberLogin>
      ) : null}
    </>
  );
};

export default NavBar;
