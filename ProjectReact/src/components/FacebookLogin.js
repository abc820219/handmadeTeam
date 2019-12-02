import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { withRouter } from "react-router-dom";
import { useAlert } from "react-alert";

class Facebook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let fbContent;
    fbContent = (
      <FacebookLogin
        appId="2455924711363188"
        autoLoad={false}
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook}
        cssClass="my-facebook-button-class"
        textButton="FACEBOOK"
        style={{ fontSize: "25px" }}
      />
    );
    return <div className="mt-3">{fbContent}</div>;
  }
  responseFacebook = response => {
    console.log(response);
    fetch("http://localhost:5000/handmade/member/fbLogin", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        member_name: response.name,
        member_email: response.email,
        token_id: response.id
      })
    })
      .then(res => {
        let member_data = res.json();
        return member_data;
      })
      .then(member_data => {
        console.log(member_data.info);
        localStorage.setItem("member_id", member_data.info.member_sid);
        localStorage.setItem("member_data", JSON.stringify(member_data.info));
        setTimeout(() => {
          window.location = window.location = `http://localhost:3000${this.props.location.pathname}`;
        });
      })
      .catch(async err => {
        console.log(err);
      });
  };
}
export default withRouter(Facebook);
