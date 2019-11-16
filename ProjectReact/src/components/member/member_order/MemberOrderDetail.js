import React, { useEffect, useContext } from "react";
// import {useSelector , useDispatch} from 'react-redux';

import "../../../commom/scss/member/memberOrderDetail.scss";
import OrderDeListCourse from "./OrderDeListCourse";
import OrderDeListTeacher from "./OrderDeListTeacher";
import OrderDeListIngre from "./OrderDeListIngre";
import Store from "./OrderStore";

const MemberOrderDetail = () => {
  const { orderType, orderDetailLists, orderDetailFetch } = useContext(Store);
  console.log(orderDetailLists);
  useEffect(() => {
    renderSwitch(orderType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderDetailFetch]);
  function renderSwitch(type) {
    switch (type) {
      case 1:
        return (
          <OrderDeListCourse
            orderDetail={orderDetailLists ? orderDetailLists : []}
          />
        );
      case 2:
        return (
          <OrderDeListIngre
            orderDetail={orderDetailLists ? orderDetailLists : []}
          />
        );
      case 3:
        return (
          <OrderDeListTeacher
            orderDetail={orderDetailLists ? orderDetailLists : []}
          />
        );
      default:
        return "";
    }
  }
  return <>{renderSwitch(orderType)}</>;
};

export default MemberOrderDetail;
