import React,{useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import "../../../commom/scss/member/memberOrderList.scss";
import MemberOrderListTeacher from '../member_order/MemberOrderListTeacher';
import MemberOrderListCourse from '../member_order/MemberOrderListCourse';
import MemberOrderListIngre from '../member_order/MemberOrderListIngre';

const MemberOrderList = ({ changeOrderType }) => {
  const [courseList, setCourseList] = useState([]);
  const [ingreList, setIngreList] = useState([]);
  const [teacherList, setTeacherList] = useState([]);

  const orderCourseData = async () => {
    try {
      const user = await localStorage.getItem("member_id");
      
      const dataJson = await fetch(
        `http://localhost:5000/handmade/member/order/course/${user}`
      );
      const result = await dataJson.json();
      const newCourseList = await [...courseList, result];
      await setCourseList(newCourseList);
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
      const newIngreList = await [...ingreList, result];
      await setIngreList(newIngreList);
    } catch (e) {
      console.log(e);
    }
  };

  const orderTeacherData = async () => {
    try {
      const user = await localStorage.getItem("member_id");
      const dataJson = await fetch(
        `http://localhost:5000/handmade/member/order/teacher/${user}`
      );
      const result = await dataJson.json();
      const newTeacherList = await [...teacherList, result];
      await setIngreList(newTeacherList);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    Promise.all([orderCourseData(), orderIngreData(), orderTeacherData()]).then((values)=>{
      console.log(values)
    })
    //orderCourseData();
    //orderIngreData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
            <MemberOrderListCourse/>
          </ul>
          <ul className="orderTitle_border" onClick={() => changeOrderType(2)}>
            <h3 className="orderList_title">
              食材
            </h3>
            <MemberOrderListIngre/>
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
