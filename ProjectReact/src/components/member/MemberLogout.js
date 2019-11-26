import React from "react";
import { withRouter } from "react-router-dom";

function LogOut(props) {
  const memberLogOut = () => {
    localStorage.removeItem("member_id");
    localStorage.removeItem("member_data");
    alert("登出成功");
    window.location = window.location = `http://localhost:3000${props.location.pathname}`;
  };
  return (
    <>
      <div
        onClick={memberLogOut}
        style={{ fontSize: "16px", cursor: "pointer" }}
      >
        登出
      </div>
    </>
  );
}
export default withRouter(LogOut);
