import React, { Component } from "react";
import "../../commom/scss/course/course_list_navbar.scss";
import Course_store from "./Course_store";
import Course_navbar from "./Course_navbar";
import Course_list from "./Course_list";
import Course_filter from "./Course_filter";
import $ from "jquery";
import { Switch, Route, NavLink, Redirect, withRouter } from 'react-router-dom';
import { FaRegTimesCircle, FaSearch } from "react-icons/fa";





class CourseAll extends Component {
    constructor(props) {
        super(props)
        this.state = {
            store_wrap: [],
            course_list: [],
            course_total: [],
            course_blur: true,
            course_filter_title_wrap: ["種類", "口味", "尺寸", "難易度", "價格"],
            condition: {
                kid: '',
                taste: '',
                size: '',
                difficult: '',
                price: '',
            },
            course_search: {
                name: ""
            },
            course_page: "種類",
            disabled: true,
            new_course_list: [],
            aging_course_list: [],
            course_filter_start: [],
            course_filter_title_content: [["蛋糕", "點心", "餅乾"], ["巧克力", "覆盆子", "草莓", "香草", "抹茶", "茶類", "檸檬", "其他"], ["4吋", "5吋", "6吋", "8吋"], ["1顆星", "2顆星", "3顆星"], ["500元~700元", "700元-1000元", "1000元-1500元", "1500元以上"]]

        }
        console.log(this.props)
        console.log(this.props.match.params)
    }


    componentDidMount() {

        this.courseAll();
        $(".course_store_info ").click(function () {
            $(this).addClass("activeImg");
            $(this).siblings().removeClass("activeImg");
        })
        $(".close_option").click(function () {
            $(".course_navbar_b").addClass("close_move")
            $(".open_option").removeClass("open_close")
        })
        $(".open_option").click(function () {
            $(".course_navbar_b").removeClass("close_move")
            $(".open_option").addClass("open_close")
        })
    }



    courseAll = async () => {
        try {
            const storeId = this.props.match.params.sid;
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
            this.setState({ store_wrap: store_wrap, course_total: course_total, course_list: course_list });
            console.log("course_wrap:", this.state)
            console.log("course_total", course_total)
            console.log("course_list", course_list)


        } catch (error) {
            console.log(error);
            console.log("react fetch all failed")
        }
    }


    course_total_onclick = () => {
        this.setState({ course_list: this.state.course_total })
        this.setState({ course_filter_start: "" })
        this.setState({ course_blur: true })
        this.setState({ course_page: "種類" })
        this.setState({
            condition: {
                kid: '',
                taste: '',
                size: '',
                difficult: '',
                price: '',
            }
        })
        this.setState({
            course_search: {
                name: ""
            }
        })
    }

    course_blur_fn = () => {
        this.setState({ course_blur: false })
        this.setState({ course_filter_start: "" })
        this.setState({ course_list: this.state.course_total })
        this.setState({ course_page: "種類" })
        this.setState({
            condition: {
                kid: '',
                taste: '',
                size: '',
                difficult: '',
                price: '',
            }
        })
    }

    course_filter_search = (key, param) => {
        this.setState({ course_search_fn: false })
        const course_list = this.state.course_list;
        let new_course_search = {
            ...this.state.course_search,
            [key]: param,
        }
        let filter = course_list.filter(obj => {
            let { name } = new_course_search
            if (name) {
                let str = obj.course_name
                str.toString();
                let find = str.indexOf(param);
                console.log("find", find)
                console.log("str", str)
                if (find >= 0) {
                    return obj.course_name
                }
            }
        })
        this.setState({ new_course_list: filter, course_search: new_course_search })
    }

    course_page_pre_fn = () => {
        let page = this.state.course_page
        if (page == '口味') {
            this.setState({ course_page: "種類" })

        } else if (page == '尺寸') {
            this.setState({ course_page: "口味" })
        } else if (page == '難易度') {
            if (this.state.condition.kid == "蛋糕") {
                this.setState({ course_page: "尺寸" })
            } else {
                this.setState({ course_page: "口味" })
            }
        } else if (page == '種類') {
            this.setState({ disabled: true })
        } else {
            this.setState({ course_page: "難易度" })
        }
    }
    course_page_next_fn = () => {
        let page = this.state.course_page
        if (page == '種類') {
            this.setState({ disabled: false })
            this.setState({ course_page: "口味" })
        } else if (page == '口味') {
            if (this.state.condition.kid == "蛋糕") {
                this.setState({ course_page: "尺寸" })
            }
            else { this.setState({ course_page: "難易度" }) }
        } else if (page == '尺寸') {
            this.setState({ course_page: "難易度" })
        } else if (page == '難易度') {
            this.setState({ course_page: "價格" })
        } else {
            this.setState({ disabled: true })
        }
    };


    course_filter_fn = (key, param) => {
        this.setState({ course_filter_start: [1] })
        this.setState({ course_blur: true })
        const course_list = this.state.course_list;
        let new_course_filter = {
            ...this.state.condition,
            [key]: param,
        }
        console.log(course_list)
        console.log(new_course_filter)

        let filter = course_list.filter(obj => {

            let { kid } = new_course_filter
            if (kid) {
                return obj.course_kid == kid
            } else {
                return true;
            }
        })
            .filter(obj => {

                let { taste } = new_course_filter
                if (taste) {
                    return obj.course_taste == taste
                } else {
                    return true;
                }

            })
            .filter(obj => {

                let { size } = new_course_filter
                if (size) {
                    return obj.course_size == size
                } else {
                    return true;
                }


            })
            .filter(obj => {

                let { difficult } = new_course_filter
                if (difficult) {
                    return obj.course_difficult == difficult
                } else {
                    return true;
                }

            })
            .filter(obj => {
                let { price } = new_course_filter
                if (price) {
                    let course_price = parseInt(obj.course_price)
                    if (price == "500元~700元") {
                        return (500 < course_price && course_price < 700)
                    } else if (price == "700元-1000元") {
                        return (700 <= course_price && course_price < 1000)
                    } else if (price == "1000元-1500元") {
                        return (1000 <= course_price && course_price < 1500)
                    } else {
                        return (1500 <= course_price)
                    }

                } else {
                    return true;
                }

            })
        this.setState({ new_course_list: filter, condition: new_course_filter })
    }



    render() {

        console.log("new_course_list", this.state.new_course_list)
        console.log("course_list", this.state.course_list)
        console.log("course_search", this.state.course_search)
        console.log("course_filter_start", this.state.course_filter_start)
        // console.log("condition", this.state.condition)
        return (
            <>
                <section className="course_navbar">

                    <nav className="course_navbar_b close_move">
                        <div className="course_wordBox">
                            <div className="course_wordBoxUp course_bar">
                                <p className="course_wordHalfUp">CLASS</p>
                            </div>
                            <div className="course_wordBoxDown course_bar">
                                <p className="course_wordHalfDown">CLASS</p>
                            </div>
                        </div>
                        <FaRegTimesCircle className="close_option " />
                        <Course_filter course_list={this.course_total_onclick.bind(this)}
                            kid_name={this.state.course_filter_title_content}
                            title={this.state.course_filter_title_wrap}
                            filter={this.course_filter_fn.bind(this)}
                            search={this.course_blur_fn.bind(this)}
                            course_blur={this.state.course_blur}
                            course_page={this.state.course_page}
                            pre_page={this.course_page_pre_fn.bind(this)}
                            next_page={this.course_page_next_fn.bind(this)}
                            search_filter={this.course_filter_search.bind(this)}
                            color={this.state.condition}
                            search_fn={this.state.search_fn}
                        />

                    </nav>
                    <section className="course_store">
                        <FaSearch className="open_option " />
                        {/* 店家選單  */}
                        <Course_navbar />
                        <section className="course_store_content_wrap">
                            <div className="course_store_content_minWrap"></div>
                            <div className="course_store_slide">
                                <Course_store state={this.state.store_wrap} />
                            </div>
                        </section>
                        {/* 店家選單結束 */}

                        {/* filter bar開始 */}
                        {this.state.course_search.name === "" ? (this.state.course_filter_start.length > 0 ?
                            (this.state.new_course_list.length > 0 ? <Course_list list={this.state.new_course_list} /> : null)
                            : <Course_list list={this.state.course_list} />)
                            : <Course_list list={this.state.new_course_list} />}
                        {/* filter bar結束 */}


                    </section>


                </section>
            </>
        )
    }
}

export default withRouter(CourseAll);