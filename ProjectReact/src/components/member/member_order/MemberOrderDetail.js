import React from "react";
// import {useSelector , useDispatch} from 'react-redux';

import "../../../commom/scss/member/memberOrderDetail.scss";
import OrderDeListCourse from "./OrderDeListCourse";
import OrderDeListTeacher from "./OrderDeListTeacher";
import OrderDeListIngre from "./OrderDeListIngre";

const MemberOrderDetail = ({ orderType }) => {
  function renderSwitch(a) {
    switch (a) {
      case 1:
        return <OrderDeListIngre />;
      case 2:
        return <OrderDeListCourse />;
      case 3:
        return <OrderDeListTeacher />;
      default:
        return "";
    }
  }
  return <>{renderSwitch(orderType)}</>;
};

export default MemberOrderDetail;
