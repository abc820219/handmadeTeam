import React, { Component } from "react";
import { FaFacebookSquare, FaInstagram, FaLine } from "react-icons/fa";


class Course_store extends Component {

    render() {
        if (this.props.state && this.props.state[0] && this.props.state[1])

            return (
                <>

                    <div id="carouselExampleIndicators" className="carousel" data-interval="false">
                        <div className="carousel-inner" data-wrap="false">
                            <div className="carousel-item active">
                                <div className="carousel_store_info">
                                    <h5 className="carousel_store_title">
                                        {/* <span className="carousel_store_title_min" >SUPER EAT BAKERY</span> */}
                                        INFO
                                    {/* <span className="carousel_store_title_min">SUPER EAT BAKERY</span> */}
                                    </h5>
                                    {this.props.state[0].map((str, index) => <li key={index}>{str}</li>)}
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="carousel_store_info">
                                    <h5 className="carousel_store_title">
                                        {/* <span className="carousel_store_title_min" >SUPER EAT BAKERY</span> */}
                                        WEB
                                    {/* <span className="carousel_store_title_min">SUPER EAT BAKERY</span> */}
                                    </h5>
                                    <li>
                                        <FaFacebookSquare />
                                        {this.props.state[1][0]}</li>
                                    <li>
                                        <FaInstagram />
                                        {this.props.state[1][1]}</li>
                                    <li>
                                        <FaLine />
                                        {this.props.state[1][2]}</li>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div>
                                    <iframe width='100%' height='100%' frameBorder='0' scrolling='no' marginHeight='0' marginWidth='0' src={`https://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=${this.props.state[2]}&z=16&output=embed&t=`}></iframe>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={`/image/course_img/classroom/${this.props.state[3]}`} alt="..." />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                </>
            )
        else
            return (<>
                <div className="course_loading">
                    <h3>資料讀取中...</h3>
                </div>
            </>)
    }
}

export default Course_store;