import React from "react";

const alertStyle = {
  backgroundColor: "#white",
  color: "white",
  borderRadius: "2px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "300px",
  boxSizing: "border-box",
  fontSize: "11px",
  position: "relative",
  padding:"0 30px"
};

const contentWrapperStyle = {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center"
};

const iconPlaceholderStyle = {
  display: "flex",
  flexDirection:"column",
  justifyContent: "center",
  width: "100px",
  alignItems:"center",
  padding:"5px 0"
};

const messageStyle = {
  flex: 3,
  textAlign: "center",
  textTransform: "uppercase",
  width: "100%",
  fontSize:"16px",
  paddingTop:"5px"
};

const closeButtonStyle = {
  minWidth: "50px",
  height: "100%",
  position: "absolute",
  borderRadius: "0 2px 2px 0",
  cursor: "pointer",
  top: 0,
  right: 0,
  backgroundColor: "#444",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const getIcon = type => {
  switch (type) {
    case "error":
        return `/image/logo/logo-03.png`;

    //   return `https://cdn.shopify.com/s/files/1/1198/0996/products/giphy.gif?v=1478770210`;
    case "info":
        return `/image/logo/logo-03.png`;
    case "success":
        return `/image/logo/logo-03.png`;
  }
};

const AlertTemplate = ({ message, options, style, close }) => (
  <div style={{ ...alertStyle, ...style }}>
    <div style={contentWrapperStyle}>
      <div style={iconPlaceholderStyle}>
        <img src={ getIcon(options.type)} alt="" width="100%"/>
      <div style={messageStyle}>{message}</div>
      </div>
    </div>
  </div>
);

export default AlertTemplate;
