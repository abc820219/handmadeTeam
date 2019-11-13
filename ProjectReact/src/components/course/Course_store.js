import React, { Component } from "react";

class Course_store extends Component {

    render() {
        if (this.props.state && this.props.state[0] && this.props.state[1])

            return (
                <>

                    <div id="carouselExampleIndicators" className="carousel " data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div>
                                    <li>{this.props.state[0][0]}</li>
                                    <li>{this.props.state[0][1]}</li>
                                    <li>{this.props.state[0][2]}</li>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div>
                                    <li>{this.props.state[1][0]}</li>
                                    <li>{this.props.state[1][1]}</li>
                                    <li>{this.props.state[1][2]}</li>
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
                <h1>Course_store 資料有短缺</h1>
            </>)
    }
}

export default Course_store;