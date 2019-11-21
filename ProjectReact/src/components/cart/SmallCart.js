import React, { useEffect, useState, useContext, useCallback } from "react";
import "../../commom/scss/cart/memberCart.scss";
import CartCourse from "./CartCourse";
import CartIngre from "./CartIngre";
import { Link } from "react-router-dom";
import CartStore from "./CartStore";
import { courseCartRerender, ingreCartRerender } from './CartAction';

const SmallCart = ({ openCart, showCart }) => {

  let { courseCart, ingreCart, id, cartCourseDispatch, cartIngreDispatch } = useContext(CartStore);
console.log(courseCart, ingreCart);

  // const reRenderPage = async (id) => {
  //   await cartCourseDispatch(courseCartRerender(id));
  //   await cartIngreDispatch(ingreCartRerender(id));
  // }

  // useEffect(() => {
  //   reRenderPage(id)
  // }, [])

  courseCart = courseCart || [];
  ingreCart = ingreCart || [];

  return (
    <>
      <div
        className="memberCartList"
        onMouseEnter={() => openCart(true)}
        onMouseLeave={() => openCart(false)}
        style={{ right: showCart ? "0" : "100%" }}
      >
        <div className="d-flex flex-column">
          <div className="cartHead">
            <p className="cart-title">購物車</p>
          </div>
          <div className="cartMain">
            {/* ------------------------------------------------------------------------ */}
            <div>
              <div className="course-title py-3">課程訂單</div>
              <hr className="hr-bottom"></hr>
              {courseCart.map((courseC, index) => {
                return <CartCourse
                  key={`c_${index}`}
                  courseName={courseC.course_name}
                  courseOrderApplicants={courseC.course_order_applicants}
                  courseOrderChoose={courseC.course_order_choose}
                  courseOrderTime={courseC.course_order_time}
                  courseLists={courseC.course_lists}
                />
              })}
              <hr className="hr-bottom"></hr>
            </div>
            <div style={{ marginBottom: "150px" }}>
              <div className="course-title py-3">食材訂單</div>
              <hr className="hr-bottom"></hr>
              {ingreCart.map((ingreC, index) => {
               return  <CartIngre 
                 key={`i_${index}`}
                  ingreName={ingreC.ingredient_name}
                  ingreOrderQty={ingreC.ingredient_order_quantity}
                  ingreEnName={ingreC.ingredients_en_name}
                  ingrePrice={ingreC.ingredients_price}
               />
              })}
              <hr className="hr-bottom"></hr>
            </div>
          </div>
        </div>
      </div>
      <div
        className="cartFooter d-flex justify-content-between p-5"
        onMouseEnter={() => openCart(true)}
        onMouseLeave={() => openCart(false)}
        style={{ right: showCart ? "0" : "100%" }}
      >
        <div>
          <span className="cartTotal">$ </span>
        </div>
        <div>
          <Link to="/handmade/member/cart">
            <input
              name=""
              id=""
              className="cartBtn"
              type="button"
              value="購買"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SmallCart;
