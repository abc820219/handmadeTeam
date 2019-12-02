import React from "react";
import { withRouter } from "react-router-dom";
import { useAlert } from "react-alert";

function LogOut(props) {
  const alert = useAlert();
  const memberLogOut = () => {
    localStorage.removeItem("member_id");
    localStorage.removeItem("member_data");
    alert.success("登出成功");
    setTimeout(() => {
      window.location = window.location = `http://localhost:3000${props.location.pathname}`;
    }, 1000);
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
