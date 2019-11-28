import React ,{useContext}from "react";
import { FaDollarSign } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { cancelIngre } from './CartAction';
import CartStore from './CartStore'

const CartIngre = ({ingreSid,ingreName,ingrePic,ingreOrderQty,ingreEnName,ingrePrice}) => {
  const { ingreCart, id, cartIngreDispatch } = useContext(CartStore);

  const ingreSelect = (ingreSid) => {
    console.log(ingreSid);
    let ingreSelectCheck = ingreCart.filter((ingreC) => {
      return ingreC.ingredients_sid == ingreSid 
    })
    cartIngreDispatch(cancelIngre(ingreSelectCheck[0], id))
  }

  return (
    <>
      <ul className="d-flex justify-content-around align-items-center px-5 ingre_sm_cart">
      <div className='cancel_sm_cart'>
      <MdCancel style={{ cursor: 'pointer' }} onClick={() => {ingreSelect(ingreSid)}} />
      </div>
        <li className="d-flex flex-column align-items-between py-3">
          <div className="product-title">
            {ingreName}
            <br/>
            {ingreEnName}
          </div>
          <div className="d-flex align-items-center">
          <FaShoppingBag />
          {ingreOrderQty}
          </div>
          <div className="d-flex align-items-center">
            <FaDollarSign className="cartList_icons" />
            {ingrePrice}
          </div>
        </li>
        <figure>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBVl9lhK94mJ5MxzGptFKO5FLRXoXVNDmjYndWy1H4kCaqDqOw"
            alt=""
            width="80px"
            height="80px"
          />
        </figure>
      </ul>
    </>
  );
};

export default CartIngre;
