import React, { useContext } from "react";
import { FaRegClock } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { AiOutlineBook } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { cancelCourse } from './CartAction';
import CartStore from './CartStore'

const CartCourse = ({ courseName, courseOrderApplicants, courseOrderChoose, courseList, courseSid }) => {
  
  const { courseCart, id, cartCourseDispatch } = useContext(CartStore);
  const courseSelect = (courseSid,courseOrderChoose) => {
    let courseSelectCheck = courseCart.filter((courseC) => {
      return courseC.course_sid == courseSid && courseC.course_order_choose == courseOrderChoose
    })
    cartCourseDispatch(cancelCourse(courseSelectCheck[0], id))
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center px-4 course_sm_cart mb-0">
        <div className='cancel_sm_cart'>
          <MdCancel style={{ cursor: 'pointer'}} onClick={() => courseSelect(courseSid,courseOrderChoose)} />
        </div>
        <li className="d-flex flex-column align-items-between py-3 ml-3" style={{lineHeight:'30px'}}>
          <div className="product-title" style={{fontSize:'20px'}}>{courseOrderChoose ? courseOrderChoose.split(" ")[0] : ''}</div>
          <div className="d-flex align-items-center" style={{fontSize:'14px'}}>
            <AiOutlineBook className="cartList_icons" />
            {courseName}
          </div>
          <div className="d-flex align-items-center">
            <FaRegClock className="cartList_icons" style={{marginRight:'5px'}}/>
            {courseOrderChoose ? courseOrderChoose.split(" ")[1] : ''}
          </div>
          <div className="d-flex align-items-center">
            <GoPerson className="cartList_icons" style={{marginRight:'5px'}}/>
            {courseOrderApplicants}
          </div>
        </li>
        <figure style={{
          height:"125px",
          width:'125px',
          overflow: "hidden"

        }}
        className='m-0 mt-1'
        >
          <img
            src={"/image/course_img/360/" + courseList}
            alt=""
            width="100%"
            // height="100%"
          />
        </figure>
      </div>
    </>
  );
};

export default CartCourse;
