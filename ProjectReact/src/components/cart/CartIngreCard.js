import React, { useContext } from "react";
import { MdCancel } from "react-icons/md";
import CartStore from "./CartStore";

const CartIngreCard = ({
  pos,
  ingre_sid,
  ingre_name,
  ingre_en_name,
  ingre_order_quantity,
  ingre_pic,
  ingre_price,
  ingreAmountBtn,
  ingreDelBtn
}) => {
  const { step } = useContext(CartStore);
  let invisible_button = { visibility: step ? "hidden" : "visible" };

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
            February 20th
          </h4>
          <h2>{ingre_name}</h2>
        </div>
        <div className="d-flex justify-content-center flex-column mr-3">
          <div className="d-flex align-items-center cartButtonAdd">
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
        <figure>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/c94eed56a5e84479a2939c9172434567c0147d4f.jpeg?region=0,0,600,600"
            alt="product pic"
          />
        </figure>
        <MdCancel
          className="cartOrderCancel"
          style={invisible_button}
          onClick={() => {
            ingreDelBtn(pos);
          }}
        />
      </li>
    </>
  );
};

export default CartIngreCard;
