import React, { Component } from "react";
import "../../commom/scss/course/course_list_navbar.scss";
import { FaCaretRight,FaCaretLeft ,FaCaretSquareLeft,FaCaretSquareRight} from "react-icons/fa";


class Course_filter extends Component {



    render() {

        return (
            <>
                <div className="course_filter_bar">
                    <div className="course_option">
                        <FaCaretLeft className="course_option_left" onClick={this.props.pre_page} />
                        <FaCaretRight className="course_option_right" onClick={this.props.next_page} />
                    </div>
                    
                    <button type="button" className="course_search_bar" onClick={this.props.search} >搜尋
                    {this.props.course_blur === true ? null : <input type="search"  className="course_search" onChange={(e) => this.props.search_filter('name', e.target.value)}></input>}
                    </button>
                    <a className="course_total" href="#course_list" onClick={this.props.course_list}>所有課程</a>

                    {this.props.course_page === "種類" ?
                        (<div className="course_filter_thing course_kid " >{this.props.title[0]}
                            {this.props.kid_name[0].map((str, index) =>
                                <button  type="button" key={index}  onClick={() => this.props.filter('kid', str)} className={this.props.color.kid === str ? "course_filter_active" : null}>{str}</button>)}
                        </div>) : null}

                    {this.props.course_page === "口味" ?
                        (<div className="course_filter_thing course_taste ">{this.props.title[1]}
                            {this.props.kid_name[1].map((str, index) => <button type="button" key={index} onClick={() => this.props.filter('taste', str)} className={this.props.color.taste === str ? "course_filter_active" : null}>{str}</button>)}
                        </div>) : null}
                    {this.props.color.kid === "蛋糕" ?
                        (this.props.course_page === "尺寸" ?
                            (<div className="course_filter_thing course_size">{this.props.title[2]}
                                {this.props.kid_name[2].map((str, index) => <button  type="button" key={index} onClick={() => this.props.filter("size", str)} className={this.props.color.size === str ? "course_filter_active" : null}>{str}</button>)}
                            </div>) : null) : null}
                    {this.props.course_page === "難易度" ?
                        (<div className="course_filter_thing course_difficult">{this.props.title[3]}
                            {this.props.kid_name[3].map((str, index) => <button  type="button" key={index} onClick={() => this.props.filter("difficult", str)} className={this.props.color.difficult === str ? "course_filter_active" : null}>{str}</button>)}
                        </div>) : null}
                    {this.props.course_page === "價格" ?
                        (<div className="course_filter_thing  course_price course_step" >{this.props.title[4]}
                            {this.props.kid_name[4].map((str, index) => <button  type="button" key={index} onClick={() => this.props.filter("price", str)} className={this.props.color.price === str ? "course_filter_active" : null} >{str}</button>)}
                        </div>) : null}
                </div>
            </>
        )
    }
}


export default Course_filter;