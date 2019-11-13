import React, { useState } from "react";
import NavBar from "../components/NavBar";
import CartCheckPage from "../components/cart/CartCheckPage";
import CartPayPage from "../components/cart/CartPayPage";
import "../commom/scss/cart/memberCartPage.scss";

function Cart({ login, checkLogIn }) {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(1);
  };

  const prevStep = () => {
    setStep(0);
  };

  const check = () => {
    console.log('CheckOut')
  }
  return (
    <>
      <div className="container-fluid">
        <CartCheckPage nextStep={nextStep} step={step} prevStep={prevStep} check={check}/>
      </div>
    </>
  );
}

export default Cart;
