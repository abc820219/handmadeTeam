import React, { useEffect, useState, useContext } from "react";
import "../../commom/scss/cart/memberCart.scss";
import CartCourse from "./CartCourse";
import CartIngre from "./CartIngre";
import { Link } from "react-router-dom";
import CartStore from "./CartStore";
import { MdCancel } from "react-icons/md";

const SmallCart = ({ openCart, showCart, setShowLightBox }) => {
  let { courseCart, ingreCart, id } = useContext(CartStore);

  console.log(id);
  const [cartBtn, setCartBtn] = useState(false);

  useEffect(() => {
    if (courseCart.length !== 0 || ingreCart.length !== 0) {
      setCartBtn(true);
    } else {
      setCartBtn(false);
    }
  }, []);

  courseCart = courseCart || [];
  ingreCart = ingreCart || [];

  let CartTotal = (courseCart, ingreCart) => {
    if (courseCart && ingreCart) {
      let courseTotal = courseCart.reduce((courseCardA, courseCardB) => {
        return (
          courseCardA +
          courseCardB.course_order_applicants * courseCardB.course_price
        );
      }, 0);
      let ingreTotal = ingreCart.reduce((ingreCardA, ingreCardB) => {
        return (
          ingreCardA +
          ingreCardB.ingredients_order_quantity * ingreCardB.ingredients_price
        );
      }, 0);
      return courseTotal + ingreTotal;
    } else {
      return "沒有商品";
    }
  };

  return (
    <>
      <div
        className="memberCartList"
        onMouseEnter={() => openCart(true)}
        onMouseLeave={() => openCart(false)}
        style={{ right: showCart ? "0" : "100%" }}
      >
        <MdCancel
          className="cartBigCancel"
          onClick={() => openCart(false)}
          style={{ cursor: "pointer" }}
        />
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
                return (
                  <CartCourse
                    key={`c_${index}`}
                    courseSid={courseC.course_sid}
                    courseName={courseC.course_name}
                    courseOrderApplicants={courseC.course_order_applicants}
                    courseOrderChoose={courseC.course_order_choose}
                    courseList={courseC.course_list}
                  />
                );
              })}
            </div>
            <div style={{ marginBottom: "200px" }}>
              <div className="course-title py-3">食材訂單</div>
              <hr className="hr-bottom"></hr>
              {ingreCart.map((ingreC, index) => {
                return (
                  <CartIngre
                    key={`i_${index}`}
                    ingreSid={ingreC.ingredients_sid}
                    ingreName={ingreC.ingredients_name}
                    ingrePic={ingreC.ingredients_pic}
                    ingreOrderQty={ingreC.ingredients_order_quantity}
                    ingreEnName={ingreC.ingredients_en_name}
                    ingrePrice={ingreC.ingredients_price}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        className="cartFooter "
        onMouseEnter={() => openCart(true)}
        onMouseLeave={() => openCart(false)}
        style={{ right: showCart ? "0" : "100%" }}
      >
        <div className="cartFooter-left">
          <span className="cartTotal">
            $ {CartTotal(courseCart, ingreCart)}
          </span>
        </div>
        <button
          className="cartBtn cartFooter-right"
          style={{ fontWeight: "bold", fontSize: "20px" }}
        >
          {id ? (
            <Link
              to="/handmade/member/cart"
              style={
                cartBtn
                  ? { color: "white", textAlign: "center" }
                  : { color: "white", pointerEvents: "none" }
              }
            >
              Check-Out
            </Link>
          ) : (
            <p
              onClick={() => {
                setShowLightBox(true);
              }}
              style={{ lineHeight: "32px" }}
            >
              Check-Out
            </p>
          )}
        </button>
      </div>
    </>
  );
};

export default SmallCart;
