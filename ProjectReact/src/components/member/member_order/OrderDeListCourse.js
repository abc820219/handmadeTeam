import React from "react";
import "../../../commom/scss/member/orderDeListCourse.scss";
import { FaDollarSign } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


const OrderDeListCourse = props => {
  const iconZone = {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: '#F7ECEB',
    marginRight: '80px'
  };
  return (
    <>
      <div className="container-fluid orderDeCourse d-flex flex-column">
        <wrapper className="d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-between align-items-center px-4">
            <h5>Friday, February 19th</h5>
            <div>
              <p className="mr-3">
                <FaRegClock className="mr-2" />
                巧克力派
              </p>
              <p className="mr-3">
                <FaDollarSign className="mr-2" />
                訂單編號: 10001
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
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBVl9lhK94mJ5MxzGptFKO5FLRXoXVNDmjYndWy1H4kCaqDqOw"
                      alt=""
                    />
                  </figure>
                  <div>
                    <div>
                      <p>課程名稱</p>
                      <h5>賣口傑克森</h5>
                    </div>
                    <div>
                      <p>訂購日期</p>
                      <h5>2016-5-5</h5>
                    </div>
                  </div>
                  <div className='ml-auto'>
                    <div className='orderCourseDel d-flex justify-content-center align-items-center'>
                      <FaRegTrashAlt style={{ height: '14px' }} />
                      <p>DEL</p>
                    </div>
                    <div className='d-flex justify-content-around align-items-center pt-3'>
                      <MdAttachMoney />
                      <p style={{ fontWeight: 'bold' }}>54668</p>
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
                      <h4 style={{ color: '#9597A6' }}>1.5</h4>
                    </div>
                    <p>HR</p>
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
          <p style={{ color: '#544741' }}>235新北市中和區連城路160號後棟</p>
          <div className='orderIconRight ml-auto'>
            <p style={{ color: '#544741', maxWidth: '500px' }}>Google Map</p>
          </div>
        </div>
        <div className='orderDeCourseList d-flex align-items-center'>
          <figure style={iconZone} className='d-flex justify-content-center align-items-center'>
            <FaQuoteLeft style={{ color: '#EBD0CE', fontSize: '30px' }} />
          </figure>
          <p style={{ color: '#544741', maxWidth: '500px' }}>臣亮言：先帝創業未半，而中道崩殂。今天下三分，益州疲弊，
          此誠危急存亡之秋也。然侍衛之臣，不懈於內；
          忠志臣亮言：先帝創業未半，而中</p>
          <div className='orderIconRight ml-auto'>
            <p style={{ color: '#544741' }}>Go Item page</p>
          </div>
        </div>
        <div className='orderDeCourseList d-flex align-items-center'>
          <figure style={iconZone} className='d-flex justify-content-center align-items-center'>
            <img src="https://i.vimeocdn.com/portrait/4703572_640x640" alt='' />
          </figure>
          <div>
            <div>
              <p>成品名稱</p>
              <h5>超級巧克男孩</h5>
            </div>
            <div className='mt-3 ml-3'>
              <p>4.4 rating</p>
            </div>
          </div>
          <div className='orderIconRight ml-auto'>
            <FaStar />
            <p style={{ color: '#544741' }}>Reviews</p>
          </div>
        </div>
        <div className='orderDeCourseList d-flex justify-content-between align-items-center flex-md-wrap'>
          <div className='orderIconBottom'>
            <FaExchangeAlt style={{ fontSize: '16px', color: '#545871' }} />
            <p>轉讓訂單</p>
          </div>
          <div className='orderIconBottom'>
            <MdCancel style={{ fontSize: '16px', color: '#545871' }} />
            <p>取消訂單</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDeListCourse;
