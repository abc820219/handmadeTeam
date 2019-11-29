import React from "react";
import "../../../commom/scss/member/orderDeListCourse.scss";
import { FaDollarSign } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


const OrderDeListTeacher = ({orderDetail}) => {
  const iconZone = {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: '#F7ECEB',
    marginRight: '80px'
  };

  console.log(orderDetail);

  if(!orderDetail){
    orderDetail = {
      subject_name: '',
      subject_address: '',
      order_create_time: '',
      subject_nervous: '',
      subject_spend_time: '',
      subject_applicants_name: '',
      subject_applicants_phone: '',
      subject_feature: '',
      subject_price: '',
      order_sid:'',
      subject_date: '',
      subject_img:'',
      teacher_name:'',
      teacher_small_img:'',
      teacher_big_img:'' 
    };
  }

  const {
    subject_name,
    subject_address,
    order_create_time,
    subject_nervous,
    subject_spend_time,
    subject_applicants_name,
    subject_applicants_phone,
    subject_feature,
    subject_price,
    order_sid,
    subject_date,
    subject_img,
    teacher_name,
    teacher_small_img,
    teacher_big_img,
    subject_sid
  } = orderDetail;
  return (
    <>
      <div className="orderDeListCourse">
        <div className="orderDeListCourseTitle d-flex justify-content-between align-items-center flex-wrap pb-2">
          <p>上課時間: {subject_date}</p>
          <p className="d-flex">
            訂單編號: {order_sid}
          </p>
          <p className='w-50'>課程難度: {subject_nervous}</p>
          <p>{subject_name}</p>
        </div>
        <hr className="orderDeListCourseHr"></hr>
        <div className="d-flex justify-content-between orderDeListCourseContent">
          <div className="d-flex">
            <div className="imgBox">
              <img src={`/image/${teacher_big_img}`} alt="picture" />
            </div>
            <ul>
              <li>
                <div className="title">教師名稱</div>
                <div className="title-detail">{teacher_name}</div>
              </li>
              <li>
                <div className="title">訂購日期</div>
                <div className="title-detail">{order_create_time}</div>
              </li>
              <li>
                <div className="title">上課時數</div>
                <div className="title-detail">{subject_spend_time}</div>
              </li>
            </ul>
          </div>
          <div>
            <p>
              金額:<span>$ </span>{subject_price}
            </p>
          </div>
        </div>
        <hr className="orderDeListCourseHr"></hr>
        <ul className="orderDeListMap d-flex justify-content-between align-items-center">
          <li className="iconBox">
            <FaMapMarkerAlt className="orderIcon" />
          </li>
          <li>{subject_address}</li>
          <li className="orderBtn">
            <a href={'https://www.google.com/maps/search/' + subject_address} target="_blank">Google Map</a>
          </li>
        </ul>
        <hr className="orderDeListCourseHr"></hr>
        <ul className="orderDeListLink d-flex justify-content-between align-items-center">
          <li className="iconBox">
            <FaQuoteLeft className="orderIcon" />
          </li>
          <li style={{ width: '60%' }}>{subject_feature}</li>
          <li className="orderBtn">
            <a href={`/handmade/subject/`}>返回老師頁</a>
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

export default OrderDeListTeacher;