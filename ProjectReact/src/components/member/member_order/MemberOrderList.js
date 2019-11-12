
import React, { useState, useEffect, useContext } from "react";
import { Container } from "react-bootstrap";
import "../../../commom/scss/member/memberOrderList.scss";
import Store from "./OrderStore";
import MemberOrderListTeacher from "../member_order/MemberOrderListTeacher";
import MemberOrderListCourse from "../member_order/MemberOrderListCourse";
import MemberOrderListIngre from "../member_order/MemberOrderListIngre";
import {
  requestCourseOrder,
  receiveCourseOrder,
  requestIngreOrder,
  receiveIngreOrder
} from "./OrderAction";
const MemberOrderList = ({ changeOrderType }) => {
  // const [courseLists, setCourseLists] = useState([]);
  // const [ingreLists, setIngreLists] = useState([]);
  // const [teacherList, setTeacherList] = useState([]);
  const {
    courseLists,
    clDispatch,
    ingreLists,
    ilDispatch,
    courseIsFetch,
    ingreIsFetch
  } = React.useContext(Store);

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
      const data = await dataJson.json();
      await ilDispatch(receiveIngreOrder(data));
    } catch (e) {
      console.log(e);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    await Promise.all([orderCourseData(), orderIngreData()]);
    //eslint-disable-next-line import/no-extraneous-dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseIsFetch, ingreIsFetch]);
  // console.log(ingreLists);
  return (
    <>
      <Container className="memberOrderList container">
        <div className="orderListTitle-bar d-flex align-items-center">
          <h3 className="ml-5 mt-5 mb-5">訂單紀錄</h3>
        </div>
        <div className="memberOrderList-info pl-2">
          <ul className="orderTitle_border" onClick={() => changeOrderType(1)}>
            <h3 className="orderList_title">課程</h3>
            {courseLists.map(courseList => (
              <MemberOrderListCourse
                key={courseList.order_sid}
                orderSid={courseList.order_sid}
                courseName={courseList.course_name}
                courseOrderChoose={courseList.course_order_choose}
                coursePrice={courseList.course_price}
              />
            ))}
          </ul>
          <ul className="orderTitle_border" onClick={() => changeOrderType(2)}>
            <h3 className="orderList_title">食材</h3>
            {ingreLists.map(ingreList => (
              <MemberOrderListIngre
                key={ingreList.order_sid}
                orderSid={ingreList.order_sid}
                ingredientsName={ingreList.ingredients_name}
                ingredientsQuantity={ingreList.ingredients_order_quantity}
                ingredientsPrice={ingreList.ingredients_price}
              />
            ))}
          </ul>
          <ul className="orderTitle_border">
            <h3 className="orderList_title" onClick={() => changeOrderType(3)}>
              老師
            </h3>
            <MemberOrderListTeacher />
          </ul>
        </div>
      </Container>
    </>
  );
};

export default MemberOrderList;
