import React from "react";
function LogOut() {
  const memberLogOut = () => {
    localStorage.removeItem("member_id");
    localStorage.removeItem("member_data");
    alert("登出成功");
    window.location = "http://localhost:3000/handmade/";
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
export default LogOut;
