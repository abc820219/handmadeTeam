import React, { Component } from "react";
import "../../commom/scss/course/course_list_navbar.scss";



class Course_filter extends Component {


    render() {

        return (
            <>
                <div className="course_filter_bar">
                    <div className="course_search">搜尋</div>
                    <div className="course_total">所有課程</div>
                </div>
            </>
        )
    }
}


export default Course_filter;