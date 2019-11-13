import React, { Component } from "react";
import Course_navbar from "../components/course/Course_navbar";
import Navbar from "../components/NavBar";

class Course extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <>
        <Navbar login={this.props.login} checkLogIn={this.props.checkLogIn} />
        <Course_navbar />
      </>
    );
  }
}

export default Course;
