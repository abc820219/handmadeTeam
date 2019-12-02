import React, { Component } from "react";
import "../../commom/scss/course/course_list_navbar.scss";


import { Link } from 'react-router-dom'

class Course_list extends Component {
    constructor(props) {
        super(props)


    }


    render() {
      
        return (
            <>
                <main className="course_list_wrap" id="course_list" >

                    {this.props.list.map((thing, index) => {
                        return (

                            <div className={`course_card color${index%8}`}  key={thing.course_sid} >
                                <img src={`/image/course_img/360/${thing.course_list}`}  className="course_card_img"/>
                                <div className="course_card_hover">
                                    <Link key={thing.course_sid} to={`/handmade/store/${thing.store_sid}/course/${thing.course_sid}`} >
                                    {/* <NavLink key={thing.course_sid} to={"/handmade/store/course/"+ thing.course_sid} > */}
                                        <div className="course_add_cart">MORE</div>
                                    </Link>
                                    <div className="course_card_mark">
                                        <div className="course_card_mark_s">{thing.course_mark}</div>
                                        <div className="course_card_mark_l">{thing.course_name}</div>
                                        <div className="course_card_mark_m">${thing.course_price}</div>
                                    </div>
                                </div>

                            </div>

                        )
                    })}
                </main>

            </>
        )
    }
}


export default Course_list;