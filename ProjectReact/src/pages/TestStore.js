import React, { useState, useEffect, useContext, useReducer } from "react";
import Course_navbar from "../components/course/Course_navbar";
import NavBar from "../components/NavBar";
import {
  addCourse,
  cancelCourse,
  addIngre,
  cancelIngre
} from "../components/cart/CartAction";

import CartStore from "../components/cart/CartStore";

const TestStore = ({ login, checkLogIn }) => {
  let {
    cartCourseDispatch,
    courseCart,
    id,
    ingreCart,
    cartIngreDispatch
  } = useContext(CartStore);

  const [courseInCart, setCourseInCart] = useState(false);
  const [courseInfo, setCourseInfo] = useState({
    course_sid: 36,
    course_price: 1200,
    course_order_choose: "2019-12-25 15:00:00",
    course_order_applicants: 5,
    course_name: "巧克力玫瑰花束",
    course_lists: "巧克力玫瑰花束.jpg"
  });

  const [ingreInCart, setIngreInCart] = useState(false);
  const [ingreInfo, setIngreInfo] = useState({
    ingredient_sid: 2,
    ingredients_price: 5000,
    ingredients_en_name: "super_banana",
    ingredient_order_quantity: 1,
    ingredient_name: "超級香蕉"
  });
  courseCart = courseCart || [];
  ingreCart = ingreCart || [];

  const checkCoursePage = async () => {
    let check;
    if (courseCart) {
      check = await courseCart.some(course => {
        return (
          course.course_sid == courseInfo.course_sid &&
          course.course_order_choose == courseInfo.course_order_choose
        );
      });
    }
    check ? setCourseInCart(true) : setCourseInCart(false);
  };

  const checkIngrePage = async () => {
    let check;
    if (ingreCart) {
      check = await ingreCart.some(ingre => {
        return ingre.ingredient_sid == ingreInfo.ingredient_sid;
      });
    }
    check ? setIngreInCart(true) : setIngreInCart(false);
  };

  const AddCourseToCart = (item, id) => {
    if (courseInCart) {
      console.log(item, courseCart);
      cartCourseDispatch(cancelCourse(item, id));
    } else {
      cartCourseDispatch(addCourse(item, id));
    }
  };

  const AddIngreToCart = (item, id) => {
    if (ingreInCart) {
      cartIngreDispatch(cancelIngre(item, id));
    } else {
      cartIngreDispatch(addIngre(item, id));
    }
  };

  useEffect(() => {
    Promise.all([checkCoursePage(), checkIngrePage()]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(courseInCart);
  return (
    <>
      <NavBar login={login} checkLogIn={checkLogIn}></NavBar>
      <br />
      <br />
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          AddCourseToCart(courseInfo, id);
        }}
      >
        {courseInCart ? "courseInCart" : "courseNotInCart"}
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          AddIngreToCart(ingreInfo, id);
        }}
      >
        {ingreInCart ? "ingreInCart" : "ingreNotInCart"}
      </button>
    </>
  );
};

export default TestStore;
