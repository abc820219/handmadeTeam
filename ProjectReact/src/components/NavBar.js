import React, { useState, useEffect } from "react";
import "../commom/scss/page_navBar.scss";
import "../commom/scss/normalize.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimesCircle } from "react-icons/fa";
import NavBarSign from "./NavBarSign";
import NavBarUnSign from "./NavBarUnSign";
import MemberBox from "./MemberBox";
import { relative } from "path";
import { Link } from "react-router-dom";

const NavBar = ({ checkLogIn, login }) => {
  console.log(login.login);
  const [showLightBox, setShowLightBox] = useState(false);
  const [showMenuBtn, setshowMenuBtn] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [memberImgName, setMemberImgName] = useState("");
  const [imgHand] = useState(false);

  const openCart = check => {
    setShowCart(check);
  };
  const memberSignIn = () => {
    setShowLightBox(!showLightBox);
  };
  const MenuListLeave = () => {
    if (showMenuBtn === true) {
      setshowMenuBtn(!showMenuBtn);
    }
  };
  if (showLightBox) {
    console.log("clicked");
  }
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
      <nav className="navbar page-nav  align-items-center">
        <div className="page-nav-aside d-flex align-items-center justify-content-between">
          <div style={{ position: relative }}>
            <GiHamburgerMenu
              onClick={() => setshowMenuBtn(true)}
              className="mx-3 "
              style={{ fontSize: "30px", color: "#fff" }}
            />
          </div>
          <ul
            className={showMenuBtn ? "move  navbarBtn" : "navbarBtn"}
            onMouseLeave={MenuListLeave}
          >
            <FaTimesCircle
              onClick={() => setshowMenuBtn(false)}
              style={{ margin: "30px 0 30px 0" }}
            />
            <li>
              <Link style={{ color: "#fff" }} to="/handmade/store/course">
                精選課程
              </Link>
            </li>
            <li>
              <Link style={{ color: "#fff" }} to="/handmade/store">
                烘焙店家
              </Link>
            </li>
            <li>
              <Link style={{ color: "#fff" }} to="/handmade/teacher">
                優質老師
              </Link>
            </li>
            <li>
              <Link style={{ color: "#fff" }} to="/handmade/ingredients">
                精緻食材
              </Link>
            </li>
            <li>
              <Link style={{ color: "#fff" }} to="/handmade">
                首頁
              </Link>
            </li>
          </ul>
          <div className="logoBox">
            <img />
            LOGO
          </div>
        </div>
        {login.login == false ? (
          <NavBarUnSign
            showLightBox={memberSignIn}
            openCart={openCart}
            showCart={showCart}
            login={login}
          />
        ) : (
          <NavBarSign openCart={openCart} showCart={showCart} login={login} memberImgName={memberImgName} />
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
