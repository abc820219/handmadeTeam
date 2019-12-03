import React, { useContext, useState, useEffect } from "react";
import { MdCancel } from "react-icons/md";
import CartStore from "./CartStore";
import CartCourseCard from "./CartCourseCard";
import CartIngreCard from "./CartIngreCard";

const CartRight = ({ courseCards,
  courseAmountBtn,
  courseDelBtn,
  ingreCards,
  ingreAmountBtn,
  ingreDelBtn,
  step
}) => {
  let invisible_button = { visibility: step ? "hidden" : "visible" };

  // const [courseCards, setCourseCards] = useState();
  // const [ingreCards, setIngreCards] = useState();

  // let courseCard, ingreCard;

  // const getCourseCard = async () => {
  //   courseCard = await localStorage.getItem("courseCart" + id);
  //   await setCourseCards(JSON.parse(courseCard));
  // };

  // const courseAmountBtn = async (pos, value) => {
  //   const newCourseCards = await [...courseCards];
  //   const newCourseQty = await newCourseCards[pos].course_order_applicants;
  //   if ((await newCourseQty) + value >= 0) {
  //     newCourseCards[pos].course_order_applicants =
  //       (await newCourseQty) + value;
  //   }
  //   await setCourseCards(newCourseCards);
  //   const newApplicants = await JSON.stringify(courseCards);
  //   await localStorage.setItem("courseCart" + id, newApplicants);
  // };

  // const courseDelBtn = async pos => {
  //   const newCourseCards = await [...courseCards];
  //   await newCourseCards.splice(pos, 1);
  //   await setCourseCards(newCourseCards);
  //   const newCard = await JSON.stringify(newCourseCards);
  //   await localStorage.setItem("courseCart" + id, newCard);
  // };

  // const getIngreCard = async () => {
  //   ingreCard = await localStorage.getItem("ingreCart" + id);
  //   await setIngreCards(JSON.parse(ingreCard));
  // };

  // const ingreAmountBtn = async (pos, value) => {
  //   const newIngreCards = await [...ingreCards];
  //   const newIngreQty = await newIngreCards[pos].ingredient_order_quantity;
  //   if ((await newIngreQty) + value >= 0) {
  //     newIngreCards[pos].ingredient_order_quantity =
  //       (await newIngreQty) + value;
  //   }
  //   await setIngreCards(newIngreCards);
  //   const newQuantity = await JSON.stringify(ingreCards);
  //   console.log(id);
  //   await localStorage.setItem("ingreCart" + id, newQuantity);
  // };

  // const ingreDelBtn = async pos => {
  //   const newIngreCards = await [...ingreCards];
  //   await newIngreCards.splice(pos, 1);
  //   await setIngreCards(newIngreCards);
  //   const newCard = await JSON.stringify(newIngreCards);
  //   await localStorage.setItem("ingreCart" + id, newCard);
  // };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="col-md-7  col-12 p-0 checkRightBox">
        <div className="cartRightTitle d-flex align-items-center">
          <h1>shopping-Cart</h1>
        </div>
        <div className="cartRightSubTitle d-flex align-items-center">
          {/* <input
            type="checkbox"
            name="selectTotalCourse"
            style={invisible_button}
          />
          {step ? "" : "全選"} */}
          <h4>課程</h4>
        </div>
        <ul className="cartRightList">
          {courseCards? (
            courseCards.map((courseCard, index) => (
              <CartCourseCard
                pos={index}
                key={"course_" + index}
                course_sid={courseCard.course_sid}
                course_name={courseCard.course_name}
                course_order_choose={courseCard.course_order_choose}
                course_order_time={courseCard.course_order_time}
                course_order_applicants={courseCard.course_order_applicants}
                course_lists={courseCard.course_list}
                course_price={courseCard.course_price}
                courseAmountBtn={courseAmountBtn}
                courseDelBtn={courseDelBtn}
                step={step}
              />
            ))
          ) : (
              <h3>目前課程還沒任何商品</h3>
            )}
        </ul>
        <div className="cartRightSubTitle d-flex align-items-center">
          {/* <input
            type="checkbox"
            name="selectTotalCourse"
            style={invisible_button}
          />
          {step ? "" : "全選"} */}
          <h4>食材</h4>
        </div>
        <ul className="cartRightList">
          {ingreCards?(
            ingreCards.map((ingreCard, index) => (
              <CartIngreCard
                pos={index}
                key={"ingre_" + index}
                ingre_sid={ingreCard.ingredients_sid}
                ingre_name={ingreCard.ingredients_name}
                ingre_en_name={ingreCard.ingredients_en_name}
                ingre_order_quantity={ingreCard.ingredients_order_quantity}
                ingre_pic={ingreCard.ingredients_pic}
                ingre_price={ingreCard.ingredients_price}
                ingreAmountBtn={ingreAmountBtn}
                ingreDelBtn={ingreDelBtn}
                step={step}
              />
            ))
          ) : (
              <h3>目前食材還沒任何商品</h3>
            )}
        </ul>
      </div>
    </>
  );
};

export default CartRight;
