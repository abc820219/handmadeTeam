import React, { Component } from "react";
import Subject from "../components/teacher/Subject";
import OrderInfo from "../components/teacher/OrderInfo";
import NavBar from "../components/NavBar";

class Teacher_Subject extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    //  console.log(props.match.params);
  }
  render() {
    // console.log(this.props.login);
    console.log(this.props.match.params.image_id);
    return (
      <>
        <NavBar
          login={this.props.login}
          checkLogIn={this.props.checkLogIn}
        ></NavBar>
        <Subject subject_sid={this.props.match.params.image_id} />
        {/* <OrderInfo subject_sid={this.props.match.params.image_id} /> */}
      </>
    );
  }
}

export default Teacher_Subject;
