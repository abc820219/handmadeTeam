import React, { Component } from "react";
import "../../commom/scss/course/course_list_navbar.scss";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import $ from "jquery";

class Course_filter extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    componentDidMount() {

        ///////上一步下一步開始///////
        let index = $(".course_step .course_active").index(".course_step");
        let steps_count = $(".course_step").length;
        let pre_btn = $(".course_option_left");
        let next_btn = $(".course_option_right");
        pre_btn.click(function () {
            next_btn.prop("disabled", false);
            if (index > 0) {
                index--;
                $(".course_step").removeClass("course_active").eq(index).addClass("course_active")
            };
            if (index === 0) {
                $(this).prop("disabled", true);
            }
        });
        next_btn.click(function () {
            pre_btn.prop("disabled", false);
            if($(".course_active div").hasClass("course_filter_active")){
                if (index < steps_count - 1) {
                    index++;
                    $(".course_step").removeClass("course_active").eq(index).addClass("course_active")
                };
                if (index === steps_count - 1) {
                    $(this).prop("disabled", true);
                }
            }
        });

        //////上一步下一步結束////

        let course_filter_bar = [];
        $(".course_kid div").click(function (e) {
            let course_kid_content = $(e.target).text();
            $(this).addClass("course_filter_active");
            $(this).siblings().removeClass("course_filter_active");
            course_filter_bar.splice(0,1)
            course_filter_bar.splice(0,0,course_kid_content)
        })
  
        $(".course_taste div").click(function (e) {
            let course_taste_content = $(e.target).text();
            $(this).addClass("course_filter_active");
            $(this).siblings().removeClass("course_filter_active");
            course_filter_bar.splice(1,1);
            course_filter_bar.splice(1,0,course_taste_content);
        
        })
 
        $(".course_size div").click(function (e) {
            let course_size_content = $(e.target).text();
            $(this).addClass("course_filter_active");
            $(this).siblings().removeClass("course_filter_active");
            course_filter_bar.splice(2,1);
            course_filter_bar.splice(2,0,course_size_content);
        })

        $(".course_difficult div").click(function (e) {
            let course_difficult_content = $(e.target).text();
            $(this).addClass("course_filter_active");
            $(this).siblings().removeClass("course_filter_active");
            course_filter_bar.splice(3,1);
            course_filter_bar.splice(3,0,course_difficult_content);
           
        })

        $(".course_price div").click(function (e) {
            let course_price_content = $(e.target).text();
            $(this).addClass("course_filter_active");
            $(this).siblings().removeClass("course_filter_active");
            course_filter_bar.splice(4,1);
            course_filter_bar.splice(4,0,course_price_content);
            console.log(course_filter_bar);
        })
        
    }

    render() {

        return (
            <>
                <div className="course_filter_bar">
                    <div className="course_option">
                        <FaAngleDoubleLeft className="course_option_left" disabled="disabled" />
                        <FaAngleDoubleRight className="course_option_right" />
                    </div>
                    <div className="course_search">搜尋
                    <div className="course_search_bar"></div>
                    </div>
                    <a className="course_total" href="#course_list" onClick={this.props.course_list}>所有課程</a>

                    <div className="course_filter_thing course_kid course_step course_active">{this.props.title[0]}
                        <div>{this.props.kid_name[0][0]}</div>
                        <div>{this.props.kid_name[0][1]}</div>
                        <div>{this.props.kid_name[0][2]}</div>
                    </div>
                    <div className="course_filter_thing course_taste course_step">{this.props.title[1]}
                        <div>{this.props.kid_name[1][0]}</div>
                        <div>{this.props.kid_name[1][1]}</div>
                        <div>{this.props.kid_name[1][2]}</div>
                        <div>{this.props.kid_name[1][3]}</div>
                        <div>{this.props.kid_name[1][4]}</div>
                        <div>{this.props.kid_name[1][5]}</div>
                        <div>{this.props.kid_name[1][6]}</div>
                        <div>{this.props.kid_name[1][7]}</div>
                    </div>
                    <div className="course_filter_thing course_size course_step">{this.props.title[2]}
                        <div>{this.props.kid_name[2][0]}</div>
                        <div>{this.props.kid_name[2][1]}</div>
                        <div>{this.props.kid_name[2][2]}</div>
                        <div>{this.props.kid_name[2][3]}</div>
                    </div>
                    <div className="course_filter_thing course_difficult course_step">{this.props.title[3]}
                        <div>{this.props.kid_name[3][0]}</div>
                        <div>{this.props.kid_name[3][1]}</div>
                        <div>{this.props.kid_name[3][2]}</div>
                    </div>
                    <div className="course_filter_thing  course_price course_step">{this.props.title[4]}
                        <div>{this.props.kid_name[4][0]}</div>
                        <div>{this.props.kid_name[4][1]}</div>
                        <div>{this.props.kid_name[4][2]}</div>
                        <div>{this.props.kid_name[4][3]}</div>
                    </div>
                </div>
            </>
        )
    }
}


export default Course_filter;