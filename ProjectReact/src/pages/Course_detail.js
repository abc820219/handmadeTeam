import React, { Component } from "react";
import Class_detail from "../components/course/Class_detail"
import NavBar from "../components/NavBar";

class Course_detail extends Component {
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
      <Class_detail/>
    </>
      ) 
  }
}

export default Course_detail;