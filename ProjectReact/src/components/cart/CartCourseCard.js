import React, { useContext, useState, useEffect } from "react";
import { MdCancel, MdSentimentSatisfied } from "react-icons/md";
import CartStore from "./CartStore";
import {selectCourse,unSelectCourse} from "./CartAction";

const CartCourseCard = ({
  pos,
  course_sid,
  course_name,
  course_order_choose,
  course_order_time,
  course_order_applicants,
  course_lists,
  course_price,
  courseAmountBtn,
  courseDelBtn
}) => {
  const { step ,courseCartCf, courseCartCfDispatch} = useContext(CartStore);
  let invisible_button = { visibility: step ? "hidden" : "visible" };

  const [checkCourse, setCheckCourse] = useState(true);

    const courseInfo = {
    course_sid: course_sid,
    course_name: course_name,
    course_order_choose: course_order_choose,
    course_order_time: course_order_time,
    course_order_applicants: course_order_applicants,
    course_lists: course_lists,
    course_price: course_price
  } 

  // const courseCartSelector = (pos) => {
  //   console.log('courseCcccccc',checkCourse)
  //   if(!checkCourse){
  //     console.log('courseCartSelector true')
  //     courseCartCfDispatch(selectCourse(pos,courseInfo))
  //   }else{
  //     console.log('courseCartSelector false')
  //     courseCartCfDispatch(unSelectCourse(pos,courseInfo))
  //   }
  // } 
  // useEffect(()=>{
  //   // courseCartSelector(pos)
  //  return ()=> { courseCartSelector(pos) }
  // },[checkCourse])

  // console.log('checkCourse',checkCourse)

  return (
    <>
      <li className="d-flex flex-sm-wrap">
        {/* <input
          type="checkbox"
          name="selectTotalCourse"
          style={invisible_button}
          checked={checkCourse}
          onClick={()=>{setCheckCourse(!checkCourse)}}
        /> */}
        <div className="checkListBox">
          <h4>
            <span>{course_order_time}</span>
            {course_order_choose}
          </h4>
          <h2>{course_name}</h2>
        </div>
        <div className="d-flex justify-content-center flex-column mr-3">
          <div className="d-flex align-items-center cartButtonAdd">
            <button
              style={invisible_button}
              onClick={() => {
                courseAmountBtn(pos, -1);
              }}
            >
              -
            </button>
            <span>{course_order_applicants}</span>
            <button
              style={invisible_button}
              onClick={() => {
                courseAmountBtn(pos, 1);
              }}
            >
              +
            </button>
          </div>
          <p className="cartListTotal">
            Total Count : $ {course_price * course_order_applicants}
          </p>
        </div>
        <figure>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/c94eed56a5e84479a2939c9172434567c0147d4f.jpeg?region=0,0,600,600"
            alt="product pic"
          />
        </figure>
        <MdCancel
          className="cartOrderCancel"
          style={invisible_button}
          onClick={() => {
            courseDelBtn(pos);
          }}
        />
      </li>
    </>
  );
};

export default CartCourseCard;
