import React from "react";

const CartPayPage = ({ prevStep }) => {
  return (
    <>
      <div className="row">
        <div className="col-4 p-0"></div>
        <div className="col-8 p-0"></div>
        <button onClick={prevStep}>Prev</button>
      </div>
    </>
  );
};

export default CartPayPage;
