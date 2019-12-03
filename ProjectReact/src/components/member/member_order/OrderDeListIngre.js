import React, { useEffect, useState } from "react";
import "../../../commom/scss/member/orderDeListIngre.scss";
import { useAlert } from "react-alert";

const OrderDeListIngre = ({ orderDetail }) => {
  const alert = useAlert();
  const [email, setEmail] = useState("");
  const [member, setMember] = useState("");
  const [productName, setProductName] = useState("");
  const [message, setMessage] = useState("");
  const [loadPage, setLoadPage] = useState(false);

  if (!orderDetail) {
    orderDetail = {
      ingredients_name: "",
      ingredients_order_quantity: "",
      ingredient_sid: "",
      ingredients_en_name: "",
      ingredients_pic: "",
      ingredients_price: "",
      ingredients_size: "",
      order_create_time: "",
      ingredients_detial: "",
      order_sid: ""
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

  let member_data;
  useEffect(() => {
    if (localStorage.getItem("member_data")) {
      member_data = JSON.parse(localStorage.getItem("member_data"));
      setEmail(member_data.member_email);
      setMember(member_data.member_account);
      setProductName(ingredients_name);
    }
    setLoadPage(true);
  }, [ingredients_name, member_data]);

  useEffect(() => {
    if (loadPage) {
      reportProduct(member, email, productName, message, order_sid);
    }
  }, [message]);

  console.log(email, member, productName);
  const sendText = async () => {
    let message123 = await prompt("請輸入回報問題");
    if (message123) {
      await setMessage(message123);
    }
  };

  const reportProduct = async (
    member,
    email,
    productName,
    message,
    orderSid
  ) => {
    const report = JSON.stringify({
      member: member,
      email: email,
      productName: productName,
      message: message,
      orderSid: orderSid
    });
    const url = `http://localhost:5000/handmade/member/order/mailToReport/`;
    const dataJson = await fetch(url, {
      method: "POST",
      body: report,
      headers: { "Content-Type": "application/json" }
    });
    const data = await dataJson.json();
    if (data.status === "202") {
      alert.success(data.message);
    } else {
      alert.error(data.message);
    }
  };
  return (
    <>
      <div className="container Ingre py-3">
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
              <ul className="d-flex align-content-center main-content">
                <img
                  src={"/image/ingredients/" + ingredients_image}
                  alt="product"
                ></img>
                <li className="Ingre-info">
                  <div
                    className="text-nowrap"
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                  >
                    食材名稱
                  </div>
                  <span
                    className="text-nowrap w-100"
                    style={{ fontSize: "16px" }}
                  >
                    {ingredients_name}---{ingredients_en_name}
                  </span>
                  <div
                    className="mt-2 text-nowrap"
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                  >
                    訂購數量:
                  </div>
                  <span>{ingredients_order_quantity}</span>
                  <div
                    className="mt-2 text-nowrap"
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                  >
                    單價:
                  </div>
                  <span>${ingredients_price}</span>
                </li>
              </ul>
            </li>
            <hr></hr>
          </ul>
          <ul className="d-flex flex-column">
            <li className="d-flex justify-content-between">
              <ul className="d-flex align-content-center">
                <li className="Ingre-info">
                  <div
                    className="text-nowrap"
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      maxWidth: "600px"
                    }}
                  >
                    食材簡介
                  </div>
                  <span className="">{ingredients_detial}</span>
                  <div
                    className="mt-2 text-nowrap"
                    style={{ fontSize: "20px", fontWeight: "bold" }}
                  >
                    食材尺寸:
                  </div>
                  <span>{ingredients_size}</span>
                  <div
                    className="mt-2 text-nowrap"
                    style={{ fontSize: "16px", fontWeight: "bold" }}
                  >
                    <span>訂單創建時間 {order_create_time}</span>
                  </div>
                </li>
              </ul>
            </li>

            <hr></hr>
          </ul>
        </div>
        <div className="IngreFooter px-4">
          <div className="totleBox d-flex justify-content-between">
            <button
              className="p-1"
              style={{ borderRadius: "5px", backgroundColor: "white" }}
              onClick={() => sendText()}
            >
              問題回報
            </button>
            <div style={{ fontSize: "24px" }}>
              總價:
              <span>$ {ingredients_price * ingredients_order_quantity}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDeListIngre;
