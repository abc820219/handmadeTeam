import React, { Component } from "react";

import "../../../node_modules/slick-carousel/slick/slick"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

import Slider from "react-slick";


class IngredientsAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        return (
            <>
                <div className="ingredientsAll">
                    <div className="ingredientsLeft">
                        <div className="recipeChoose">
                            <Slider
                                asNavFor={this.state.nav1}
                                ref={slider => (this.slider2 = slider)}
                                slidesToShow={5}
                                swipeToSlide={true}
                                focusOnSelect={true}
                            >
                                <div>
                                    <img src={`/image/ingredients/abstract01.jpg`} />
                                </div>
                                <div>
                                    <img src={`/image/ingredients/abstract02.jpg`} />
                                </div>
                                <div>
                                    <img src={`/image/ingredients/abstract03.jpg`} />
                                </div>
                                <div>
                                    <img src={`/image/ingredients/abstract04.jpg`} />
                                </div>
                                <div>
                                    <img src={`/image/ingredients/abstract05.jpg`} />
                                </div>
                                <div>
                                    <img src={`/image/ingredients/abstract06.jpg`} />
                                </div>
                            </Slider>
                        </div>
                        <div className="recipeNameLeft">
                            <p></p>
                        </div>
                    </div>
                    <div className="ingredientsRight">
                        <div className="recipeNameRight">
                            <p></p>
                        </div>
                        <div className="recipeBigImages">
                            <Slider
                                asNavFor={this.state.nav2}
                                ref={slider => (this.slider1 = slider)}
                            >
                                <div>
                                    <img src={`/image/ingredients/abstract01.jpg`} />
                                </div>
                                <div>
                                    <img src={`/image/ingredients/abstract02.jpg`} />
                                </div>
                                <div>
                                    <img src={`/image/ingredients/abstract03.jpg`} />
                                </div>
                                <div>
                                    <img src={`/image/ingredients/abstract04.jpg`} />
                                </div>
                                <div>
                                    <img src={`/image/ingredients/abstract05.jpg`} />
                                </div>
                                <div>
                                    <img src={`/image/ingredients/abstract06.jpg`} />
                                </div>
                            </Slider>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default IngredientsAll;