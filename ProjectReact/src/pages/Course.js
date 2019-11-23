import React, { Component } from "react";
import CourseAll from "../components/course/CourseAll"
import NavBar from "../components/NavBar";

class Course extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return(

      <>
        <NavBar
          login={this.props.login}
          checkLogIn={this.props.checkLogIn}
        ></NavBar>
      <CourseAll/>
    </>
      ) 
  }
}

export default Course;
