import React from "react";
import MemberOrder from "../components/member/member_order/MemberOrder";
import MemberSideBar from "../components/member/MemberSideBar";
import MemberEdit from "../components/member/MemberEdit";
import MemberPasswordEdit from "../components/member/MemberPasswordEdit";
import NavBar from "../components/NavBar";
import {  Route, Switch } from "react-router-dom";
const Member = ({ match }) => {
  return (
    <>
      <div className="d-flex">
        <NavBar />
        <MemberSideBar />
        <Switch>
          <Route
            exact
            path={`/handmade/member/order`}
            component={MemberOrder}
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
