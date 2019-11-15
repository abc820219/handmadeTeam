import React, { Component } from "react";
import Subject from "../components/teacher/Subject";
import NavBar from "../components/NavBar";

class Teacher_Subject extends Component {
  render() {
    return (
      <>
        <NavBar
          login={this.props.login}
          checkLogIn={this.props.checkLogIn}
        ></NavBar>
        <Subject />
      </>
    );
  }
}

export default Teacher_Subject;
