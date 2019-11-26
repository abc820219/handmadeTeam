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
    ingredients_pic,
    ingredients_price,
    ingredients_size,
    order_create_time,
    ingredients_detial,
    order_sid
  } = orderDetail;

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
                <img src="data:image/jpeg;base64,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"></img>
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
            <input type="button" value="取消訂單"></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDeListIngre;
