import React from "react";
import "../commom/scss/alert.scss";

const getIcon = type => {
  switch (type) {
    case "error":
      return `/image/logo/alertCircleError.svg`;
    case "info":
      return `/image/logo/logo-03.png`;
    case "success":
      return `/image/logo/alertCircleSuccess.svg`;
  }
};

const AlertTemplate = ({ message, options, style, close }) => (
      <div className="alert-box">
        <img src={getIcon(options.type)} alt="" width="400px" />
        <div className="alert-message">{message}</div>
      </div>
);

export default AlertTemplate;
