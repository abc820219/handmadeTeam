import React, { Component } from "react";
import "../../commom/scss/course/course_list_navbar.scss";
import Course_store from "./Course_store";
import Course_navbar from "./Course_navbar";
import Course_list from "./Course_list";
import Course_filter from "./Course_filter"
import $ from "jquery";




class CourseAll extends Component {
    constructor() {
        super()
        this.state = {
            store_wrap: [],
            course_list: [],
            course_total: [],
            course_click: [],
            course_filter_title_wrap:["種類","口味","尺寸","難易度","價格"],
            course_filter_title_content:[["蛋糕", "點心", "餅乾"], ["巧克力", "覆盆子", "草莓", "香草", "抹茶", "茶類", "檸檬", "其他"], ["4吋", "5吋", "6吋", "8吋"], ["1顆星", "2顆星", "3顆星"], ["500元~700元", "700元-1000元", "1000元-1500元", "1500元以上"]]

        }
    }


    componentDidMount() {

        this.courseAll();
        $(".course_store_info ").click(function () {
            $(this).addClass("activeImg");
            $(this).siblings().removeClass("activeImg");
        })

        
    }
    courseAll = async () => {
        try {
            const storeId = 2;
            const res = await fetch(`http://localhost:5000/handmade/store/course/${storeId}`);
            const data = await res.json();
            console.log("data", data);
            let course_total = data;
            let course_list = data;
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
            this.setState({ store_wrap: store_wrap, course_total: course_total, course_list: course_list});
            console.log("course_wrap:", this.state)
            console.log("course_total",course_total)
            console.log("course_list",course_list)

        } catch (error) {
            console.log(error);
            console.log("react fetch all failed")
        }
    }
    course_total_onclick = () => {
        this.setState({ course_list: this.state.course_total })
        $(".course_filter_thing div").removeClass("course_filter_active");
       $(".course_kid ").addClass("course_active").siblings().removeClass("course_active")
       

    }



    render() {

        return (
            <>
                <section className="course_navbar">
                    <nav className="course_navbar_b">
                        <Course_filter course_list={this.course_total_onclick.bind(this)} 
                        kid_name={this.state.course_filter_title_content} 
                        title={this.state.course_filter_title_wrap}/>
                    </nav>
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

                        <Course_list list={this.state.course_list} />

                    </section>


                </section>
            </>
        )
    }
}

export default CourseAll;