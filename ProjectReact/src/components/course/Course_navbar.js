import React, { Component } from "react";
import "../../commom/scss/course/course_list_navbar.scss";
import $ from "jquery";



class Course_navbar extends Component {
    constructor() {
        super()

    }

    componentDidMount() {

        $(".course_store_info ").click(function () {
            $(this).addClass("activeImg");
            $(this).siblings().removeClass("activeImg");
        })

    }
    render() {

        return (
            <>
                <div className="course_store_navbar" >
                    <div id="course_store_info" className="course_store_info course_hover_color1 activeImg" data-target="#carouselExampleIndicators" data-slide-to="0" >
                        <img src="/image/course_img/info.png" alt="" />
                        <div className="course_store_info_wrap">
                            <div className="course_store_info_txt">INFO</div>
                            <div className="course_store_info_minTxt">introduction</div>
                        </div>
                    </div>

                    <div id="course_store_web" className="course_store_info course_hover_color2" data-target="#carouselExampleIndicators" data-slide-to="1">
                        <img src="/image/course_img/web.png" alt="" />
                        <div className="course_store_info_wrap">
                            <div className="course_store_info_txt">WEB</div>
                            <div className="course_store_info_minTxt">website</div>
                        </div>

                    </div>

                    <div id="course_store_map" className="course_store_info course_hover_color3" data-target="#carouselExampleIndicators" data-slide-to="2">
                        <img src="/image/course_img/map.png" alt="" />
                        <div className="course_store_info_wrap">
                            <div className="course_store_info_txt">MAP</div>
                            <div className="course_store_info_minTxt">map</div>
                        </div>
                    </div>

                    <div id="course_store_classroom" className="course_store_info course_hover_color4" data-target="#carouselExampleIndicators" data-slide-to="3">
                        <img src="/image/course_img/classroom.png" alt="" />
                        <div className="course_store_info_wrap">
                            <div className="course_store_info_txt">SPACE</div>
                            <div className="course_store_info_minTxt">classroom</div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Course_navbar;