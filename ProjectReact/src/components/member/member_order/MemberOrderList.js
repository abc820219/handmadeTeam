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
  receiveOrderSid,
  requestSubjectOrder,
  receiveSubjectOrder
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
    odsDispatch,
    slDispatch,
    subjectList,
    subjectIsFetch
  } = useContext(Store);

  const [open, setOpen] = useState("");
  const [orderPage, setOrderPage] = useState(0);
  const [totalOrderPage, setTotalOrderPage] = useState(0);
  const [totalDataCount, setTotalDataCount] = useState(0);
  const [nowOrderPage, setNowOrderPage] = useState([]);

  const openStatus = i => {
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
      console.log(datas);
      await ilDispatch(receiveIngreOrder(datas));
    } catch (e) {
      console.log(e);
    }
  };

  const orderSubjectData = async () => {
    try {
      const user = await localStorage.getItem("member_id");
      await slDispatch(requestSubjectOrder());
      const dataJson = await fetch(
        `http://localhost:5000/handmade/member/order/subject/${user}`
      );
      const datas = await dataJson.json();
      console.log(datas);
      await slDispatch(receiveSubjectOrder(datas));
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
      await calcauPage(datas);
      await setTotalDataCount(datas.length);
    } catch (e) {
      console.log(e);
    }
  };

  const calcauPage = (datas) => {
    let pageTotal = Math.ceil(datas.length / 8);
    let pageTotalFn = [];
    for (let i = 1; i <= pageTotal; i++) {
      pageTotalFn.push(i);
    }
    setTotalOrderPage(pageTotalFn);
  }

  useEffect(() => {
    orderSidData();
  }, []);

  useEffect(() => {
    changePage(1,orderSid)
  }, [orderSid]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    Promise.all([orderCourseData(), orderIngreData(), orderSubjectData()]);
    //eslint-disable-next-line import/no-extraneous-dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseIsFetch, ingreIsFetch, subjectIsFetch]);

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

  const changePage = (orderPage,orderSid) => {
    const newOrderNum = [];
    let startPage = (orderPage-1)*8;
    let finishPage = (orderPage*8)-1<orderSid.length-1?(orderPage*8)-1:orderSid.length-1;
    for(let i = startPage; i<= finishPage ; i++){
      newOrderNum.push(orderSid[i]);
    }
    setNowOrderPage(newOrderNum);
  }

  console.log(nowOrderPage);

  return (
    <>
      <Container className="memberOrderList container">
        <div className="orderListTitle-bar d-flex align-items-center">
          <h3 className="ml-5 mt-5 mb-5">訂單紀錄--------總筆數: {totalDataCount}</h3>
        </div>
        <nav aria-label="...">
          <ul class="pagination">
            {totalOrderPage?totalOrderPage.map(orderPage => (
              <li class="page-item">
                <a class="page-link" href="#" onClick={()=>{changePage(orderPage,orderSid)}}>{orderPage}</a>
              </li>
            )):''}
          </ul>
        </nav>
        <div className="memberOrderList-info pl-2">
          <ul className="orderTitle_border">
            <h3 className="orderList_title"></h3>
            {nowOrderPage?nowOrderPage.map((v, index) => (
              // <MemberOrderListCourse
              //   orderDetailData={orderDetailData}
              //   key={courseList.order_sid}
              //   orderSid={courseList.order_sid}
              //   courseName={courseList.course_name}
              //   courseOrderChoose={courseList.course_order_choose}
              //   coursePrice={courseList.course_price}
              // />
              <ul>
                <div
                  className="d-flex justify-content-between align-items-center flex-wrap"
                  style={{ color: "#9597A6" }}
                >
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{ color: "#fff" }}
                  >
                    <div
                      className="p-2"
                      style={{ fontWeight: "bold", fontSize: "18px" }}
                    >
                      訂單編號:{v.order_sid}
                    </div>
                    <FaPlus onClick={() => openStatus(index)} />
                  </div>
                  <div>
                    {v.coupon_sid === 0 ? "" : "使用優惠卷代碼:" + v.coupon_sid}
                  </div>
                  <div>
                    {"訂單創建日期:" + v.order_create_time.split("T")[0]}
                  </div>
                  <div>總金額:{v.order_total_price}</div>
                </div>
                <li className={open === index ? "" : "d-none"} id="orderItem">
                  {courseLists.map(row => {
                    if (row.order_sid === v.order_sid) {
                      return (
                        <>
                          <ul className="d-flex justify-content-between align-items-center">
                            <li className="p-3">
                              <div>課程名稱:{row.course_name}</div>
                              <div>開課時間:{row.course_order_choose}</div>
                              <div>報名人數:{row.course_order_applicants}</div>
                            </li>
                            <button
                              onClick={() => {
                                orderDetailData(1, row.course_order_sid);
                              }}
                            >
                              詳細內容
                            </button>
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
                          <button
                            onClick={() => {
                              orderDetailData(2, row.ingredients_order_sid);
                            }}
                          >
                            詳細內容
                          </button>
                        </ul>
                      );
                    } else {
                      return "";
                    }
                  })}
                </li>
                <li className={open === index ? "" : "d-none"}>
                  {subjectList.map(row => {
                    if (row.order_sid === v.order_sid) {
                      return (
                        <ul className="d-flex justify-content-between align-items-center">
                          <li className="p-3">
                            <div>開課名稱:{row.subject_name}</div>
                            <div>開課時間:{row.subject_date}</div>
                            <div>報名人數:{row.subject_applicants}</div>
                          </li>
                          <button
                            onClick={() => {
                              orderDetailData(3, row.subject_order_sid);
                            }}
                          >
                            詳細內容
                          </button>
                        </ul>
                      );
                    } else {
                      return "";
                    }
                  })}
                </li>
              </ul>
            )):''}
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
