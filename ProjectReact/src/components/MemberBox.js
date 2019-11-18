import React, { useState } from "react";
import MemberLogin from "./MemberLogin";
import MemberRegister from "./MemberRegister";
function MemberBox(props, { checkLogIn }) {
  console.log(props);
  const [boxState, setBxState] = useState(true);
  function boxStateChange(v) {
    setBxState(!boxState);
  }
  if (boxState) {
    return (
      <>
        <MemberLogin
          memberSignIn={props.memberSignIn}
          boxStateChange={boxStateChange}
          checkLogIn={checkLogIn}
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
