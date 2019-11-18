import React, { Component } from "react";
import TeacherList from "../components/teacher/TeacherList";
import NavBar from "../components/NavBar";
class Teacher extends Component {
  render() {
    return (
      <>
        <NavBar
          login={this.props.login}
          checkLogIn={this.props.checkLogIn}
        ></NavBar>
        <TeacherList />
      </>
    );
  }
}

export default Teacher;
