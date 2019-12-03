import React, { useEffect, useContext, useState } from "react";
// import {useSelector , useDispatch} from 'react-redux';

import "../../../commom/scss/member/memberOrderDetail.scss";
import OrderDeListCourse from "./OrderDeListCourse";
import OrderDeListTeacher from "./OrderDeListTeacher";
import OrderDeListIngre from "./OrderDeListIngre";
import Store from "./OrderStore";
import { transform } from "@babel/core";

const MemberOrderDetail = () => {
  const { orderType, orderDetailLists, orderDetailFetch } = useContext(Store);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderDetailFetch]);
  const renderSwitch = type => {
    switch (type) {
      case 1:
        return <OrderDeListCourse orderDetail={orderDetailLists} />;
      case 2:
        return <OrderDeListIngre orderDetail={orderDetailLists} />;
      case 3:
        return <OrderDeListTeacher orderDetail={orderDetailLists} />;
      default:
        return (
          <>
            <h2 className="noData">尚無資料,請點選訂單</h2>
          </>
        );
    }
  };
  return <>{loading && renderSwitch(orderType)}</>;
};

export default MemberOrderDetail;
