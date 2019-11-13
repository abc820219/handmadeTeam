import React, { Component } from "react";
import "../../commom/scss/course/course_list_navbar.scss";
import Course_store from "./Course_store";
import Course_navbar from "./Course_navbar";
import Course_list from "./Course_list";
import $ from "jquery";



class courseAll extends Component {
    constructor() {
        super()
        this.state = {
            store_wrap: [],
            course_wrap:[]

        }
    }

    componentDidMount() {
        const courseAll = async () => {
            try {
                const storeId = 1;
                const res = await fetch(`http://localhost:5000/handmade/store/course/${storeId}`);
                const data = await res.json()
                let course_wrap = data;
                let course_name = data[0].course_name;
    
                let store_name = data[0].store_name;
                let store_wrap = [];
                let store_ind = [];
                let store_web = [];
                let store_phone = data[0].store_phone;
                let store_address = data[0].store_address;
                let course_classroom = data[0].course_classroom;
                let community_facebook = data[0].community_facebook;
                let community_instagram = data[0].community_instagram;
                let community_line = data[0].community_line;
                let community_twitter = data[0].community_twitter;

                store_ind = [...store_ind, store_name, store_phone, store_address]

                store_web = [...store_web, community_facebook, community_instagram, community_line, community_twitter]

                store_wrap = [...store_wrap, store_ind, store_web, store_name, course_classroom];

                this.setState({ store_wrap: store_wrap });
                this.setState({ course_wrap: course_wrap});
                console.log("course_wrap:",course_wrap)
                $(".course_store_info ").click(function () {
                    $(this).addClass("activeImg");
                    $(this).siblings().removeClass("activeImg");
                })
            } catch (error) {
                console.log(error);
                console.log("react fetch all failed")
            }
        }
        courseAll();
    }
    render() {

        return (
            <>
                <section className="course_navbar">
                    <nav className="course_navbar_b"></nav>
                    <section className="course_store">

                        {/* 店家選單  */}
                        <Course_navbar />
                        <section className="course_store_content_wrap">
                            <div className="course_store_content_minWrap"></div>
                            <div className="course_store_slide">
                                <Course_store state={this.state.store_wrap} />
                            </div>
                        </section>
                        {/* 店家選單結束 */}
                     
                        <Course_list list={this.state.course_wrap}/>
                        {/* <main className="course_list_wrap">
                            <div id="course_list_a" className="course_list">

                                <img src="/image/course_img/檸檬乳酪蛋糕s.png" alt="" />
                            <img src="/image/course_img/烏龍鐵觀音乳酪蛋糕s.png" alt="" />
                            <img src="/image/course_img/玫瑰荔枝乳酪蛋糕s.png" alt="" />
                            </div>
                            <div id="course_list_b" className="course_list">
                                <img src="/image/course_img/鮮綠檸檬蛋糕s.png" />
                            <img src="/image/course_img/檸檬乳酪蛋糕s.png" />
                            <img src="/image/course_img/烏龍鐵觀音乳酪蛋糕s.png" />
                            </div>
                            <div id="course_list_c" className="course_list">
                                <img src="/image/course_img/玫瑰荔枝乳酪蛋糕s.png" alt="" />
                            <img src="/image/course_img/鮮綠檸檬蛋糕s.png" alt="" />
                            <img src="/image/course_img/檸檬乳酪蛋糕s.png" alt="" />
                            </div>
                            <div id="course_list_d" className="course_list">
                                <img src="/image/course_img/烏龍鐵觀音乳酪蛋糕s.png" alt="" />
                            <img src="/image/course_img/玫瑰荔枝乳酪蛋糕s.png" alt="" />
                            <img src="/image/course_img/玫瑰荔枝乳酪蛋糕s.png" alt="" />
                            </div>
                        </main> */}
                    </section>


                </section>
            </>
        )
    }
}

export default courseAll;