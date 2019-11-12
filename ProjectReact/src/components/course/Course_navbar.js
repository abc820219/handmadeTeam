import React, { Component } from "react";
import "../../commom/scss/course/course_list_navbar.scss";


class Course_navbar extends Component {
    constructor() {
        super()
        this.state = {
            course_name: "",
            store_address: "",
            store_name: "",
            store_ind: [],
            store_web: [],
            store_map: "",
            course_classroom: [],
            store_wrap:[]



        }
    }

    componentDidMount() {
        const courseAll = async () => {
            try {
                const storeId = 2;
                const res = await fetch(`http://localhost:5000/handmade/store/course/${storeId}`);
                const data = await res.json()
                let course_name = data[0][0].course_name;
                this.setState({ course_name: course_name })

                let store_name = data[0][0].store_name;
                let store_wrap=[];
                let store_ind = [];
                let store_web=[];
                let store_map=[];
                // let store_classroom=[];
        
                this.setState({ store_name: store_name })
                let store_phone = data[0][0].store_phone;
                let store_address = data[0][0].store_address;
                console.log(store_address);
                this.setState({ store_address: store_address })
                let course_classroom = data[0][0].course_classroom;
                
                let community_facebook = data[0][0].community_facebook;
                let community_instagram = data[0][0].community_instagram;
                let community_line = data[0][0].community_line;
                let community_twitter =data[0][0].community_twitter;

                store_ind =[...store_ind,store_name,store_phone,store_address]
                this.setState({store_ind:store_ind})
                store_web =[...store_web,community_facebook,community_instagram,community_line,community_twitter]
                this.setState({store_web:store_web});
                this.setState({ course_classroom: course_classroom });
            } catch (error) {
                console.log(error);
                console.log("react fetch all failed")
            }
        }
        courseAll();
    }
    render() {

        return (
            <section className="course_navbar">
                <nav className="course_navbar_b"></nav>
                <section className="course_store">

                    {/* 影片選單  */}

                    <div className="course_store_navbar">
                        <div id="course_store_info" className="course_store_info course_hover_color1">
                            <img src="/image/course_img/info.png" alt="" />
                            <div className="course_store_info_wrap">
                                <div className="course_store_info_txt">INFO</div>
                                <div className="course_store_info_minTxt">introduction</div>
                            </div>
                        </div>

                        <div id="course_store_web" className="course_store_info course_hover_color2">
                            <img src="/image/course_img/web.png" alt="" />
                            <div className="course_store_info_wrap">
                                <div className="course_store_info_txt">WEB</div>
                                <div className="course_store_info_minTxt">website</div>
                            </div>

                        </div>

                        <div id="course_store_map" className="course_store_info course_hover_color3">
                            <img src="/image/course_img/map.png" alt="" />
                            <div className="course_store_info_wrap">
                                <div className="course_store_info_txt">MAP</div>
                                <div className="course_store_info_minTxt">map</div>
                            </div>
                        </div>

                        <div id="course_store_classroom" className="course_store_info course_hover_color4">
                            <img src="/image/course_img/classroom.png" alt="" />
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
                            {/* <img src="/image/course_img/檸檬乳酪蛋糕s.png" alt="" />
                            <img src="/image/course_img/烏龍鐵觀音乳酪蛋糕s.png" alt="" />
                            <img src="/image/course_img/玫瑰荔枝乳酪蛋糕s.png" alt="" /> */}
                        </div>
                        <div id="course_list_b" className="course_list">
                            {/* <img src="/image/course_img/鮮綠檸檬蛋糕s.png" />
                            <img src="/image/course_img/檸檬乳酪蛋糕s.png" />
                            <img src="/image/course_img/烏龍鐵觀音乳酪蛋糕s.png" /> */}
                        </div>
                        <div id="course_list_c" className="course_list">
                            {/* <img src="/image/course_img/玫瑰荔枝乳酪蛋糕s.png" alt="" />
                            <img src="/image/course_img/鮮綠檸檬蛋糕s.png" alt="" />
                            <img src="/image/course_img/檸檬乳酪蛋糕s.png" alt="" /> */}
                        </div>
                        <div id="course_list_d" className="course_list">
                            {/* <img src="/image/course_img/烏龍鐵觀音乳酪蛋糕s.png" alt="" />
                            <img src="/image/course_img/玫瑰荔枝乳酪蛋糕s.png" alt="" />
                            <img src="/image/course_img/玫瑰荔枝乳酪蛋糕s.png" alt="" /> */}
                        </div>
                    </main>
                </section>


            </section>

        )
    }
}

export default Course_navbar;