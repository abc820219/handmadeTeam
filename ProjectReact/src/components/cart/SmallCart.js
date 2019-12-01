import React, { useEffect, useState, useContext } from "react";
import "../../commom/scss/cart/memberCart.scss";
import CartCourse from "./CartCourse";
import CartIngre from "./CartIngre";
import { Link } from "react-router-dom";
import CartStore from "./CartStore";
import { MdCancel } from "react-icons/md";



const SmallCart = ({ openCart, showCart }) => {

  let { courseCart, ingreCart, id } = useContext(CartStore);

  console.log(id);
  const [cartBtn, setCartBtn] = useState(false)

  useEffect(() => {
    if (courseCart.length !== 0 || ingreCart.length !== 0) {
      setCartBtn(true)
    } else {
      setCartBtn(false)
    }
  }, [])

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
        <MdCancel className='cartBigCancel' onClick={() => openCart(false)}/>
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
                  courseSid={courseC.course_sid}
                  courseName={courseC.course_name}
                  courseOrderApplicants={courseC.course_order_applicants}
                  courseOrderChoose={courseC.course_order_choose}
                  courseList={courseC.course_list}
                />
              })}
            </div>
            <div style={{ marginBottom: "150px" }}>
              <div className="course-title py-3">食材訂單</div>
              <hr className="hr-bottom"></hr>
              {ingreCart.map((ingreC, index) => {
                return <CartIngre
                  key={`i_${index}`}
                  ingreSid={ingreC.ingredients_sid}
                  ingreName={ingreC.ingredients_name}
                  ingrePic={ingreC.ingredients_pic}
                  ingreOrderQty={ingreC.ingredients_order_quantity}
                  ingreEnName={ingreC.ingredients_en_name}
                  ingrePrice={ingreC.ingredients_price}
                />
              })}
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
          <span className="cartTotal" 
          style={{fontWeight:'bold',fontSize:'40px'}}
          >$ {CartTotal(courseCart, ingreCart)}
          </span>
        </div>
        <div>
          <Link to="/handmade/member/cart" style={cartBtn ? { color: 'white' } : { color: 'white', pointerEvents: 'none' }} onClick={!id ? () => { alert('請先登入') } : ''}
              className="cartBtn"
              style={{fontWeight:'bold',fontSize:'20px'}}
            >
              購買
          </Link>
        </div>
      </div>
    </>
  );
};

export default SmallCart;
