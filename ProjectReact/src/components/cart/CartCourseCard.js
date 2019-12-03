import React, { useContext, useState, useEffect, useCallback } from "react";
import { MdCancel, MdSentimentSatisfied } from "react-icons/md";
import CartStore from "./CartStore";
import { selectCourse, unSelectCourse ,cancelCourse} from "./CartAction";

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
  courseDelBtn,
  step
}) => {
  const {courseCartCf, courseCartCfDispatch,cartCourseDispatch,id,courseCart} = useContext(CartStore);
  let invisible_button = { visibility: step ? "hidden" : "visible" };
  const [checkCourse, setCheckCourse] = useState(true);
  console.log(course_lists);

  const courseInfo = {
    course_sid: course_sid,
    course_name: course_name,
    course_order_choose: course_order_choose,
    course_order_time: course_order_time,
    course_order_applicants: course_order_applicants,
    course_lists: course_lists,
    course_price: course_price
  };

  // const courseCartSelector = pos => {
  //   console.log("courseCcccccc", checkCourse);
  //   if (!checkCourse) {
  //     console.log("courseCartSelector true");
  //     courseCartCfDispatch(selectCourse(pos, courseInfo));
  //   } else {
  //     console.log("courseCartSelector false");
  //     courseCartCfDispatch(unSelectCourse(pos, courseInfo));
  //   }
  // };

  // const courseSelect = useCallback(
  //   async pos => {
  //     await setCheckCourse(!checkCourse);
  //     if (await checkCourse) {
  //       await console.log("courseCartSelector true");
  //       await courseCartCfDispatch(selectCourse(pos, courseInfo));
  //     } else {
  //       await console.log("courseCartSelector false");
  //       await courseCartCfDispatch(unSelectCourse(pos, courseInfo));
  //     }
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [checkCourse,courseCartCfDispatch]
  // );

  useEffect(() => {
    // if (checkCourse) {
    //   console.log("courseCartSelector true");
    //   courseCartCfDispatch(selectCourse(pos, courseInfo));
    // } else {
    //   console.log("courseCartSelector false");
    //   courseCartCfDispatch(unSelectCourse(pos, courseInfo));
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  } );

  // console.log("checkCourse", checkCourse);

  return (
    <>
      <li className="d-flex flex-sm-wrap checkCourseOrder">
        {/* <input
          type="checkbox"
          name="selectTotalCourse"
          style={invisible_button}
          checked={checkCourse}
          onClick={() => {
            setCheckCourse(!checkCourse);
          }}
        /> */}
        <div className="checkListBox">
          <h4>
            <span className='mr-2'>{course_order_choose.split(" ")[0]}</span>
            <span className='badge badge-pill badge-warning'>{course_order_choose.split(" ")[1]}</span>
          </h4>
          <h2>{course_name}</h2>
        </div>
        <div className="d-flex justify-content-center flex-column mr-3">
          <div className="d-flex align-items-center cartButtonAdd position_card_middle">
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
        <figure className='pic_cart_position'>
          <img
            src={"/image/course_img/360/"+course_lists}
            alt="product pic"
          />
        </figure>
        <MdCancel
          className="cartOrderCancel"
          style={invisible_button}
          onClick={() => {
            courseDelBtn(pos);
            cartCourseDispatch(cancelCourse(courseInfo,id));
          }}
        />
      </li>
    </>
  );
};

export default CartCourseCard;
