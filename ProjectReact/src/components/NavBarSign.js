import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { MdFavorite, MdNotifications } from "react-icons/md";

const NavBarSign = () => {
  const logoPattern = {
    fontSize: "30px",
    color: "white"
  };
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-between mr-4"
        style={{ width: "200px" }}
      >
        <figure className="navbar-profile">
          <img
            src="https://www.disneyclips.com/images/images/winnie-the-pooh-honey2.png"
            alt=""
          />
        </figure>
        <MdFavorite style={logoPattern} />
        <MdNotifications style={logoPattern} />
        <TiShoppingCart style={logoPattern} />
      </div>
    </>
  );
};

export default NavBarSign;
