import React, { useContext } from "react";
import { MdCancel } from "react-icons/md";
import CartStore from "./CartStore";
import {cancelCourse} from "./CartAction";
const CartIngreCard = ({
  pos,
  ingre_sid,
  ingre_name,
  ingre_en_name,
  ingre_order_quantity,
  ingre_pic,
  ingre_price,
  ingreAmountBtn,
  ingreDelBtn,
  step
}) => {
  const { id, cartIngreDispatch,ingreCart} = useContext(CartStore);
  let invisible_button = { visibility: step ? "hidden" : "visible" };
  const courseInfo = {
    ingredients_sid: ingre_sid,
    ingredients_name: ingre_name,
    ingredients_pic : ingre_pic,
    ingredients_price: ingre_price,
    ingredients_order_quantity: ingre_order_quantity,
    ingredients_en_name: ingre_en_name,
  };

  return (
    <>
      <li className="d-flex flex-sm-wrap">
        {/* <input
          type="checkbox"
          name="selectTotalCourse"
          style={invisible_button}
        /> */}
        <div className="checkListBox">
          <h4>
            <span>{ingre_en_name}</span>
            <br/>
          </h4>
          <h2>{ingre_name}</h2>
        </div>
        <div className="d-flex justify-content-center flex-column mr-3">
          <div className="d-flex align-items-center cartButtonAdd position_card_middle">
            <button
              style={invisible_button}
              onClick={() => {
                ingreAmountBtn(pos, -1);
              }}
            >
              -
            </button>
            <span>{ingre_order_quantity}</span>
            <button
              style={invisible_button}
              onClick={() => {
                ingreAmountBtn(pos, 1);
              }}
            >
              +
            </button>
          </div>
          <p className="cartListTotal">
            Total Count : $ {ingre_price * ingre_order_quantity}
          </p>
        </div>
        <figure className='pic_cart_position'>
          <img
            src={"/image/ingredients/"+ingre_pic}
            alt="product pic"
          />
        </figure>
        <MdCancel
          className="cartOrderCancel"
          style={invisible_button}
          onClick={() => {
            ingreDelBtn(pos);
            cartIngreDispatch(cancelCourse(courseInfo,id));
          }}
        />
      </li>
    </>
  );
};

export default CartIngreCard;
