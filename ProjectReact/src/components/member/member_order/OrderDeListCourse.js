import React, { useEffect } from "react";
import "../../../commom/scss/member/orderDeListCourse.scss";
import { FaDollarSign } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { FaMapMarkerAlt, FaQuoteLeft, FaCheck, FaExchangeAlt, FaStar } from "react-icons/fa";

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
        <div className="orderDeListCourseTitle d-flex justify-content-between align-items-center flex-wrap pb-2">
          <p>上課時間: {course_order_choose}</p>
          <p className="d-flex">
            訂單編號: {order_sid}
          </p>
          <p className='w-50'>課程難度: {course_difficult}</p>
          <p>{course_taste}</p>
        </div>
        <hr className="orderDeListCourseHr"></hr>
        <div className="d-flex justify-content-between orderDeListCourseContent">
          <div className="d-flex">
            <div className="imgBox">
              <img src={`/image/course_img/360/${course_list}`} alt="picture" />
            </div>
            <ul>
              <li>
                <div className="title">課程名稱</div>
                <div className="title-detail">{course_name}</div>
              </li>
              <li>
                <div className="title">訂購日期</div>
                <div className="title-detail">{order_create_time}</div>
              </li>
              <li>
                <div className="title">上課時數</div>
                <div className="title-detail">{course_spend_time}</div>
              </li>
            </ul>
          </div>
          <div>
            <p>
              金額:<span>$ </span>{course_price}
            </p>
          </div>
        </div>
        <hr className="orderDeListCourseHr"></hr>
        <ul className="orderDeListMap d-flex justify-content-between align-items-center">
          <li className="iconBox">
            <FaMapMarkerAlt className="orderIcon" />
          </li>
          <li>{store_address}</li>
          <li className="orderBtn">
            <a href={'https://www.google.com/maps/search/' + store_address} target="_blank">Google Map</a>
          </li>
        </ul>
        <hr className="orderDeListCourseHr"></hr>
        <ul className="orderDeListLink d-flex justify-content-between align-items-center">
          <li className="iconBox">
            <FaQuoteLeft className="orderIcon" />
          </li>
          <li style={{ width: '60%' }}>{course_ingredient}</li>
          <li className="orderBtn">
            <a href={`/handmade/store/${store_sid}/course/${course_sid}`}>返回商品頁</a>
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

export default OrderDeListCourse;
