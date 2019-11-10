import React, { useState } from "react";
import MemberLogin from "./MemberLogin";
import MemberRegister from "./MemberRegister";
function MemberBox(props) {
  console.log(props);
  const [boxState, setBxState] = useState(true);
  function boxStateChange() {
    setBxState(!boxState);
  }
  if (boxState) {
    return (
      <>
        <MemberLogin
          memberSignIn={props.memberSignIn}
          boxStateChange={boxStateChange}
        />
      </>
    );
  } else {
    return (
      <>
        <MemberRegister
          memberSignIn={props.memberSignIn}
          boxStateChange={boxStateChange}
        />
      </>
    );
  }
}
export default MemberBox;
