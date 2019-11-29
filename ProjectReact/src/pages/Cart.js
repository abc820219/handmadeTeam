import React, { useState, useReducer, useEffect, useContext } from "react";
import CartLeft from "../components/cart/CartLeft";
import CartRight from "../components/cart/CartRight";
import "../commom/scss/cart/memberCartPage.scss";
import CartStore, { CartStoreStatus } from "../components/cart/CartStore";

const Cart = props => {
  const { id, courseCartCf } = useContext(CartStore);
  const setPage = props.setPage

  // const [cartCourseState, cartCourseDispatch] = useReducer(
  //   cartCourseReducer,
  //   CartStoreStatus.courseCart
  // );

  // const [cartCheckState, cartCheckoutDispatch] = useReducer(
  //   cartCheckoutReducer,
  //   CartStoreStatus.checkoutFinish
  // );

  // const [courseCartCfState, courseCartCfDispatch] = useReducer(
  //   courseCartCfReducer,
  //   courseCartCf
  // )
  const [step, setStep] = useState(0);
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
    if ((await newCourseQty) + value >= 1) {
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
    const newIngreCards = [...ingreCards];
    const newIngreQty = await newIngreCards[pos].ingredients_order_quantity;
    if ((await newIngreQty) + value >= 1) {
      newIngreCards[pos].ingredients_order_quantity =
        (await newIngreQty) + value;
    }
    await setIngreCards(newIngreCards);
    const newQuantity = JSON.stringify(ingreCards);
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

  // const fetchCourseAttendee = async () => {
  //   try {
  //     const user = localStorage.getItem("member_id");
  //     const courseCart = JSON.parse(localStorage.getItem(`courseCart${user}`));
  //     const ingreCart = JSON.parse(localStorage.getItem(`ingreCart${user}`));

  //     const cart = JSON.stringify({
  //       courseCart: courseCart,
  //       ingreCart: ingreCart,
  //       user: user
  //     });
  //     const url = `http://localhost:5000/handmade/cart/submitcart`;
  //     const dataJson = await fetch(url, {
  //       method: "POST",
  //       body: cart,
  //       headers: { "Content-Type": "application/json" }
  //     });
  //     const data = await dataJson.json();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // cartTotal(courseCards,ingreCards);

  useEffect(() => {
    Promise.all([getCourseCard(), getIngreCard()]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <CartLeft
            {...props}
            // cartTotal = {cartTotal}
            courseCards={courseCards}
            setCourseCards={setCourseCards}
            ingreCards={ingreCards}
            setIngreCards={setIngreCards}
            setPage={setPage}
            step={step}
            setStep={setStep}
          />
          <CartRight
            {...props}
            courseCards={courseCards}
            courseAmountBtn={courseAmountBtn}
            courseDelBtn={courseDelBtn}
            ingreCards={ingreCards}
            ingreAmountBtn={ingreAmountBtn}
            ingreDelBtn={ingreDelBtn}
            step={step}
          />
        </div>
      </div>
    </>
  );
};

export default Cart;
