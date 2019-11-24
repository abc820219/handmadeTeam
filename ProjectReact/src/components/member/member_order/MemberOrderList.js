import React, { useState, useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import "../../../commom/scss/member/memberOrderList.scss";
import Store from "./OrderStore";
import MemberOrderListTeacher from "../member_order/MemberOrderListTeacher";
import MemberOrderListCourse from "../member_order/MemberOrderListCourse";
import MemberOrderListIngre from "../member_order/MemberOrderListIngre";
import {
  requestCourseOrder,
  receiveCourseOrder,
  requestIngreOrder,
  receiveIngreOrder,
  requestOrderDetail,
  receiveOrderDetail
} from "./OrderAction";
const MemberOrderList = ({ changeOrderType }) => {
  const {
    courseLists,
    clDispatch,
    ingreLists,
    ilDispatch,
    courseIsFetch,
    ingreIsFetch,
    odlDispatch
  } = useContext(Store);

  const orderCourseData = async () => {
    try {
      const user = await localStorage.getItem("member_id");
      await clDispatch(requestCourseOrder());
      const dataJson = await fetch(
        `http://localhost:5000/handmade/member/order/course/${user}`
      );
      const data = await dataJson.json();
      await clDispatch(receiveCourseOrder(data));
    } catch (e) {
      console.log(e);
    }
  };

  const orderIngreData = async () => {
    try {
      const user = await localStorage.getItem("member_id");
      await ilDispatch(requestIngreOrder());
      const dataJson = await fetch(
        `http://localhost:5000/handmade/member/order/ingre/${user}`
      );
      const datas = await dataJson.json();
      await ilDispatch(receiveIngreOrder(datas));
    } catch (e) {
      console.log(e);
    }
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{
    
  },[])
  useEffect(() => {
    Promise.all([orderCourseData(), orderIngreData()]);
    //eslint-disable-next-line import/no-extraneous-dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseIsFetch, ingreIsFetch]);
  console.log(courseLists);

  const orderDetailData = async (orderType, item) => {
    try {
      const user = await localStorage.getItem("member_id");
      await odlDispatch(requestOrderDetail(item, orderType));
      const orderListDetail = JSON.stringify({
        orderType: orderType,
        item: item,
        user: user
      });
      const url = `http://localhost:5000/handmade/member/order/orderDetail`;
      const dataJson = await fetch(url, {
        method: "POST",
        body: orderListDetail,
        headers: { "Content-Type": "application/json" }
      });
      const data = await dataJson.json();
      await odlDispatch(receiveOrderDetail(data));
    } catch (e) {
      console.log(e);
    }
  };
  console.log(courseLists);
  return (
    <>
      <Container className="memberOrderList container">
        <div className="orderListTitle-bar d-flex align-items-center">
          <h3 className="ml-5 mt-5 mb-5">訂單紀錄</h3>
        </div>
        <div className="memberOrderList-info pl-2">
          <ul className="orderTitle_border">
            <h3 className="orderList_title">課程</h3>
            {/* {courseLists.map(courseList => ( */}
              <MemberOrderListCourse
<<<<<<< HEAD
                // orderDetailData={orderDetailData}
                // key={courseList.order_sid}
                // orderSid={courseList.order_sid}
                // courseName={courseList.course_name}
                // courseOrderChoose={courseList.course_order_choose}
                // coursePrice={courseList.course_price}
=======
                orderDetailData={orderDetailData}
                key={courseList.order_sid}
                courseOrderSid={courseList.course_order_sid}
                courseName={courseList.course_name}
                courseList={courseList.course_list}
                courseOrderChoose={courseList.course_order_choose}
                coursePrice={courseList.course_price}
>>>>>>> 42ffe768ad262ba3dea317152e01a81380de536b
              />
            {/* ))} */}
          </ul>
          <ul className="orderTitle_border">
            <h3 className="orderList_title">食材</h3>
            {ingreLists.map(ingreList => (
              <MemberOrderListIngre
                orderDetailData={orderDetailData}
                key={ingreList.order_sid}
                ingreOrderSid={ingreList.ingredients_order_sid}
                ingredientsName={ingreList.ingredients_name}
                ingredientsQuantity={ingreList.ingredients_order_quantity}
                ingredientsPrice={ingreList.ingredients_price}
              />
            ))}
          </ul>
          <ul className="orderTitle_border">
            <h3 className="orderList_title">老師</h3>
            <MemberOrderListTeacher />
          </ul>
        </div>
      </Container>
    </>
  );
};

export default MemberOrderList;
