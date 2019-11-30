import React from "react";
import "../../../commom/scss/member/orderDeListIngre.scss";

const OrderDeListIngre = ({orderDetail}) => {

  if(!orderDetail){
    orderDetail = {
      ingredients_name: '',
      ingredients_order_quantity: '',
      ingredient_sid: '',
      ingredients_en_name: '',
      ingredients_pic: '',
      ingredients_price: '',
      ingredients_size: '',
      order_create_time: '',
      ingredients_detial: '',
      order_sid:''
    };
  }

  const {
    ingredients_name,
    ingredients_order_quantity,
    ingredient_sid,
    ingredients_en_name,
    ingredients_image,
    ingredients_price,
    ingredients_size,
    order_create_time,
    ingredients_detial,
    order_sid
  } = orderDetail;
  console.log(orderDetail);

  return (
    <>
      <div className="container Ingre">
        <div className="IngreHeader">
          <div className="d-flex justify-content-between">
            <h2>食材訂單</h2>
            <span>訂單編號:{order_sid}</span>
          </div>
        </div>
        <hr></hr>
        <div className="IngreMain">
          <ul className="d-flex flex-column">
            <li className="d-flex justify-content-between">
              <ul className="d-flex align-content-center">
                <img src={"/image/ingredients/"+ingredients_image}></img>
                <li className="Ingre-info">
                  <div className="text-nowrap" style={{fontSize:'20px',fontWeight:'bold'}}>食材名稱</div>
                  <span className="text-nowrap" style={{fontSize:'16px'}}>{ingredients_name}---{ingredients_en_name}</span>
                  <div className="mt-2 text-nowrap" style={{fontSize:'20px',fontWeight:'bold'}}>訂購數量:</div>
                  <span>{ingredients_order_quantity}</span>
                </li>
              </ul>
            </li>
              <div className="align-self-end" style={{fontSize:'20px',fontWeight:'bold'}}>單價:
               <br/>
                <span style={{fontSize:'24px'}}>$ {ingredients_price}</span>
              </div>
            <hr></hr>
          </ul>
          <ul className="d-flex flex-column">
            <li className="d-flex justify-content-between">
              <ul className="d-flex align-content-center">
                <li className="Ingre-info">
                  <div className="text-nowrap" style={{fontSize:'20px',fontWeight:'bold'}}>食材簡介</div>
                  <span className="text-nowrap">{ingredients_detial}</span>
                  <div className="mt-2 text-nowrap" style={{fontSize:'20px',fontWeight:'bold'}}>食材尺寸:</div>
                  <span>{ingredients_size}</span>
                </li>
              </ul>
            </li>
              <div className="align-self-end py-2">
                <span>訂單創建時間 {order_create_time}</span>
              </div>
            <hr></hr>
          </ul>
        </div>
        <div className="IngreFooter">
          <div className="totleBox d-flex align-items-end flex-column">
            <p style={{fontSize:'24px'}}>
              總價:<span>$ {ingredients_price*ingredients_order_quantity}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDeListIngre;
