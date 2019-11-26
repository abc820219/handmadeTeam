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
    teacher_big_img
  } = orderDetail;
  return (
    <>
      <div className="container-fluid orderDeCourse d-flex flex-column">
        <wrapper className="d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-between align-items-center px-4">
            <h5>{subject_date}</h5>
            <div>
              <p className="mr-3">
                <FaRegClock className="mr-2" />
                {subject_name}
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
              <div className='orderDeCourseList'>
                <div className='d-flex'>
                  <figure style={iconZone}>
                    <img
                      src={"/image/"+teacher_big_img}
                      alt=""
                    />
                  </figure>
                  <div>
                    <div>
                      <p>教師名稱</p>
                      <h5>{teacher_name}</h5>
                    </div>
                    <div>
                      <p>訂購日期</p>
                      <h5>{order_create_time.split(" ")[0]}</h5>
                    </div>
                  </div>
                  <div className='ml-auto'>
                    <div className='d-flex justify-content-around align-items-center pt-3'>
                      <MdAttachMoney />
                      <p style={{ fontWeight: 'bold' }}>{subject_price}</p>
                    </div>
                  </div>
                </div>
                <ul className='orderCourseStatus d-flex'>
                  <li>
                    <div className='my-1 d-flex justify-content-center align-items-center orderCourseIcon'>
                      <FaRegClock style={{ color: '#EBD0CE' }} />
                    </div>
                    <p>購買數</p>
                  </li>
                  <li>
                    <div className='my-1 mt-2 d-flex justify-content-center align-items-center'>
                      <h4 style={{ color: "#9597A6" , fontSize: '18px', fontWeight:'bold', whiteSpace:'nowrap'}}>{subject_spend_time}</h4>
                    </div>
                  </li>
                  <li>
                    <div className='my-1 d-flex justify-content-center align-items-center orderCourseIcon'>
                      <FaCheck style={{ color: '#EBD0CE' }} />
                    </div>
                    <p>Payed</p>
                  </li>
                  <li>
                    <div className='my-1 mt-2 d-flex justify-content-center align-items-center'>
                      <h4 style={{ color: '#9597A6' }}>15/20</h4>
                    </div>
                    <p>Occupied</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='orderDeCourseList d-flex align-items-center'>
          <figure style={iconZone} className='d-flex justify-content-center align-items-center'>
            <FaMapMarkerAlt style={{ color: '#EBD0CE', fontSize: '30px' }} />
          </figure>
          <p style={{ color: '#544741' }}>{subject_address}</p>
          <a className="orderIconRight ml-auto" href={'https://www.google.com/maps/search/'+subject_address} target="_blank">
            <p style={{ color: '#544741', maxWidth: '500px' }}>Google Map</p>
          </a>
        </div>
        <div className='orderDeCourseList d-flex align-items-center'>
          <figure style={iconZone} className='d-flex justify-content-center align-items-center'>
            <FaQuoteLeft style={{ color: '#EBD0CE', fontSize: '30px' }} />
          </figure>
          <p style={{ color: '#544741', maxWidth: '500px' }}>{subject_feature}</p>
          <div className='orderIconRight ml-auto'>
            <p style={{ color: '#544741' }}>Go Item page</p>
          </div>
        </div>
        <div className='orderDeCourseList d-flex align-items-center'>
          <figure style={iconZone} className='d-flex justify-content-center align-items-center'>
            <img src={"/image/"+subject_img} alt='' />
          </figure>
          <div>
            <div>
              <p>成品名稱</p>
              <h5>{subject_name}</h5>
            </div>
            <div className='mt-3 ml-3'>
              <p>課程難度: {subject_nervous}</p>
            </div>
          </div>
          <div className='orderIconRight ml-auto'>
            <FaStar />
            <p style={{ color: '#544741' }}>Reviews</p>
          </div>
        </div>
        <div className='orderDeCourseList d-flex justify-content-between align-items-center flex-md-wrap'>
          <button className='orderIconBottom'>
            <p style={{whiteSpace:'nowrap'}}>修改參加者資訊</p>
          </button>
          <button className='orderIconBottom'>
            <MdCancel style={{ fontSize: '16px', color: '#545871' }} />
            <p>取消訂單</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderDeListTeacher;