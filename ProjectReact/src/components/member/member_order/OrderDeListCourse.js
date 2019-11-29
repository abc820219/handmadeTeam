import React, { useEffect } from "react";
import "../../../commom/scss/member/orderDeListCourse.scss";
import { FaDollarSign } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import { Link } from "react-router-dom";

const OrderDeListCourse = ({ orderDetail }) => {
  if (!orderDetail) {
    orderDetail = {
      couse_order_choose: "",
      course_list: "",
      course_order_applicant: "",
      course_name: "",
      order_create_time: "",
      order_sid: "",
      course_spend_time: "",
      course_taste: "",
      course_price: ""
    };
  }
  const iconZone = {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    backgroundColor: "#F7ECEB",
    marginRight: "80px"
  };

  // const fetchDetail = async () => {
  //   const id = await localStorage.getItem("member_id");
  //   const dataJson = await fetch(`http://localhost:5000/orderDetail/${id}`);
  //   const data = await dataJson.json();
  //   await console.log(data);
  // };
  const {
    course_sid,
    course_order_choose, //選擇時間
    course_list,
    course_order_applicants,
    course_name,
    order_create_time,
    order_sid,
    course_spend_time,
    course_taste,
    course_price,
    course_ingredient,
    course_difficult,
    store_address,
    store_sid
  } = orderDetail;
  return (
    <>
      <div className="orderDeListCourse">
        <div className="orderDeListCourseTitle d-flex justify-content-between align-items-center ">
          <p>星期五</p>
          <p className="d-flex flex-column ">
            <span>巧克力派</span>
            <span>訂單編號</span>
          </p>
        </div>
        <hr className="orderDeListCourseHr"></hr>
        <div className="d-flex justify-content-between orderDeListCourseContent">
          <div className="d-flex">
            <div className="imgBox">
              <img src="/image/course_img/360/小心心s.png" alt="picture" />
            </div>
            <ul>
              <li>
                <div className="title">老師名稱</div>
                <div className="title-detail">123456</div>
              </li>
              <li>
                <div className="title">訂購日期</div>
                <div className="title-detail">2001-02-30</div>
              </li>
              <li>
                <div className="title">上課時數</div>
                <div className="title-detail">1.5HR</div>
              </li>
            </ul>
          </div>
          <div>
            <p>
              金額:<span>3000</span>$
            </p>
          </div>
        </div>
        <hr className="orderDeListCourseHr"></hr>
        <ul className="orderDeListMap d-flex justify-content-between align-items-center">
          <li className="iconBox">
            <FaMapMarkerAlt className="orderIcon" />
          </li>
          <li>新北市中和區連城路130號</li>
          <li className="orderBtn">
            <a>Google Map</a>
          </li>
        </ul>
        <hr className="orderDeListCourseHr"></hr>
        <ul className="orderDeListLink d-flex justify-content-between align-items-center">
          <li className="iconBox">
            <FaQuoteLeft className="orderIcon" />
          </li>
          <li>商品介紹</li>
          <li className="orderBtn">
            <a>返回商品頁</a>
          </li>
        </ul>
        <hr className="orderDeListCourseHr"></hr>
        <ul className="orderDeListName d-flex justify-content-between align-items-center">
          <li className="imgBox">
            <img src="/image/course_img/360/小心心s.png" alt="picture" />
          </li>
          <li>商品介紹</li>
          <li className="orderBtn">
            <a>review??</a>
          </li>
        </ul>
        <hr className="orderDeListCourseHr"></hr>
        <div className="orderFooter d-flex justify-content-end">
          <input type="button" value="問題回報" className="orderBtn" />
        </div>
      </div>
    </>
  );
};

/* <div className="orderIconRight ml-auto">
              <a style={{ color: "#544741" ,whiteSpace: 'nowrap'}} href={`/handmade/store/${store_sid}/course/${course_sid}`}>Go Item page</a>
            </div> */

/* <a className="orderIconRight ml-auto" href={'https://www.google.com/maps/search/'+store_address} target="_blank">
              <p style={{ color: "#544741", maxWidth: "500px" }}>Google Map</p>
            </a> */

export default OrderDeListCourse;
