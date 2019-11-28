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

import {Link} from 'react-router-dom';

const OrderDeListCourse = ({orderDetail}) => {
  if(!orderDetail){
    orderDetail = {
      couse_order_choose: '',
      course_list: '',
      course_order_applicant: '',
      course_name: '',
      order_create_time: '',
      order_sid: '',
      course_spend_time: '',
      course_taste: '',
      course_price: ''
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
    course_order_choose,
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

  useEffect(() => {
    // fetchDetail();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    return (
      <>
        <div className="container-fluid orderDeCourse d-flex flex-column">
          <wrapper className="d-flex flex-column justify-content-center">
            <div className="d-flex justify-content-between align-items-center px-4">
              <h5>{course_order_choose}</h5>
              <div>
                <p className="mr-3">
                  <FaRegClock className="mr-2" />
                  {course_taste}
                </p>
                <p className="mr-3">
                  <FaDollarSign className="mr-2" />
                  訂單編號: {order_sid}
                </p>
              </div>
            </div>
          </wrapper>
          <div>
            <div>
              <div className="d-flex align-items-center">
                <div className="orderDeCourseList">
                  <div className="d-flex">
                    <figure style={iconZone}>
                      <img
                        src={"/image/course_img/360/"+course_list}
                        alt=""
                      />
                    </figure>
                    <div>
                      <div>
                        <p>課程名稱</p>
                        <h5>{course_name}</h5>
                      </div>
                      <div>
                        <p>訂購日期</p>
                        <h5>{order_create_time.split(" ")[0]}</h5>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <div className="d-flex justify-content-around align-items-center pt-3">
                        <MdAttachMoney />
                        <p style={{ fontWeight: "bold" }}>{course_price * course_order_applicants}</p>
                      </div>
                    </div>
                  </div>
                  <ul className="orderCourseStatus d-flex">
                    <li>
                      <div className="my-1 d-flex justify-content-center align-items-center orderCourseIcon">
                        <FaRegClock style={{ color: "#EBD0CE" }} />
                      </div>
                      <p>購買數</p>
                    </li>
                    <li>
                      <div className="my-1 mt-2 d-flex justify-content-center align-items-center">
                        <h5 style={{ color: "#9597A6" , fontSize: '18px', fontWeight:'bold', whiteSpace:'nowrap'}}>{course_spend_time}</h5>
                      </div>
                    </li>
                    <li>
                      <div className="my-1 d-flex justify-content-center align-items-center orderCourseIcon">
                        <FaCheck style={{ color: "#EBD0CE" }} />
                      </div>
                      <p>Payed</p>
                    </li>
                    <li>
                      <div className="my-1 mt-2 d-flex justify-content-center align-items-center">
                        <h4 style={{ color: "#9597A6" }}>15/20</h4>
                      </div>
                      <p>Occupied</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="orderDeCourseList d-flex align-items-center">
            <figure
              style={iconZone}
              className="d-flex justify-content-center align-items-center"
            >
              <FaMapMarkerAlt style={{ color: "#EBD0CE", fontSize: "30px" }} />
            </figure>
            <p style={{ color: "#544741" }}>{store_address}</p>
            <a className="orderIconRight ml-auto" href={'https://www.google.com/maps/search/'+store_address} target="_blank">
              <p style={{ color: "#544741", maxWidth: "500px" }}>Google Map</p>
            </a>
          </div>
          <div className="orderDeCourseList d-flex align-items-center">
            <figure
              style={iconZone}
              className="d-flex justify-content-center align-items-center"
            >
              <FaQuoteLeft style={{ color: "#EBD0CE", fontSize: "30px" }} />
            </figure>
            <p style={{ color: "#544741", maxWidth: "500px" }}>
              {course_ingredient}
            </p>
            <div className="orderIconRight ml-auto">
              <a style={{ color: "#544741" ,whiteSpace: 'nowrap'}} href={`/handmade/store/${store_sid}/course/${course_sid}`}>Go Item page</a>
            </div>
          </div>
          <div className="orderDeCourseList d-flex align-items-center">
            <figure
              style={iconZone}
              className="d-flex justify-content-center align-items-center"
            >
              <img src="https://i.vimeocdn.com/portrait/4703572_640x640" alt="" />
            </figure>
            <div>
              <div>
                <p>成品名稱</p>
                <h5>{course_name}</h5>
              </div>
              <div className="mt-3 ml-3">
                <p>課程難度: {" "+course_difficult}</p>
              </div>
            </div>
            <div className="orderIconRight ml-auto">
              <FaStar />
              <p style={{ color: "#544741" }}>Reviews</p>
            </div>
          </div>
          <div className="orderDeCourseList d-flex justify-content-between align-items-center flex-md-wrap">
            <button className="orderIconBottom">
              <FaExchangeAlt style={{ fontSize: "16px", color: "#545871" }} />
              <p>轉讓訂單</p>
            </button>
            <button className="orderIconBottom">
              <MdCancel style={{ fontSize: "16px", color: "#545871" }} />
              <p>取消訂單</p>
            </button>
          </div>
        </div>
      </>
    );
  };

export default OrderDeListCourse;
