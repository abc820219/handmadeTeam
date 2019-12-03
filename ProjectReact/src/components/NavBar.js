import React, { useState, useEffect } from "react";
import "../commom/scss/page_navBar.scss";
import "../commom/scss/normalize.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimesCircle } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import NavBarSign from "./NavBarSign";
import NavBarUnSign from "./NavBarUnSign";
import MemberBox from "./MemberBox";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const NavBar = ({ checkLogIn, login, ...props }) => {
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

  const [bgImg, setBgImg] = useState(false);

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
    setBgImg(localStorage.getItem("dessert_prefer"));
  }, [imgHand]);
  return (
    <>
      <nav className="navbar page-nav  align-items-center">
        <div className="page-nav-aside d-flex align-items-center justify-content-between">
          <div style={{ position: "relative", cursor: "pointer" }}>
            <GiHamburgerMenu
              onClick={() => setshowMenuBtn(true)}
              className="mx-3 "
              style={{ fontSize: "30px", color: "#fff" }}
            />
          </div>
          <ul
            className={showMenuBtn ? "move  navbarBtn" : "navbarBtn"}
            // onMouseLeave={MenuListLeave}
          >
            <img
              className="showMenuBackgroundImage"
              src="/image/sideBarImage/info.png"
            ></img>
            <li className="w-100">
              <Link style={{ color: "#fff" }} to="/handmade">
                <img src="/image/logo/logo-03.png" alt="" width="220px" />
              </Link>
              <FaTimesCircle
                className="closeMenuButton"
                onClick={() => setshowMenuBtn(false)}
                style={{ cursor: "pointer" }}
              />
            </li>
            <li className="chooseLiHover">
              <Link
                className="chooseLinkHover"
                style={{ color: "#fff" }}
                to="/handmade/store"
              >
                玩樂烘焙
              </Link>
              <Link className="choosePHover" to="/handmade/store">
                尋找店家 / 課程
              </Link>
              <img
                className="chooseImageHover"
                style={{ marginTop: "-300px" }}
                src="/image/sideBarImage/classroom.png"
              ></img>
            </li>
            <li className="chooseLiHover">
              <Link
                className="chooseLinkHover"
                style={{ color: "#fff" }}
                to="/handmade/teacher"
              >
                異國薈萃
              </Link>
              <Link className="choosePHover" to="/handmade/teacher">
                國際名師開課
              </Link>
              <img
                className="chooseImageHover"
                style={{ marginTop: "-450px" }}
                src="/image/sideBarImage/t5.png"
              ></img>
            </li>
            <li className="chooseLiHover">
              <Link
                className="chooseLinkHover"
                style={{ color: "#fff" }}
                to="/handmade/ingredients"
              >
                譜出滋味
              </Link>
              <Link className="choosePHover" to="/handmade/ingredients">
                推薦食譜 / 購買食材
              </Link>
              <img
                className="chooseImageHover"
                style={{ marginTop: "-600px" }}
                src="/image/sideBarImage/info.png"
              ></img>
            </li>
            {/* <li>
              <Link style={{ color: "#fff" }} to="/handmade/findstore">
                地圖
              </Link>
            </li>
            <li>
              <Link style={{ color: "#fff" }} to="/handmade/test">
                測試
              </Link>
            </li> */}
            <li>
              <Link
                style={{
                  color: "#fff",
                  position: "absolute",
                  bottom: "-200px",
                  right: "50px",
                  fontSize: "30px"
                }}
                to="/handmade/"
              >
                <GoHome style={{ marginBottom: "10px", marginRight: "5px" }} />
                <span>回首頁</span>
              </Link>
            </li>
          </ul>
        </div>
        {login.login == false ? (
          <NavBarUnSign
            showLightBox={memberSignIn}
            openCart={openCart}
            showCart={showCart}
            login={login}
            setShowLightBox={setShowLightBox}
            
          />
        ) : (
          <NavBarSign
            openCart={openCart}
            showCart={showCart}
            login={login}
            memberImgName={memberImgName}
          />
        )}
      </nav>

      {/* ---------rwd min--------- */}

      {/* ------------------ */}

      {showLightBox ? (
        <MemberBox
          bgImg={bgImg}
          LoginBox={login}
          memberSignIn={memberSignIn}
          checkLogIn={checkLogIn}
        ></MemberBox>
      ) : null}
    </>
  );
};

export default withRouter(NavBar);
