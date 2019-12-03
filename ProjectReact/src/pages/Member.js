import React, { useEffect, useState } from "react";
import MemberOrder from "../components/member/member_order/MemberOrder";
import MemberSideBar from "../components/member/MemberSideBar";
import MemberEdit from "../components/member/MemberEdit";
import Coupon from "../components/member/Coupon";
import MemberPasswordEdit from "../components/member/MemberPasswordEdit";
import { GiHamburgerMenu } from "react-icons/gi";
import Cart from "./Cart";
import UseWinSize from "../components/UseWinSize";
import { Route, Switch } from "react-router-dom";
const Member = ({ login }) => {
  const size = UseWinSize();
  const [showSideBar, setShowSideBar] = useState(true);
  const [page, setPage] = useState(0);
  if (!localStorage.getItem("member_id")) {
    window.location = "http://localhost:3000/handmade";
    return;
  }
  return (
    <>
      {size.width < 1200 ? (  
        <GiHamburgerMenu
          style={{
            position: "fixed",
            top: "15px",
            left: "15px",
            zIndex: "999",
            fontSize: "24px",
            color: "#fff"
          }}
          onClick={() => {
            setShowSideBar(!showSideBar);
          }}
        />
      ) : (
        ""
      )}
      <MemberSideBar showSideBar={showSideBar} page={page} setPage={setPage} />
      <div
        className="d-flex"
        style={{
          backgroundColor: "#eec1b1",
          marginLeft: size.width > 1200 ? "375px" : ""
        }}
      >
        <Switch>
          <Route
            exact
            path={`/handmade/member/order`}
            component={MemberOrder}
          />
          <Route exact path={`/handmade/member/coupon`} component={Coupon} />
          <Route
            exact
            path={`/handmade/member/cart`}
            component={() => <Cart setPage={setPage} />}
          />
          <Route
            exact
            path={`/handmade/member/passwordEdit`}
            component={MemberPasswordEdit}
          />
          <Route path={`/handmade/member/:edit?`} component={MemberEdit} />
        </Switch>
      </div>
    </>
  );
};

export default Member;
