import React, { useState, useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import "../../../commom/scss/member/memberOrderList.scss";
import Store from "./OrderStore";
import { FaPlus } from "react-icons/fa";

import MemberOrderListTeacher from "../member_order/MemberOrderListTeacher";
import MemberOrderListCourse from "../member_order/MemberOrderListCourse";
import MemberOrderListIngre from "../member_order/MemberOrderListIngre";
import {
  requestCourseOrder,
  receiveCourseOrder,
  requestIngreOrder,
  receiveIngreOrder,
  requestOrderDetail,
  receiveOrderDetail,
  receiveOrderSid
} from "./OrderAction";
import { resetWarningCache } from "prop-types";
const MemberOrderList = ({ changeOrderType }) => {
  const {
    courseLists,
    clDispatch,
    ingreLists,
    ilDispatch,
    courseIsFetch,
    ingreIsFetch,
    odlDispatch,
    orderSid,
    odsDispatch
  } = useContext(Store);
  //
  const [open, setOpen] = useState("");
  const openStatus = i => {
    console.log(i);
    if (open === i) {
      setOpen(null);
    } else {
      setOpen(i);
    }
  };
  //
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

  const orderSidData = async () => {
    try {
      const user = await localStorage.getItem("member_id");
      const dataJson = await fetch(
        `http://localhost:5000/handmade/member/order/orderSid/${user}`
      );
      const datas = await dataJson.json();
      await odsDispatch(receiveOrderSid(datas));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    orderSidData();
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    Promise.all([orderCourseData(), orderIngreData()]);
    //eslint-disable-next-line import/no-extraneous-dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseIsFetch, ingreIsFetch]);

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
  console.log(ingreLists);
  console.log(orderSid);

  return (
    <>
      <Container className="memberOrderList container">
        <div className="orderListTitle-bar d-flex align-items-center">
          <h3 className="ml-5 mt-5 mb-5">訂單紀錄</h3>
        </div>
        <div className="memberOrderList-info pl-2">
          <ul className="orderTitle_border">
<<<<<<< HEAD
            <h3 className="orderList_title">訂單編號</h3>

            {orderSid.map((v, index) => (
              // <MemberOrderListCourse
              //   orderDetailData={orderDetailData}
              //   key={courseList.order_sid}
              //   orderSid={courseList.order_sid}
              //   courseName={courseList.course_name}
              //   courseOrderChoose={courseList.course_order_choose}
              //   coursePrice={courseList.course_price}
              // />
              <ul>
                <div className="d-flex justify-content-between align-items-center">
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{ color: "#fff" }}
                  >
                    <div className="p-2">訂單編號:{v.order_sid}</div>
                    <FaPlus onClick={() => openStatus(index)} />
                  </div>
                  <h5>總金額:寫不出來</h5>
                </div>
                <li className={open === index ? "" : "d-none"}>
                  {courseLists.map(row => {
                    if (row.order_sid === v.order_sid) {
                      return (
                        <>
                          <ul className="d-flex justify-content-between align-items-center">
                            <li className="p-3">
                              <div>課程名稱:{row.course_name}</div>
                              <div>開課時間:{row.course_order_choose}</div>
                            </li>
                            <button>詳細內容</button>
                          </ul>
                        </>
                      );
                    } else {
                      return "";
                    }
                  })}
                  {ingreLists.map(row => {
                    if (row.order_sid === v.order_sid) {
                      return (
                        <ul className="d-flex justify-content-between align-items-center">
                          <li className="p-3">
                            <div>食材名稱:{row.ingredients_name}</div>
                            <div>購買數量:{row.ingredients_order_quantity}</div>
                          </li>
                          <button>詳細內容</button>
                        </ul>
                      );
                    } else {
                      return "";
                    }
                  })}
                </li>
              </ul>
            ))}
=======
            <h3 className="orderList_title">課程</h3>
            {/* {courseLists.map(courseList => ( */}
              <MemberOrderListCourse
                // orderDetailData={orderDetailData}
                // key={courseList.order_sid}
                // orderSid={courseList.order_sid}
                // courseName={courseList.course_name}
                // courseOrderChoose={courseList.course_order_choose}
                // coursePrice={courseList.course_price}
              />
            {/* ))} */}
>>>>>>> 8b3126aa011eda65e0f1186ef862639a47769e65
          </ul>
          {/* <ul className="orderTitle_border">
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
          </ul> */}
        </div>
      </Container>
    </>
  );
};

export default MemberOrderList;
