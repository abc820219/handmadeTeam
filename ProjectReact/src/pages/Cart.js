import React, { useState, useReducer, useEffect, useContext } from "react";
import CartLeft from "../components/cart/CartLeft";
import CartRight from "../components/cart/CartRight";
import "../commom/scss/cart/memberCartPage.scss";
import CartStore, { CartStoreStatus } from "../components/cart/CartStore";
import {
  cartPageReducer,
  cartCourseReducer,
  cartCheckoutReducer,
  courseCartCfReducer
} from "../components/cart/CartReducer";
export const cartPageInitState = { step: 0 };

const Cart = props => {
  const {id ,courseCartCf} = useContext(CartStore);
  const [cartPageState, cartPageDispatch] = useReducer(
    cartPageReducer,
    cartPageInitState
  );

  const [cartCourseState, cartCourseDispatch] = useReducer(
    cartCourseReducer,
    CartStoreStatus.courseCart
  );

  const [cartCheckState, cartCheckoutDispatch] = useReducer(
    cartCheckoutReducer,
    CartStoreStatus.checkoutFinish
  );


  const [courseCartCfState, courseCartCfDispatch] = useReducer(
    courseCartCfReducer,
    courseCartCf
  )


  const [courseCards, setCourseCards] = useState();
  const [ingreCards, setIngreCards] = useState();

  let courseCard, ingreCard;

  const getCourseCard = async () => {
    courseCard = await localStorage.getItem("courseCart" + id);
    await setCourseCards(JSON.parse(courseCard));
  };

  const courseAmountBtn = async (pos, value) => {
    const newCourseCards = await [...courseCards];
    const newCourseQty = await newCourseCards[pos].course_order_applicants;
    if ((await newCourseQty) + value >= 0) {
      newCourseCards[pos].course_order_applicants =
        (await newCourseQty) + value;
    }
    await setCourseCards(newCourseCards);
    const newApplicants = await JSON.stringify(courseCards);
    await localStorage.setItem("courseCart" + id, newApplicants);
  };

  const courseDelBtn = async pos => {
    const newCourseCards = await [...courseCards];
    await newCourseCards.splice(pos, 1);
    await setCourseCards(newCourseCards);
    const newCard = await JSON.stringify(newCourseCards);
    await localStorage.setItem("courseCart" + id, newCard);
  };

  const getIngreCard = async () => {
    ingreCard = await localStorage.getItem("ingreCart" + id);
    await setIngreCards(JSON.parse(ingreCard));
  };

  const ingreAmountBtn = async (pos, value) => {
    const newIngreCards = await [...ingreCards];
    const newIngreQty = await newIngreCards[pos].ingredient_order_quantity;
    if ((await newIngreQty) + value >= 0) {
      newIngreCards[pos].ingredient_order_quantity =
        (await newIngreQty) + value;
    }
    await setIngreCards(newIngreCards);
    const newQuantity = await JSON.stringify(ingreCards);
    console.log(id);
    await localStorage.setItem("ingreCart" + id, newQuantity);
  };

  const ingreDelBtn = async pos => {
    const newIngreCards = await [...ingreCards];
    await newIngreCards.splice(pos, 1);
    await setIngreCards(newIngreCards);
    const newCard = await JSON.stringify(newIngreCards);
    await localStorage.setItem("ingreCart" + id, newCard);
  };

  // const getCoupon = async() =>{
  //   await fetch('')
  // }

  console.log(courseCards);
// cartTotal(courseCards,ingreCards);
  useEffect(() => {
    getCourseCard();
    getIngreCard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <CartStore.Provider
        value={{
          id: id,
          step: cartPageState.step,
          cartPageDispatch,
          checkoutFinish: cartCheckState.checkoutFinish,
          cartCheckoutDispatch,
          courseCartCf: courseCartCfState,
          courseCartCfDispatch
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <CartLeft {...props}
            // cartTotal = {cartTotal}
            courseCards = {courseCards}
            ingreCards = {ingreCards}
            />
            <CartRight {...props} 
              courseCards = {courseCards}
              courseAmountBtn = {courseAmountBtn}
              courseDelBtn = {courseDelBtn}
              ingreCards = {ingreCards}
              ingreAmountBtn = {ingreAmountBtn}
              ingreDelBtn = {ingreDelBtn}
            />
          </div>
        </div>
      </CartStore.Provider>
    </>
  );
};

export default Cart;
