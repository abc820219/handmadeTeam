import React, { useState } from "react";
import MemberLogin from "./MemberLogin";
import MemberRegister from "./MemberRegister";
import MemberEmail from "./MemberEmail";
function MemberBox(props, { checkLogIn }) {
  console.log(props);
  const [boxState, setBxState] = useState(0);
  function boxStateChange(v) {
    setBxState(v);
  }
  if (boxState === 0) {
    return (
      <>
        <MemberLogin
          memberSignIn={props.memberSignIn}
          boxStateChange={boxStateChange}
          checkLogIn={checkLogIn}
        />
      </>
    );
  } else if (boxState === 1) {
    return (
      <>
        <MemberRegister
          memberSignIn={props.memberSignIn}
          boxStateChange={boxStateChange}
        />
      </>
    );
  } else if (boxState === 3) {
    return (
      <>
        <MemberEmail
          memberSignIn={props.memberSignIn}
          boxStateChange={boxStateChange}
        />
      </>
    );
  }
}
export default MemberBox;
