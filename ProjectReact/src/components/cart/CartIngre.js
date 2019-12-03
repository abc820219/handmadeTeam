import React, { useContext } from "react";
import { FaDollarSign } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { cancelIngre } from './CartAction';
import CartStore from './CartStore'

const CartIngre = ({ ingreSid, ingreName, ingrePic, ingreOrderQty, ingreEnName, ingrePrice }) => {
  const { ingreCart, id, cartIngreDispatch } = useContext(CartStore);
  console.log(id);

  const ingreSelect = (ingreSid) => {
    console.log(ingreSid);
    let ingreSelectCheck = ingreCart.filter((ingreC) => {
      return ingreC.ingredients_sid == ingreSid
    })
    cartIngreDispatch(cancelIngre(ingreSelectCheck[0], id))
  }

  return (
    <>
      <div class="d-flex justify-content-between align-items-center px-4 course_sm_cart mb-0">
        <div className='cancel_sm_cart'>
          <MdCancel style={{ cursor: 'pointer' }} onClick={() => { ingreSelect(ingreSid) }} />
        </div>
        <li className="d-flex flex-column align-items-between py-3 ml-3" style={{ lineHeight: '30px' }}>
          <div className="product-title" style={{ fontSize: '20px' }}>{ingreName}</div>
          <div className="d-flex align-items-center" style={{ fontSize: '14px' }}>{ingreEnName}</div>
          <div className="d-flex align-items-center">
            <FaShoppingBag style={{marginRight:'5px'}}/>
            {ingreOrderQty}
          </div>
          <div className="d-flex align-items-center">
            <FaDollarSign className="cartList_icons" style={{marginRight:'5px'}}/>
            {ingrePrice}
          </div>
        </li>
        <figure style={{
          height:"125px",
          width:'125px',
          overflow: "hidden"
        }}
          className='m-0 mt-1'
        >
          <img
            src={`/image/ingredients/${ingrePic}`}
            alt=""
            width="100%"
            height="100%"
          />
        </figure>
      </div>
    </>
  );
};

export default CartIngre;
