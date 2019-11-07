import React from "react";
import { TiShoppingCart } from "react-icons/ti";

const NavBarUnSign = ({ showLightBox }) => {
  return (
    <>
      <div className="page-nav-rightside mr-5">
        <div className="text-center d-flex align-items-center   ">
          <p className="text-nowrap mr-3" onClick={() => showLightBox()}>
            sign up
          </p>
          <div>
            <TiShoppingCart style={{ fontSize: "30px", color: "white" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarUnSign;
