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
      <h5 onClick={memberLogOut}>LogOut</h5>
    </>
  );
}
export default LogOut;
