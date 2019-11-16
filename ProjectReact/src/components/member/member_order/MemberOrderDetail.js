import React ,{useEffect, useContext}from "react";
// import {useSelector , useDispatch} from 'react-redux';

import "../../../commom/scss/member/memberOrderDetail.scss";
import OrderDeListCourse from "./OrderDeListCourse";
import OrderDeListTeacher from "./OrderDeListTeacher";
import OrderDeListIngre from "./OrderDeListIngre";
import Store from "./OrderStore";

const MemberOrderDetail = () => {
  const {
    orderType,
    orderDetailLists
  } = useContext(Store);
  let newOrderDetailList;
  useEffect(()=>{
    renderSwitch(orderType);
    newOrderDetailList = orderDetailLists;
  },[orderType,orderDetailLists])
  function renderSwitch(type) {
    switch (type) {
      case 1:
        console.log(456);
        return <OrderDeListCourse orderDetailLists={newOrderDetailList}/>;
      case 2:
        return <OrderDeListIngre orderDetailLists={newOrderDetailList}/>;
      case 3:
        return <OrderDeListTeacher/>;
      default:
        return "";
    }
  }
  return <>{renderSwitch(orderType)}</>
};

export default MemberOrderDetail;
