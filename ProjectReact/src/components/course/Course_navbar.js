import React, { Component } from "react";
import "../../commom/scss/course/course_list_navbar.scss";


class Course_navbar extends Component {
    render() {
        return (
            <section className="course_navbar">
                <nav className="course_navbar_b"></nav>
                <section className="course_store">

                    {/* 影片選單  */}

                    <div className="course_store_navbar">
                        <div id="course_store_info" className="course_store_info course_hover_color1">
                            <img src="../image/course_img/info.png"   alt="" />
                            <div className="course_store_info_wrap">
                            <div className="course_store_info_txt">INFO</div>
                            <div className="course_store_info_minTxt">introduction</div>
                            </div>
                        </div>

                        <div id="course_store_web" className="course_store_info course_hover_color2">
                        <img src="../image/course_img/web.png"   alt="" />
                        <div className="course_store_info_wrap">
                            <div className="course_store_info_txt">WEB</div>
                            <div className="course_store_info_minTxt">website</div>
                            </div>

                        </div>

                        <div id="course_store_map" className="course_store_info course_hover_color3">
                        <img src="../image/course_img/map.png"   alt="" />
                        <div className="course_store_info_wrap">
                            <div className="course_store_info_txt">MAP</div>
                            <div className="course_store_info_minTxt">map</div>
                            </div>
                        </div>

                        <div id="course_store_classroom" className="course_store_info course_hover_color4">
                            <img src="../image/course_img/classroom.png" alt="" />
                            <div className="course_store_info_wrap">
                            <div className="course_store_info_txt">SPACE</div>
                            <div className="course_store_info_minTxt">classroom</div>
                            </div>
                        </div>
                        </div>
                    <section className="course_store_content_wrap">
                        <div className="course_store_content_minWrap"></div>
                        <div className="course_store_slide">
                        {/* <img src="../image/course_img/1AX2001.png"   alt="" /> */}
                        </div>
                    </section>

                    {/* 影片選單結束 */}

                    <main className="course_list_wrap">
                        <div id="course_list_a" className="course_list">
                            <img src="../image/course_img/檸檬乳酪蛋糕s.png" alt="" />
                            <img src="../image/course_img/烏龍鐵觀音乳酪蛋糕s.png" alt="" />
                            <img src="../image/course_img/玫瑰荔枝乳酪蛋糕s.png" alt="" />
                        </div>
                        <div id="course_list_b" className="course_list">
                            <img src="../image/course_img/鮮綠檸檬蛋糕s.png" />
                            <img src="../image/course_img/檸檬乳酪蛋糕s.png" />
                            <img src="../image/course_img/烏龍鐵觀音乳酪蛋糕s.png" />
                        </div>
                        <div id="course_list_c" className="course_list">
                            <img src="../image/course_img/玫瑰荔枝乳酪蛋糕s.png" alt="" />
                            <img src="../image/course_img/鮮綠檸檬蛋糕s.png" alt="" />
                            <img src="../image/course_img/檸檬乳酪蛋糕s.png" alt="" />
                        </div>
                        <div id="course_list_d" className="course_list">
                            <img src="../image/course_img/烏龍鐵觀音乳酪蛋糕s.png" alt="" />
                            <img src="../image/course_img/玫瑰荔枝乳酪蛋糕s.png" alt="" />
                            <img src="../image/course_img/玫瑰荔枝乳酪蛋糕s.png" alt="" />
                        </div>
                    </main>
                </section>


            </section>

        )
    }
}

export default Course_navbar;