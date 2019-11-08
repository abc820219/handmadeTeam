import React, { useState } from "react";
// import store from '../../store'
import MemberOrderList from "./MemberOrderList";
import MemberOrderDetail from "./MemberOrderDetail";

const MemberOrder = props => {
  const [orderType, setOrderType] = useState(1);
  const changeOrderType = a => {
    setOrderType(a);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 p-0">
          <MemberOrderList changeOrderType={changeOrderType} style={{paddingTop:'60px'}}/>
        </div>
        <div className="col-8 p-0">
          <MemberOrderDetail orderType={orderType} style={{paddingTop:'60px'}}/>
        </div>
      </div>
    </div>
  );
};

export default MemberOrder;
