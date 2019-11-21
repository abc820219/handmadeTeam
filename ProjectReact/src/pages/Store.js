import React, {useState, useEffect ,useContext ,useReducer} from "react";
import Course_navbar from "../components/course/Course_navbar";
import NavBar from "../components/NavBar";
import StoreMenu from "../components/store/StoreMenu.js";
import {addCourse,cancelCourse,addIngre,cancelIngre} from '../components/cart/CartAction'

import CartStore from "../components/cart/CartStore";

const Store = ({login,checkLogIn}) => {
  const {cartCourseDispatch,courseCart,id,ingreCart,cartIngreDispatch} = useContext(CartStore);
  // console.log(cartCourseDispatch);

  const [courseInCart,setCourseInCart] = useState(false)
  const [courseInfo,setCourseInfo] = useState({
    course_sid: 2,
    course_price: 1500,
    course_order_time: "14:00:00",
    course_order_choose: "2018-09-10",
    course_order_applicants: 5,
    course_name: "幕幕甜甜",
    course_lists: "幕幕甜甜.jpg"
  });


  const [ingreInCart,setIngreInCart] = useState(false)
  const [ingreInfo,setIngreInfo] = useState({
    ingredient_sid: 2,
    ingredients_price: 500,
    ingredients_en_name: "MOO-MOO-TAN-TAN",
    ingredient_order_quantity: 5,
    ingredient_name: "幕幕甜甜"
  });


  const checkCoursePage = async() => {
    let check = await courseCart.some(course =>{
      return course.course_sid == courseInfo.course_sid && course.course_order_choose == courseInfo.course_order_choose;
    })
    check?setCourseInCart(true):setCourseInCart(false);
  }

  const checkIngrePage = async() => {
    let check = await ingreCart.some(ingre =>{
      return ingre.ingredient_sid == ingreInfo.ingredient_sid;
    })
    check?setIngreInCart(true):setIngreInCart(false);
  }

  const AddCourseToCart = (item,id) => {
    if(courseInCart){
      console.log(item,courseCart);
      cartCourseDispatch(cancelCourse(item,id));
    }else{
      cartCourseDispatch(addCourse(item,id));
    }
  }

  const AddIngreToCart = (item,id) => {
    if(ingreInCart){
      cartIngreDispatch(cancelIngre(item,id));
    }else{
      cartIngreDispatch(addIngre(item,id));
    }
  }

  useEffect(()=>{
    Promise.all([checkCoursePage(),checkIngrePage()]);
    // eslint-disable-next-line react-hooks/exhaustive-deps   
  },[])
  console.log(courseInCart);
    return (
      <>
        <NavBar
          login={login}
          checkLogIn={checkLogIn}
        ></NavBar>
        <StoreMenu />
        <br/>
        <br/>
        <br/>
        <button onClick={()=>{AddCourseToCart(courseInfo,id)}}>{courseInCart?'courseInCart':'courseNotInCart'}</button>
        <br/>
        <br/>
        <button onClick={()=>{AddIngreToCart(ingreInfo,id)}}>{ingreInCart?'ingreInCart':'ingreNotInCart'}</button>
      </>
    );
}

export default Store;
