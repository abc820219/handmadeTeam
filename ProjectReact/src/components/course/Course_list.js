import React, { Component } from "react";
import "../../commom/scss/course/course_list_navbar.scss";
import Course_detail from "./Course_detail";

import { NavLink } from 'react-router-dom'

class Course_list extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        // if (this.props.list)
        console.log(this.props.list)
        return (
            <>
                {this.props.list.map((thing, index)=>{
                    return (
                        <div id="course_list" className="course_list">
                                <NavLink key={thing.course_sid} to={""}>
                                    <img src={`/image/course_img/classroom/${thing.course_list}`} />
                                 </NavLink>

                            </div>
                    )
                })}
                <h1>hi</h1>
            </>
           
            // <>
            //     {this.props.list.map(thing => {
            //             {/* <main className="course_list_wrap"> </main> */}
            //                 <div id="course_list" className="course_list">
            //                     {/* <Course_detail key={thing.course_sid} to={""}>
            //                         <img src={`/image/course_img/classroom/${thing.course_list}`} />
            //                     </Course_detail> */}

            //                 </div>

                    

            //     })
            //     }
            //             </>
          
        )
    }
}


export default Course_list;