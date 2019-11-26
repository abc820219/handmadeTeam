import React, { useState, useReducer, useContext } from "react";
// import store from '../../store'
import MemberOrderList from "./MemberOrderList";
import MemberOrderDetail from "./MemberOrderDetail";
import Store from "./OrderStore";
import {
  courseListReducer,
  ingreListReducer,
  orderDetailReducer,
  orderItemReducer,
  orderSidReducer,
  subjectListReducer
} from "./OrderReducers";
export const courseInitState = { courseLists: [] };
export const ingreInitState = { ingreLists: [] };
export const orderDetailInitState = { orderDetail: [] };
export const orderSidState = { order_sid: [] };
export const subjectInitState = { subjectList: [] };

const MemberOrder = () => {
  const { orderDetailFetch , subjectList } = useContext(Store);
  const [clState, clDispatch] = useReducer(courseListReducer, courseInitState);
  const [ilState, ilDispatch] = useReducer(ingreListReducer, ingreInitState);
  const [slState, slDispatch] = useReducer(subjectListReducer, subjectInitState);
  // const [orderType, setOrderType] = useState(1);
  // const changeOrderType = a => {
  //   setOrderType(a);
  // };

  const [odState, odlDispatch] = useReducer(
    orderDetailReducer,
    orderDetailInitState
  );
  const [odsState, odsDispatch] = useReducer(orderSidReducer, orderSidState);
  return (
    <Store.Provider
      value={{
        courseLists: clState.courseLists,
        ingreLists: ilState.ingreLists,
        courseIsFetch: Store.courseIsFetch,
        ingreIsFetch: Store.ingreIsFetch,
        orderSid: odsState.order_sid,
        orderDetailLists: odState.orderDetailLists,
        orderDetailFetch: orderDetailFetch,
        orderType: odState.orderType,
        subjectList: slState.subjectList,
        clDispatch,
        ilDispatch,
        odlDispatch,
        odsDispatch,
        slDispatch
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 p-0  col-12">
            <MemberOrderList style={{ paddingTop: "60px" }} />
          </div>
          <div className="col-md-8 p-0 col-12">
            <MemberOrderDetail style={{ paddingTop: "60px" }} />
          </div>
        </div>
      </div>
    </Store.Provider>
  );
};

export default MemberOrder;
