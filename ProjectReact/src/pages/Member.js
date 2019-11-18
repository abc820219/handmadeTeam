import React, { useEffect, useState } from "react";
import MemberOrder from "../components/member/member_order/MemberOrder";
import MemberSideBar from "../components/member/MemberSideBar";
import MemberEdit from "../components/member/MemberEdit";
import MemberPasswordEdit from "../components/member/MemberPasswordEdit";
import { GiHamburgerMenu } from "react-icons/gi";
import Cart from "./Cart";
import UseWinSize from "../components/UseWinSize";
import { Route, Switch } from "react-router-dom";
const Member = ({ login }) => {
  const size = UseWinSize();
  const [showSideBar, setShowSideBar] = useState(false);
  if (!localStorage.getItem("member_id")) {
    window.location = "http://localhost:3000/handmade";
    return;
  }

  return (
    <>
      <div className="d-flex">
        {size.width < 1200 ? (
          <GiHamburgerMenu
            style={{
              position: "fixed",
              top: "10px",
              left: "10px",
              zIndex: "999",
              fontSize: "24px",
              color: "#fff"
            }}
            onClick={() => {
              setShowSideBar(!showSideBar);
              console.log(showSideBar);
            }}
          />
        ) : (
          ""
        )}
        <MemberSideBar showSideBar={showSideBar} />
        <Switch>
          <Route
            exact
            path={`/handmade/member/order`}
            component={MemberOrder}
          />
          <Route exact path={`/handmade/member/cart`} component={Cart} />
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
