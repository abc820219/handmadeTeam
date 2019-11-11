import React,{useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import "../../../commom/scss/member/memberOrderList.scss";
import MemberOrderListTeacher from '../member_order/MemberOrderListTeacher';
import MemberOrderListCourse from '../member_order/MemberOrderListCourse';
import MemberOrderListIngre from '../member_order/MemberOrderListIngre';

const MemberOrderList = ({ changeOrderType }) => {
  const [courseLists, setCourseLists] = useState([]);
  const [ingreLists, setIngreLists] = useState([]);
  // const [teacherList, setTeacherList] = useState([]);

  const orderCourseData = async () => {
    try {
      const user = await localStorage.getItem("member_id");
      const dataJson = await fetch(
        `http://localhost:5000/handmade/member/order/course/${user}`
      );
      const result = await dataJson.json();
      const newCourseLists = await result;
      await setCourseLists(newCourseLists);
    } catch (e) {
      console.log(e);
    }
  };

  const orderIngreData = async () => {
    try {
      const user = await localStorage.getItem("member_id");
      const dataJson = await fetch(
        `http://localhost:5000/handmade/member/order/ingre/${user}`
      );
      const result = await dataJson.json();
      const newIngreLists = await result;
      await setIngreLists(newIngreLists);
    } catch (e) {
      console.log(e);
    }
  };

  // const orderTeacherData = async () => {
  //   try {
  //     const user = await localStorage.getItem("member_id");
  //     const dataJson = await fetch(
  //       `http://localhost:5000/handmade/member/order/teacher/${user}`
  //     );
  //     const result = await dataJson.json();
  //     const newTeacherList = await [...teacherList, result];
  //     // await setIngreList(newTeacherList);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect (async() => {
    await Promise.all([orderCourseData(), orderIngreData()]);
  //eslint-disable-next-line import/no-extraneous-dependencies
  }, []);
  console.log(ingreLists);
  return (
    <>
      <Container className="memberOrderList container">
        <div className="orderListTitle-bar d-flex align-items-center">
          <h3 className="ml-5 mt-5 mb-5">訂單紀錄</h3>
        </div>
        <div className="memberOrderList-info pl-2">
          <ul className="orderTitle_border" onClick={() => changeOrderType(1)}>
            <h3 className="orderList_title">
              課程
            </h3>
            {courseLists.map((courseList)=> <MemberOrderListCourse 
            key={courseList.order_sid}
            orderSid={courseList.order_sid}
            courseName={courseList.course_name}
            courseOrderChoose={courseList.course_order_choose}
            coursePrice={courseList.course_price}  
            />)}
          </ul>
          <ul className="orderTitle_border" onClick={() => changeOrderType(2)}>
            <h3 className="orderList_title">
              食材
            </h3>
            {ingreLists.map((ingreList)=> <MemberOrderListIngre 
            key={ingreList.order_sid}
            orderSid={ingreList.order_sid}
            ingredientsName={ingreList.ingredients_name}
            ingredientsQuantity={ingreList.ingredients_order_quantity}
            ingredientsPrice={ingreList.ingredients_price}  
            />)}
          </ul>
          <ul className="orderTitle_border">
            <h3 className="orderList_title" onClick={() => changeOrderType(3)}>
              老師
            </h3>
              <MemberOrderListTeacher/>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default MemberOrderList;
